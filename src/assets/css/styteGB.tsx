import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';

type Style = {
  screen: ViewStyle;
  screen_img: ViewStyle;
  logo: ViewStyle;
  _img: ImageStyle;
  _img_logo: ImageStyle;
  title: TextStyle;
  _title: TextStyle;
};

export default StyleSheet.create<Style>({
  //style Intro, Login, Config
  screen: {
    backgroundColor: '#702C90',
    flex: 1,
  },
  screen_img: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: -1,
  },
  logo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '25%',
  },
  _img: {
    height: 450,
    width: 300,
  },
  _img_logo: {
    height: 83,
    width: 81,
  },
  title: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
