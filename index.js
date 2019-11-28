/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import FlightsPage from "./src/flights/FlightsPage";

AppRegistry.registerComponent(appName, () => FlightsPage);
