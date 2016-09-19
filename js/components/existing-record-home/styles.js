
'use strict';

import {Dimensions, StyleSheet, Platform} from 'react-native';
var {width, height} = Dimensions.get('window');
import palette from '../palette';
module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  topBar:{
    backgroundColor:'#872175', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    paddingTop:0,
    left: 0,
    right: 0,
  },
  subHeader:{
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:12,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
    zIndex:1,
  },
  topSubHeader:{
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingRight:15,
  },
  activityText:{
    fontSize:11,
    fontFamily:'proximanova-regular',
    fontStyle:'italic',
    color:'rgba(0,0,0,0.567)',
    paddingLeft:2,
  },
  bottomSubHeader:{
    flexDirection:'column',
    paddingLeft:10,
  },
  subjectName:{
    fontFamily:'proximanova-semibold',
    fontSize:16,
    color:'#000',
  },
  location:{
    fontFamily:'proximanova-regular',
    fontSize:13,
  },
  scrollView:{
    left:0,
    marginTop:155,
    backgroundColor:palette.DharmaLight400,
    marginBottom:50,
    padding:10,
  },
  headerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
  },
  headerText:{
    fontFamily:'proximanova-semibold',
    fontSize:18,
    color:'#000',
  },
  moreText:{
    fontFamily:'proximanova-semibold',
    fontSize:16,
    color:'#872175',
  },
  completeView:{
    backgroundColor:'white',
    padding:10,
    marginBottom:15,
    shadowOpacity: 0.238,
    shadowRadius: 1,
    shadowOffset: {
         height: 1,
         width: 0
       },
  },
  date2:{
    color:'rgba(0,0,0,0.87)',
    fontFamily:'proximanova-semibold',
    fontSize:16,
  },
  time2:{
    color:'rgba(0,0,0,0.7)',
    fontFamily:'proximanova-regular',
    fontSize:13
  },
  bottomBar:{
    backgroundColor:palette.DharmaGreen400,
    justifyContent: 'space-between',
    position:'absolute',
    bottom:0,
    left: 0,
    right: 0,
    height:50,
    flexDirection:'row',
    alignItems: 'center',
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
