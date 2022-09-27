import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import Yelp from "../api/Yelp";

export const ResultsShowScreen = ({ navigation }) => {
  const [result, setReult] = useState(null);
  const id = navigation.getParam("id");
  navigation.getParam("id");
  const getResult = async id => {
    const Response = await Yelp.get(`/${id}`);
    setReult(Response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text> {result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => {
          return photo;
        }}
        renderItem={({ item }) => {
          return <Image style={styles.photos} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photos: {
    height: 150,
    width: 200,
    margin: 15,
  },
});
