
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView} from 'react-native';
import Header from '../header/';
import  Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

class SingleEntry extends Component {
  constructor(props) {
      super(props);
    }
    popRoute() {
        console.log("here")
        this.props.popRoute();
    }
    gotoMultiFormGreen(){
      this.props.pushNewRoute('multi-entry-green')
    }
    gotoMultiFormRed(){
      this.props.pushNewRoute('multi-entry-red')
    }

    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.topBar}>
              <Header backButton={true} onBack={this.popRoute.bind(this)} title={"ID 138503913"} style={styles.headerColor} />
            </View>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.entryPointHeader}>Single Entry Forms</Text>
              <TouchableOpacity style={styles.greenView} onPress={this.gotoMultiFormRed.bind(this)}>
                <Text style={styles.header}>Intake</Text>
                <Text style={styles.footer}>1 Complete/ 0 Remaining</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView} onPress={this.gotoMultiFormRed.bind(this)}>
                <Text style={styles.header}>Triage</Text>
                <Text style={styles.footer}>1 Complete/ 0 Remaining</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.redView} onPress={this.gotoMultiFormRed.bind(this)}>
                <Text style={styles.header}>Discharge</Text>
                <Text style={styles.footer}>0 Complete/ 1 Remaining</Text>
              </TouchableOpacity>
            </ScrollView>
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

export default connect(null, bindAction)(SingleEntry);
