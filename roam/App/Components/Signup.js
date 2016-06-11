import React, { Component } from 'react';
var Time = require('./Time');
var styles = require('./Helpers/styles');
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

console.log('Time on Signup page = ', Time);

import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passwordAgain: '',
      email: '',
      isLoading: false,
      error: false,
      errorMessage: ''
    };
  }

  getUser(token) {
    fetch('https://graph.facebook.com/me?fields=name,email,picture.type(large)&access_token=' + token) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var firstName = data.name.split(" ")[0];
        var lastName = data.name.split(" ")[1];
        var email = data.email;
        var id = data.id;
        var picture = data.picture.data.url;
        fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            fb: true,
            email: email,
            password: 'null',
            picture: picture
          })
        })
        .then((res) => {
          console.log('firstName is ', firstName);
          res.json();
          this.props.navigator.push({
            title: firstName + ' -- when are you free?',
            email: email,
            component: Time,
            name: firstName,
            picture: picture
          });
        })
        .catch((error) => {
          console.log('Error in facebook post to server', error);
        })
      })
    .catch((error) => { 
       console.log("Error in facebook get user infor", error);
    });
  }


  handleSubmit() {
    this.setState({
      isLoading: true
    });
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //check if the passwords entered matches
    if (this.state.password !== this.state.passwordAgain) {
      this.setState({isLoading: false, error: true, errorMessage: 'Passwords do not match!'});
    }
    //check if the email supplied is valid
    if (!re.test(this.state.email)) {
      this.setState({isLoading: false, error: true, errorMessage: 'Invalid Email!'});
    }

    //ensure all fields in our state is not empty
    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.password !== '' && this.state.passwordAgain !== '' && (this.state.password === this.state.passwordAgain) && re.test(this.state.email)) {

      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
        })
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log('RESPONSE FROM SERVER ON SIGNUP PAGE', res);

        if (res.message === 'User created') {
          this.props.navigator.push({
            title: 'Select Time',
            email: this.state.email.toLowerCase(),
            component: Time
          });
          //Set isloading to false after conditions
          this.setState({
            isLoading: false
          });
        } else {
          this.setState({
            error: true,
            errorMessage: 'Email already exists!',
            isLoading: false
          });
          console.log('CURRENT ERROR:',this.state.error);
          console.log('SIGNUP ERROR MESSAGE:', this.state.errorMessage);
        }

      })
      .catch((error) => {
        console.log('Error handling submit:', error);
      });
      //Need logic to check if username is taken in the database
      //Check if the passwords are matching
      //Check if the email is valid
      //Route to the hobbies screen
    }

  }

  render() {
    var showErr = (
      this.state.error ? <Text style={styles.errorMessage}> {this.state.errorMessage} </Text> : <View></View>
    );
    return(
      <Image style={styles.backgroundImage}
        source={require('../../imgs/uni.jpg')} >
        <Text style={styles.title}> sign up </Text>
        {/* Fields that we want to bind the username and password input */}
        <TextInput
          style={styles.submit}
          placeholder="Your first name"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({firstName: text})}
          value={this.state.firstName}
          />
        <TextInput
          style={styles.submit}
          placeholder="Your last name"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({lastName: text})}
          value={this.state.lastName}
          />
        <TextInput
          style={styles.submit}
          placeholder="Enter a password"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          />
        <TextInput
          style={styles.submit}
          placeholder="Enter password again"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({passwordAgain: text})}
          value={this.state.passwordAgain}
          secureTextEntry={true}
          />
        <TextInput
          style={styles.submit}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white" >
            <Text style={styles.buttonText}> Create Account </Text>
        </TouchableHighlight>
        <LoginButton
          style={styles.button}
          readPermissions={["email","user_friends", "public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    {this.getUser.bind(this, data.accessToken.toString())()};
                  }
                )
              }
            }
          }
          />
        {/* This is the loading animation when isLoading is set to true */}
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicatorIOS>
        {showErr}

      </Image>
    )
  }
}

module.exports = SignUp;
