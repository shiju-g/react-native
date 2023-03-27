import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

const UserScreen = () => {
  return (
    <SafeAreaView className=" flex-1 bg-gray-300">
      <Text className="text-green-500 py-2 bg-white text-center text-xl font-bold">
        Welcome
      </Text>
      <View className="relative">
        <Image
          className="w-full h-24"
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <Image
          style={{ borderWidth: 2, borderColor: "white" }}
          className="w-24 h-24 rounded-full absolute left-3 top-10 z-10"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <View className="bg-white py-5 ">
          <Text className="text-lg font-bold text-center">Marvin Stewerd</Text>
          <Text className="text-center text-sm text-gray-500 font-medium">
            8598673232
          </Text>
          <Text className="text-center flex mt-2 flex-row text-sm font-bold text-yellow-500">
            Birthday:
            <Text className=" text-gray-600 text-xs"> 10/11/1995 </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
