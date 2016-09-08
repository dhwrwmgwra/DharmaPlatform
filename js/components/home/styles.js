
'use strict';

import {StyleSheet,Platform} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
    topBar:{
      backgroundColor:'#872175', flexDirection: 'column', justifyContent: 'space-between',
      position:'absolute',
      paddingTop:20,
      left: 0,
      right: 0,
    },
    topBarTop:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:20

    },
    projectNUsernameView:{
      flexDirection:'column',
      marginLeft:10,
    },
    topBarImageStyle:{
      width:80,
      height:80,
    },
    username:{
      fontSize:16,
      color:'rgba(255,255,255,0.8)'
    },
    projectName:{
      marginTop:15,
      fontSize:24,
      fontWeight:'600',
      color:'white',
    },
    topBarBottom:{
      alignItems:'flex-end'
    },
    logout:{
      paddingTop:3,
      fontSize:12,
      marginBottom:10,
      marginRight:10,
      color:'rgba(255,255,255,0.8)',
    },
    scrollView:{
      marginTop:157,
      left:0,
      backgroundColor:'rgba(255,255,255,0.8999)',
      marginBottom:0,
      paddingTop:10,
    },
    projectCards:{
      flexDirection:'column',
      marginRight:10,
      marginLeft:10,
      marginBottom:10,
      backgroundColor:'white',
      shadowOpacity: 0.123,
      shadowRadius: 3,
      shadowOffset: {
         height: 1,
         width: -1
       },
      elevation:2,
    },
    projectTitle:{
      marginTop:10,
      marginLeft:10,
      fontSize:16,
      fontWeight:'600',
      color:'rgba(0,0,0,0.777)',
    },
    projectLocation:{
      marginTop:5,
      marginLeft:10,
      color:'rgba(0,0,0,0.666)',
    },
    projectCPR:{
      flexDirection:'row',
      marginLeft:10,
      marginTop:3
    },
    projectC:{
      flexDirection:'row',
      margin:5
    },
    projectP:{
      flexDirection:'row',
      margin:5
    },
    projectR:{
      flexDirection:'row',
      margin:5
    },
});
