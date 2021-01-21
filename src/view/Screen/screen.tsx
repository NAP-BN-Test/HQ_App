import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styleGB from '../../assets/css/styteGB';

const Screen = () => {
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
          <Image
            style={styles._intro_logo}
            source={require('../../assets/img/logoVSL.png')}></Image>
          <Text style={styles.text}>VIET SOLUTION</Text>
          <Text style={styles.text1}>TECHNOLOGY</Text>
          <Image
            style={styles._intro_logo1}
            source={require('../../assets/img/logoNAP.png')}></Image>
          <Text style={styles.text}>NAM AN PHÚ</Text>
          <Text style={styles.text1}>TECHNOLOGY JSC</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    height: '55%',
    alignItems: 'center',
    paddingTop: 50,
  },

  _intro_logo: {
    height: 70,
    width: 70,
  },

  _intro_logo1: {
    height: 70,
    width: 70,
    paddingTop: 10,
  },

  text: {
    color: 'white',
    paddingTop: 10,
    fontWeight: 'bold',
  },

  text1: {
    color: 'white',
    paddingBottom: 20,
    fontWeight: 'bold',
  },
});

export default Screen;
