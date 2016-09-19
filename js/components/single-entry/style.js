
'use strict';

import {StyleSheet,Platform} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
    // backgroundColor:'rgba(52,52,52,1)',
  },
  topBar:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    position:'absolute',
    left: 0,
    right: 0,
  },
  topBarTop:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  projectName:{
    alignSelf:'flex-start',
    alignItems:'center',
    color:'rgba(255,255,255,1)',
    fontSize:20,
    marginLeft:20,
    fontWeight:'400'
  },
  projectNameView:{
    flex:3,
  },
  backIconView:{
    flex:1
  },
  backIcon:{
    color:'white',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    fontSize:22,
    fontWeight:'100'
  },
  scrollView:{
    left:0,
    marginTop:55,
    backgroundColor:'rgba(255,255,255,0.9)',
    marginBottom:2,
    padding:10,
  },
  entryPointHeader:{
    fontSize:16,
    color:'rgba(0,0,0,0.7)',
    fontWeight:'600',
    paddingTop:8,
    marginBottom:15,
  },
  greenView:{
    backgroundColor:'#68BD45',
    padding:10,
    marginBottom:15,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
  header:{
    color:'rgba(255,255,255,0.9786)',
    fontWeight:'600',
    fontSize:16,
    marginBottom:4,
  },
  footer:{
    color:'rgba(255,255,255,0.9786)',
    fontSize:11
  },
  redView:{
    backgroundColor:'#FE4D4D',
    padding:10,
    marginBottom:15 ,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
});
