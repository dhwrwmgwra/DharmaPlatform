
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
    backgroundColor:'#68BD45', flexDirection: 'column', justifyContent: 'space-between',
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
    fontSize:32,
    fontWeight:'100'
  },
  scrollView:{
    left:0,
    marginTop:64,
    backgroundColor:'rgba(255,255,255,1)',
    marginBottom:40,
  },
  columnView:{
    padding:20,
  },
  columnViewHeader:{
    fontSize:16,
    fontWeight:'600',
    color:'rgba(0,0,0,0.578)',
    // marginBottom:20,
  },
  columnViewInput:{
    // marginLeft:100,
    borderBottomWidth: 0.55555,
    borderColor:'#68BD45',
    // width:100,
    // height: 40
  },
  columnViewTextInput:{
    height: 25,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  divider:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.0567)',
    marginTop:5,
    marginBottom:5,
  },
  bottomBar:{
    backgroundColor:'#eaeced', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    bottom:0,
    left: 0,
    right: 0,
    // flexDirection:'row',
    padding:10,
    alignItems: 'flex-end',
    shadowOpacity: 0.523,
    shadowRadius: 1,
    shadowOffset: {
       height: 1,
       width: -1
     },
  },
  bottomBarText:{
    color:'rgba(0,0,0,0.467)',
    fontSize:16,
    fontWeight:'500',
  }
});
