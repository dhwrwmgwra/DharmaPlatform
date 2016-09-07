
'use strict';

import {StyleSheet,Platform} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.987131313)',
  },
  topBar:{
    backgroundColor:'#872175', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    top:20,
    left: 2,
    right: 0,
    width:width-4,
  },
  topBarTop:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width/3.6,
    justifyContent: 'space-between',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  projectName:{
    alignSelf:'center',
    alignItems:'center',
    color:'rgba(255,255,255,1)',
    marginLeft:80,
    fontSize:20,
    fontWeight:'400'
  },
  backIcon:{
    color:'white',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    fontSize:22,
    fontWeight:'100'
  },
  scrollView:{
    left:2,
    width:width-4,
    marginTop:64,
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
