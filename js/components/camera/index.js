
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView,TextInput, Platform } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-universal';
import Camera from 'react-native-camera';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class CaptureScreen extends Component {
  constructor(props) {
    super(props);
  }

  barcodeReceived(e) {
      console.log(e);
      this.props.popRoute();
  }

  render() {
    let scanArea = null
    if (Platform.OS === 'ios') {
      scanArea = (
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      )
      return (
        <Camera
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={styles.camera}>
          {scanArea}
        </Camera>
      );
    }

    return (
      <BarcodeScanner
        onBarCodeRead={this.barcodeReceived.bind(this)}
        style={styles.camera}>
        {scanArea}
      </BarcodeScanner>
    );
  }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute:()=>dispatch(popRoute())
    }
}
export default connect(null, bindAction)(CaptureScreen);
