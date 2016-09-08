
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
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  projectName:{
    alignSelf:'flex-start',
    alignItems:'center',
    color:'rgba(255,255,255,1)',
    fontSize:20,
    marginLeft:10,
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
  topBarBottom:{
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:15,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
  leftBottomBar:{
    flexDirection:'column',
    marginLeft:10,
    marginTop:5,
  },
  rightBottomBar:{
    flexDirection:'row',
    justifyContent:'center',
    // marginRight:20,
  },
  scrollView:{
    left:0,
    marginTop:150,
    backgroundColor:'rgba(255,255,255,0.9)',
    marginBottom:0,
    padding:10,
  },
  textHeader:{
    fontSize:18,
    fontWeight:'500',
    color:'rgba(0,0,0,0.87)',
    paddingTop:8,
    marginBottom:7,
  },
  incompleteView:{
    backgroundColor:'#FFB42B',
    padding:10,
    marginBottom:10,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
  date:{
    color:'white',
    fontWeight:'600',
    fontSize:16,
    marginBottom:4,
  },
  time:{
    color:'white',
    fontSize:13
  },
  completeView:{
    backgroundColor:'white',
    padding:10,
    marginBottom:10,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
  date2:{
    color:'rgba(0,0,0,0.87)',
    fontWeight:'600',
    fontSize:16,
    marginBottom:4,
  },
  time2:{
    color:'rgba(0,0,0,0.7)',
    fontSize:13
  },
  bottomBar:{
    backgroundColor:'#68BD45', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    bottom:0,
    left: 0,
    right: 0,
    height:50,
    flexDirection:'row',
    alignItems: 'center',
    // width: width/3.6,
    justifyContent: 'center',
  },
  plusButtonView:{
    flex:1,
    alignSelf:'flex-start',
    marginLeft:10,
    marginTop:2,
  },
  addIcon:{
    backgroundColor:'rgba(0,0,0,0)',
    color:'#68BD45',
    fontSize:28,
    fontWeight:'600',
    marginLeft:5,
  },
  newFormView:{
    flex:3,
  },
  newFormText:{
    color:'white',
    fontSize:18,
  }
});
