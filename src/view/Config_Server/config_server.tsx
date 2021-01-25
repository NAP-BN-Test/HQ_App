import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styleGB from '../../assets/css/styteGB';

const ConfigServer = () => {
  return (
    <View style={styleGB.screen}>
      <View style={{flex: 1}}>
        <View style={styleGB.screen_img}>
          <Image
            style={styleGB._img}
            source={require('../../assets/img/screen.png')}></Image>
        </View>
        <View style={styleGB.logo}>
          <Image
            style={styleGB._img_logo}
            source={require('../../assets/img/logo.png')}></Image>
        </View>
        <View style={styleGB.title}>
          <Text style={styleGB._title}>QUẢN LÝ KHO</Text>
        </View>
        <View style={styles.intro}>
          <TextInput style={styles.input} label="Server" mode="outlined" />
          <TextInput style={styles.input} label="DB" mode="outlined" />
          <TouchableOpacity style={styles.button}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    height: '45%',
    alignItems: 'center',
    paddingTop: 50,
  },
  input: {
    width: '80%',
    paddingBottom: '3%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6A41E',
    width: '80%',
    height: 50,
  },
});

export default ConfigServer;
