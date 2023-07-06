import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Allowance_img from './../assets/img/Allowance_img.png';

const Allowance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Gold Deposits - Events Exploration Page</Text>
        <Text style={styles.description}>
          Explore, Map, Analyse, Mine & Extract. For best results, choose events from your category and focus!
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Image source={Allowance_img} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',

    border:'1px solid black',
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: '#24754F',
  },
  leftContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#ECECEC',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  image: {
    width: 150,
    height: 150
  },
});

export default Allowance;
