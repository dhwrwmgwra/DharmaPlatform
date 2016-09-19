
'use strict';

import {StyleSheet,Platform,Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');
import palette from '../palette';
module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'rgba(52,52,52,1)',
  },
  topBar:{
    backgroundColor:'#872175',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position:'absolute',
    top:0,
    left: 0,
    right: 0,
  },
  topBarBottom:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    // justifyContent:'space-between',
    paddingTop:15,
    paddingBottom:15,
    // padding:10,
    shadowOpacity: 0.123,
    shadowRadius: 30,
    shadowOffset: {
       height: 1,
       width: 0
     },
    elevation:2,
  },
  leftBottomBar:{
    flex:1,
    marginLeft:10,
    marginTop:5,
    margin:2,
  },
  rightBottomBar:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginRight:10,
    marginTop:5,
    margin:2,
  },
  middleBottomBar:{
    flex:8,
    marginTop:0,
    margin:2,
  },
  searchIcon:{
    color:palette.DharmaLight600,
    fontSize:30,
  },
  searchText:{
    padding:5,
  },
  searchTextInput:{
    height:30,
    color:palette.DharmaLight700,
    fontSize:16,
    fontFamily:'proximanova-regular',
    fontWeight:'400',
    padding:10,
  },
  qrCodeIcon:{
    color:palette.DharmaLight800,
    fontSize:30,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  scrollView:{
    marginTop:125,
    backgroundColor:'rgba(255,255,255,0.9)',
    marginBottom:50,
    padding:10,
  },
  scrollViewWrapper:{
    padding:10,
    backgroundColor:'#fff',
  },
  longitudinalProjectView:{
    flexDirection:'column',
  },
  topLongitudinalProjectView:{
    alignSelf:'flex-end',
    flexDirection:'row',
  },
  activityText:{
    fontSize:11,
    fontFamily:'proximanova-regular',
    fontStyle:'italic',
    color:'rgba(0,0,0,0.567)',
    paddingLeft:2,
  },
  bottomLongitudinalProjectView:{
  },
  projectId:{
    fontFamily:'proximanova-semibold',
    fontSize:16,
    color:'rgba(0,0,0,0.8)',
  },
  identifier:{
    fontFamily:'proximanova-regular',
    fontSize:14,
    color:'rgba(0,0,0,0.7)',
    marginTop:2,
  },
  projectCPR:{
    flexDirection:'row',
    marginLeft:0,
    marginTop:0,
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
  pillsText:{
    fontSize:11,
    color:'rgba(0,0,0,0.666)',
    marginLeft:4,
    fontFamily:'proximanova-regular',
  },
  divider:{
    borderWidth:0.5,
    borderColor:palette.DharmaLight800,
    marginTop:5,
    marginBottom:5,
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
    // marginLeft:5,
    // paddingBottom:25,
  },
  newFormView:{
    flex:3,
  },
  newFormText:{
    color:'white',
    fontFamily:'proximanova-regular',
    fontSize:18,
  },
  pills:{
    width:5,
    height:5,
    borderRadius:5,
    marginTop:(Platform.OS === 'android')?6:3,
  }
});
