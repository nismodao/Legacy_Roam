import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
import Geolocation from './Geolocation';
var Confirmation = require('./Confirmation');
var Separator = require('./Helpers/Separator');
var styles = require('./Helpers/styles');

import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  MapView
} from 'react-native';

class YourRoam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
      <MapView region={this.state.region} style={styles.map}/>
      </Image>
    );
  }
}

module.exports = YourRoam;