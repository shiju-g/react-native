import React from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";

const SearchScreen = () => {
  const [books, setBooks] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const copy = [...books];

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=love&key=AIzaSyD4ezc65b7O6k9j0y4LYhPPiNZoydjAcY0"
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.items));
  }, []);

  const searchHandler = (text) => {
    const data = copy?.filter((item) => {
      return item.volumeInfo.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredData(data);
  };

  return (
    <ScrollView className="bg-indigo-500">
      <Text className="px-3 py-2 text-xl text-indigo-500 font-bold text-center bg-white">
        Book Bin
      </Text>
      <View className="flex flex-row items-center bg-white my-3 p-2 mx-2 rounded-lg">
        <Icon name="search" size={22} />
        <TextInput
          className="ml-2 font-medium w-full lowercase"
          placeholder="Search Books"
          onChangeText={searchHandler}
        />
      </View>
      <View className="bg-indigo-400 rounded-lg p-2">
        <Text className="text-white font-bold text-lg ml-2">Books</Text>
        {filteredData?.map((item, index) => (
          <View
            className="flex flex-row rounded-lg  p-2 w-fit bg-white m-2  "
            key={index}
          >
            <Image
              className="w-20 h-20 rounded-lg"
              src={item.volumeInfo.imageLinks.thumbnail}
            />
            <View className="pl-2 pr-20">
              <Text className="font-bold text-sm">{item.volumeInfo.title}</Text>
              <Text className="w-fit text-xs text-gray-500 mt-1 font-medium">
                {item.volumeInfo.description?.slice(0, 70)}
              </Text>
              <Text className="text-xs mt-1 flex flex-row text-gray-500">
                Author:{" "}
                <Text className="font-bold text-xs text-gray-700">
                  {" "}
                  {item.volumeInfo.authors[0]}
                </Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
