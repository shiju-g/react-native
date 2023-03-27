import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=sports&key=AIzaSyD4ezc65b7O6k9j0y4LYhPPiNZoydjAcY0"
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.items));

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=thriller&key=AIzaSyD4ezc65b7O6k9j0y4LYhPPiNZoydjAcY0"
    )
      .then((res) => res.json())
      .then((data) => setTrending(data.items));
  }, []);

  return (
    <SafeAreaView className="bg-indigo-500 pb-52">
      <StatusBar barStyle="light-content" />
      <Text className="px-3 py-2 text-xl text-indigo-500 font-bold text-center bg-white">
        Book Bin
      </Text>
      <Text className="text-lg font-bold text-white mt-3 ml-2">
        Sports Books
      </Text>
      <View>
        <ScrollView className="flex flex-row " horizontal={true}>
          {books?.map((item, index) => (
            <View
              className="w-36  h-fit my-5 mx-2 rounded-lg p-3 bg-white"
              key={index}
            >
              <Image
                className="w-full h-24 rounded-lg"
                src={item.volumeInfo.imageLinks.thumbnail}
              />
              <Text className="text-xs mt-2 font-bold">
                {item.volumeInfo.title.slice(0, 20)}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text className="mb-3 pl-3 text-lg text-white font-bold">
        Thriller Books
      </Text>
      <ScrollView className="flex w-full h-full bg-indigo-400   pt-1 rounded-xl">
        {trending?.map((item, index) => (
          <View
            className="flex flex-row rounded-lg  p-2 w-fit bg-white m-2  "
            key={index}
          >
            <Image
              className="w-20 h-20 rounded-lg"
              src={item.volumeInfo.imageLinks.thumbnail}
            />
            <View className="pl-2 pr-20">
              <Text className="font-bold text-sm">
                {item.volumeInfo.title.slice(0, 20)}
              </Text>
              <Text className="w-fit text-xs text-gray-500 mt-1 font-medium">
                {item.volumeInfo.description.slice(0, 80)}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
