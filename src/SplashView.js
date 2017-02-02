import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet} from 'react-native';
import ListView from './ListView';

class SplashView extends Component {
  constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }
  _navigate(){
  this.props.navigator.push({
    name: 'ListView', // Matches route.name
  })
}

componentDidMount(){
  setTimeout(() => {this._navigate({timePassed: true})}, 2000)
}

  render() {
    return (
      <Image
              source={require('./img/login_bg.png')}
              style={styles.container}>
              <Text style={{color:"#FF7260", marginBottom: 150, textShadowColor: 'black', textShadowOffset:{width: 1, height: 1}, fontFamily: "Dolce", fontSize:42}}>A LIST OF TASKS</Text>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  // cygrp: {
  //   fontSize: 25,
  //   textAlign: 'center',
  //   margin: 10,
  //   color:'green',
  // },
  // todo: {
  //   color: 'pink',
  // },
});



module.exports = SplashView;
