/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Screen from './src/view/Screen/screen.tsx';
import {name as appName} from './app.json';
import Login from './src/view/Login/login';

AppRegistry.registerComponent(appName, () => Login);
