import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
import Geolocation from './Geolocation';
// var Geolocation = require('./Geolocation');
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

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: '1 hour'
    };
  }
  handleSelected(choice) {
    this.setState({
      selectedTime: choice
    });
  }

  handleSubmit() {
    console.log('Sending ROAM request!');
    this.props.navigator.push({
      title: 'Confirmation',
      email: this.props.navigator.navigationContext._currentRoute.email,
      selectedTime: this.state.selectedTime,
      component: Confirmation
    });
  }

  render () {
    const options = [
      '1 hour',
      '2 hours',
      '4 hours',
      'Anytime'
    ];
    return (
      <Image style={styles.backgroundImage}
      source={require('../../imgs/uni.jpg')} >
        <Geolocation />
        <Text style={styles.header}> pick time : </Text>
        <SegmentedControls
          tint={'#ff0066'}
          selectedTint={'white'}
          backTint={'white'}
          options={options}
          allowFontScaling={false}
          fontWeight={'bold'}
          onSelection={this.handleSelected.bind(this)}
          selectedOption={this.state.selectedTime} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)} >
            <Text style={styles.buttonText}> Roam! </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

module.exports = Time;


