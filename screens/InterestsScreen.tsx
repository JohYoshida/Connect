import React, { useState } from 'react';

import { Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// Create a list of strings and a list of booleans for each category of interests

const SportsList = [
  "Soccer",
  "Basketball",
  "Tennis",
  "Baseball",
  "Golf",
  "Running",
  "Volleyball",
  "Swimming",
  "Boxing",
  "Skiing"
];
const SportsBool = [
  0, 1, 0, 0, 1, 0, 1, 0, 0, 1
];

const ArtsList = [
  "Music",
  "Film",
  "Painting",
  "Ceramics",
  "Drawing",
  "Literature",
  "Sculpture",
  "Photography",
  "Performing Arts",
  "Printworks"
];
const ArtsBool = [
  0, 1, 0, 0, 1, 0, 1, 0, 0, 1
];

// Create list of categories and their titles
const Categories = [
  SportsList,
  ArtsList
];
const CategoriesList = [
  "Sports",
  "Arts"
];



export default function InterestsScreen({ navigation }: RootTabScreenProps<'Interests'>) {
  // Create state hooks
  const [sports, setSports] = useState([0, 1, 0, 0, 1, 0, 1, 0, 0, 1]);
  const [arts, setArts] = useState([1, 0, 0, 1, 0, 0, 1, 0, 1, 1]);

  // Put hooks and their setters into arrays
  const hooks = [sports, arts];
  const setHooks = [setSports, setArts];

  /**
   * Utility function to toggle a bit in any state hook
   * list: an array of boolean integers
   * setList: state hook settter function
   * index: the index of the boolean to flip
   */
  const toggle = (list, setList, index) => {
    // Copy list to new array
    let newList = [...list];
    // Flip bit in list at index
    newList[index] == 0 ? newList[index] = 1 : newList[index] = 0;
    // Update list
    setList(newList);
  }

  // Create Interests object for ScrollView
  let Interests = [];
  Categories.forEach((category, c_index) => {
    //Add title
    Interests.push(<Text style={styles.title}>{CategoriesList[c_index]}</Text>);
    // Add list of interests
    category.forEach((element, i) => {
      Interests.push(
        <Button
          title={element}
          color={hooks[c_index][i] == 0 ? "#9a0023" : "#249a00"}
          onPress={toggle.bind(this, hooks[c_index], setHooks[c_index], i)}
        />
      );
    });
    // Add separator
    Interests.push(<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />);
  });


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Interests}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    marginTop: 10,
    width: '80%',
  },
});
