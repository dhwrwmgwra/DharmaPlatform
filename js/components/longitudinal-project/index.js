
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute } from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView,TextInput} from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

class LongitudinalProject extends Component {
  constructor(props) {
      super(props);
    }
    gotoSingleEntryOptions(){
      this.props.replaceRoute('single-entry');
    }
    replaceRoute(route) {
        this.props.pushNewRoute(route);
    }
    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.topBar}>
              <View style={styles.topBarTop}>
                  <TouchableOpacity onPress={this.popRoute.bind(this)} >
                    <Icon name="md-arrow-round-back" style={styles.backIcon}/>
                  </TouchableOpacity>
                  <Text style={styles.projectName}>PROJECT NAME RECORDS</Text>
              </View>
              <View style={styles.topBarBottom}>
                <View style={styles.leftBottomBar}>
                  <Icon name='md-search' style={styles.searchIcon}/>
                </View>
                <View style={styles.middleBottomBar}>
                  <TextInput value='Search by identifier or scan code' style={styles.searchBoxStyle}/>
                </View>
                <View style={styles.rightBottomBar}>
                  <Icon name='md-qr-scanner' style={styles.qrCodeIcon}/>
                </View>
              </View>
            </View>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.textHeader}>Incomplete Forms</Text>
              <View style={styles.incompleteView}>
                <Text style={styles.date}>8/16/2016</Text>
                <Text style={styles.time}>16:25</Text>
              </View>
              <View style={styles.incompleteView}>
                <Text style={styles.date}>8/16/2016</Text>
                <Text style={styles.time}>16:25</Text>
              </View>
              <View style={styles.incompleteView}>
                <Text style={styles.date}>8/16/2016</Text>
                <Text style={styles.time}>16:25</Text>
              </View>
              <Text style={styles.textHeader}>Completed Forms</Text>
              <View style={styles.completeView}>
                <Text style={styles.date2}>8/16/2016</Text>
                <Text style={styles.time2}>16:25</Text>
              </View>
              <View style={styles.completeView}>
                <Text style={styles.date2}>8/16/2016</Text>
                <Text style={styles.time2}>16:25</Text>
              </View>
              <View style={styles.completeView}>
                <Text style={styles.date2}>8/16/2016</Text>
                <Text style={styles.time2}>16:25</Text>
              </View>
              <View style={styles.completeView}>
                <Text style={styles.date2}>8/16/2016</Text>
                <Text style={styles.time2}>16:25</Text>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.bottomBar} onPress={this.gotoSingleEntryOptions.bind(this)}>
              <View style={styles.plusButtonView}>
                <View style={{width:28,height:28,backgroundColor:'white',borderRadius:30,marginTop:8}}>
                    <Icon name="md-add" style={styles.addIcon}/>
                </View>
              </View>
              <View style={styles.newFormView}>
                <Text style={styles.newFormText}>ENROLL NEW RECORD</Text>
              </View>
            </TouchableOpacity>
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
export default connect(null, bindAction)(LongitudinalProject);
