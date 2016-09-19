
'use strict';

import {StyleSheet,Platform,Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');
import palette from '../palette';
module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
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
  subHeader:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:15,
    shadowOpacity: 0.123,
    shadowRadius: 30,
    shadowOffset: {
       height: 1,
       width: 0
     },
    elevation:2,
  },
  subHeaderLeft:{
    alignSelf:'center',
  },
  subHeaderText:{
    fontFamily:'proximanova-regular',
    fontSize:16,
  },
  qrCodeIcon:{
    color:palette.DharmaLight800,
    fontSize:30,
    alignSelf:'center',
  },
  scrollView:{
    marginTop:115,
    backgroundColor:palette.DharmaLight400,
    marginBottom:50,
    padding:10,
  },
  internalScrollview:{
    padding:10,
    backgroundColor:palette.DharmaLight50,
  },
  aLilPadding:{
    padding:10,
  },
  formHeader:{
    fontFamily:'proximanova-regular',
    fontSize:16,
  },
  formBody:{
    paddingTop:20,
  },
  textInputStyle:{
    height:30,
    backgroundColor:palette.DharmaLight400,
    marginBottom:8,
    padding:5,
    paddingLeft:10,
    color:palette.DharmaLight800,
    fontSize:14,
    fontFamily:'proximanova-regular',
  },
  textInputStyle2:{
    height:100,
    backgroundColor:palette.DharmaLight400,
    marginBottom:8,
    paddingLeft:10,
    color:palette.DharmaLight800,
    fontSize:14,
    fontFamily:'proximanova-regular',
  },
  bottomBar:{
    backgroundColor:palette.DharmaLight50,
    justifyContent: 'space-between',
    position:'absolute',
    bottom:0,
    left: 0,
    right: 0,
    height:50,
    flexDirection:'row',
    alignItems: 'center',
  },
  cancelBtnText:{
    padding:10,
    fontFamily:'proximanova-light',
    fontSize:16,
    color:palette.DharmaLight800,
  }
});
