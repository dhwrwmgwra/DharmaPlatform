//
// Page header component.
//

import React from 'react';
import {Text, View , TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function Header(props) {
  if(!props.backButton){
    return (
      /* jshint ignore:start */
      <View style={[styles.toolbar, props.style]}>
        <View style={styles.toolbarTitle}>
          <Text style={styles.toolbarTitleText}>{props.title}</Text>
        </View>
      </View>
      /* jshint ignore:end */
      );
  }
  return (
    /* jshint ignore:start */
    <View style={[styles.toolbar, props.style]}>
      <TouchableOpacity style={styles.toolbarButton} onPress={props.onBack}>
        <MaterialIcon name="arrow-back" style={styles.backIcon}/>
      </TouchableOpacity>
      <View style={styles.toolbarTitle}>
        <Text style={styles.toolbarTitleText}>{props.title}</Text>
      </View>
      <View style={styles.toolbarButton}>
        <Text style={styles.blockDetails}>{props.stateText}</Text>
      </View>
    </View>
    /* jshint ignore:end */
    );
}

module.exports = Header;
