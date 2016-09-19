//
// Stylesheet for Dharma Mobile.
//

// jshint esversion: 6

import {StyleSheet, Platform} from 'react-native';

// var extraTopMargin = Platform.OS === 'ios' ? 20 : 0;

module.exports = StyleSheet.create({
  // Toolbar.
  toolbar: {
    backgroundColor: '#872175',
    flexDirection: 'row',
    paddingTop:15,
    paddingBottom:15,
  },
  toolbarTitle: {
    flex: 1,
    // padding: 7,
  },
  toolbarTitleText: {
    textAlign: 'center',
    color:'rgba(255,255,255,1)',
    fontSize:18,
    fontFamily:'proximanova-regular',
  },
  toolbarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: 50,
  },
  toolbarButtonText: {
    // color: palette.DharmaLight50,
    fontSize: 18,
    textAlign: 'center',
  },
  backIcon:{
    color:'white',
    fontSize:22,
    fontWeight:'100'
  },
  blockDetails: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
