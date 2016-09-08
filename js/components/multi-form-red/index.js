
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView} from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class MultiFormRed extends Component {
  constructor(props) {
      super(props);
    }
    popRoute() {
        this.props.popRoute();
    }
      gotoMultiFormGreen(){
        this.props.pushNewRoute('multi-entry-green')
      }
    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.topBar}>
              <View style={styles.topBarTop}>
                  <Text style={styles.projectName}>VITALS 8/20/2016</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>PULSE in beats / minute</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>TEMPERATURE in degrees Celsius</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>RESPIRATION RATE in breaths / minute</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>BLOOD PRESSURE in mm Hg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>WEIGHT in kilograms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                  <Text style={styles.columnViewHeader}>PERCEIVED PAIN, 1 = none, 10 = extreme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.columnViewInput} onPress={this.gotoMultiFormGreen.bind(this)}>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
            </ScrollView>
            <View style={styles.bottomBar}>
              <TouchableOpacity onPress={this.popRoute.bind(this)}>
                <Text style={styles.bottomBarText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.gotoMultiFormGreen.bind(this)}>
                <Text style={styles.bottomBarText}>COMPLETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
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

export default connect(null, bindAction)(MultiFormRed);
