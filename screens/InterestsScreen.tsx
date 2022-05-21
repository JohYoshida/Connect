import { Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

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

const InterestsList = [
  SportsList
];

export default function InterestsScreen({ navigation }: RootTabScreenProps<'Interests'>) {
  let Interests = [];
  console.log(InterestsList);
  SportsList.forEach((element, index) => {
    Interests.push(
      <Button
        title={element}
        color={SportsBool[index] == 0 ? "#d91212" : "#15e43c"}
        onPress={() => SportsBool[index] == 0 ? SportsBool[index] = 1 : SportsBool[index] = 0}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interests</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
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
});
