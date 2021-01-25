import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styleGB from '../../assets/css/styteGB';
import {Button, TextInput} from 'react-native-paper';

const Login = () => {
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
          <TextInput style={styles.input} label="User" mode="outlined" />
          <TextInput style={styles.input} label="Password" mode="outlined" />
          <TouchableOpacity style={styles.button}>
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_setting}>
          <Button
            icon={() => (
              <Image
                source={require('../../assets/img/icons8-settings-48.png')}
                style={[
                  {
                    transform: [{scaleX: 1}],
                  },
                  {
                    width: 48,
                    height: 48,
                    tintColor: 'white',
                  },
                ]}
              />
            )}></Button>
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
  button_setting: {
    paddingRight: 10,
    alignItems: 'flex-end',
  },
});

export default Login;
