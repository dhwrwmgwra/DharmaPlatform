
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView, TextInput} from 'react-native';
import { Container, Content, Icon , InputGroup,Input} from 'native-base';
import styles from './styles';

class MultiFormGreen extends Component {
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
                <View>
                  <Text style={styles.columnViewHeader}>PULSE in beats / minute</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <View>
                  <Text style={styles.columnViewHeader}>TEMPERATURE in degrees Celsius</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <View>
                  <Text style={styles.columnViewHeader}>RESPIRATION RATE in breaths / minute</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <View>
                  <Text style={styles.columnViewHeader}>BLOOD PRESSURE in mm Hg</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <View>
                  <Text style={styles.columnViewHeader}>WEIGHT in kilograms</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.columnView}>
                <View>
                  <Text style={styles.columnViewHeader}>PERCEIVED PAIN, 1 = none, 10 = extreme</Text>
                </View>
                <View style={styles.columnViewInput}>
                  <TextInput style={styles.columnViewTextInput} />
                </View>
              </View>
            </ScrollView>
            <View style={styles.bottomBar}>
              <TouchableOpacity>
                <Text style={styles.bottomBarText}>SUBMIT</Text>
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

export default connect(null, bindAction)(MultiFormGreen);
