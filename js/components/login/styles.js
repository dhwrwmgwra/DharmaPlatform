
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
module.exports = StyleSheet.create({
    // mainContainer:{
    //   flex:1,
    //   backgroundColor:'rgba(52,52,52,1)',
    // },
    innerContainer:{
      flex:1,
      backgroundColor:'#292B31',
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'column',
      top:0,
      left: 0,
      right: 0,
    },
    imageView:{
      marginTop:50,
      width:80,
      height:80,
      backgroundColor:'#872175',
      borderRadius:80,
      marginBottom:20,
    },
    topBarImageStyle:{
      width:80,
      height:80,
    },
    inputView:{

    },
    textInputStyle:{
      height:40,
      width:width-120,
      borderColor:'rgba(255,255,255,0.2)',
      borderWidth:1,
      marginBottom:8,
      padding:10,
      color:'rgba(255,255,255,0.678)',
      fontSize:14,
    },
    buttonView:{
      marginTop:10,
      width:width-120,
      backgroundColor:'#872175',
    },
    loginText:{
      padding:10,
      fontWeight:'600',
      alignSelf:'center',
      color:'white',
    }
});
