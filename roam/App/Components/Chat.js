import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
var styles = require('./Helpers/styles');
var _ = require('underscore');

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


window.navigator.userAgent = 'react-native';
var io = require("../../node_modules/socket.io-client/socket.io");

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000', {
      transports: ['websocket']}); // you need to explicitly tell it to use websockets
    this.socket.on('connection', () => {
      console.log('connected!');
    });
    this.state = {
      text: '',
      incomingText:'',
      roamers: [{
        name: this.props.navigator.navigationContext._currentRoute.name,
        picture: this.props.navigator.navigationContext._currentRoute.picture}]
    }
  }
  fetchRoamers () {
    // fetch('http://localhost:3000/roamers?venue=' + this.props.navigator.id {
    //     method: 'GET'
    //   })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     this.setState({roamers: res});
    //   })
    //   .catch((error) => {
    //     console.log('error in fetching roamers');
    //   });
    // var profile = this.state.roamers[0];
    // var temp = [];
    // for (var i = 0; i< 3; i++) {
    //   temp.push(profile);
    // }
    // this.setState({roamers: temp});
  }
  componentDidMount () {
    var profile = this.state.roamers[0];
    var temp = [];
    for (var i = 0; i< 3; i++) {
      temp.push(profile);
    }
    this.setState({roamers: temp});
  }

  handleMessage (event) {
    this.setState({text: event.nativeEvent.text});
    console.log(this.state.text);
    this.socket.emit('message', this.state.text)
    console.log('this.socket is', this.socket.emit);
    this.socket.on('message', (msg) => {
      console.log(msg);
      this.setState({incomingText: msg})});
  }
  
  render() {
    return(
      <Image style={styles.chatImage}
        source={require('../../imgs/uni.jpg')}>
      <Text style={styles.chatRoom}> Roam Room </Text>
      {this.state.roamers.map((roamer, index) => {
        return <View key={index}>
                  <View  style={styles.flowChat}>
                    <Image style={styles.image}  source={{uri: roamer.picture}}/>
                      <TextInput
                        style={styles.textInput}
                        value={this.state.text}
                        onChange={this.handleMessage.bind(this)}>
                      </TextInput>
                  </View> 
               </View>
      })}
      <TouchableHighlight onPress={()=> {
        this.setState({text:" "})
        }}>
        <Text></Text>
      </TouchableHighlight>
      </Image>
    )
  }
}

module.exports = Chat;