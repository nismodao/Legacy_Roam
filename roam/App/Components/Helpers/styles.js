'use strict';

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 70,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 5
  },
  chatRoom: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 5
  },
  header: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },
  submit: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    backgroundColor: '#ff0066',
    borderRadius:10,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 18
  },
  unselected: {
    fontSize: 20,
    backgroundColor: 'orange',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  selected: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex:1,
    width:null,
    height: null,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  chatImage: {
    flex:1,
    width:null,
    height: null,
    padding: 0,
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  errorMessage: {
    backgroundColor: 'transparent',
    color: '#ff0066',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -23
  },
  confirmation: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 25,
    paddingBottom: 10
  },
  location: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  historyBox: {
    backgroundColor: 'rgba(255,000,255,0.1)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    margin: 10
  },
  history: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: 75,
    borderRadius: 37.5,
    width: 75,
    flexDirection: 'row'
  },
  flowChat: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 30,
    marginLeft: 20
  },
  textInput: {
    height: 40, 
    width: 250,
    marginLeft: 10,
    marginTop: 15, 
    borderColor: 'white',
    color: 'white', 
    borderWidth: 1,
    borderRadius: 20, 
    flexDirection: 'row'
  }

});

module.exports = styles;
