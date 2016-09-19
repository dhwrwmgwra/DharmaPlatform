
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute, pushNewRoute } from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView} from 'react-native';
import Header from '../header/';
import  Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class ExistingRecordHome extends Component {
  constructor(props) {
      super(props);
    }
    gotoMultiFormRed(){
      this.props.pushNewRoute('multi-entry-red');
    }
    gotoSingleEntry(){
      this.props.pushNewRoute('single-entry')
    }
    replaceRoute(route) {
        this.props.pushNewRoute(route);
    }
    popRoute() {
        console.log("here")
        this.props.popRoute();
    }

    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.topBar}>
              <Header title={"ID 138503912"} backButton={true} onBack={this.popRoute.bind(this)}/>
              <View style={styles.subHeader}>
                <View style={styles.topSubHeader}>
                  <Text style={styles.activityText}>Last Activity:</Text>
                  <Text style={styles.activityText}>8/16/2016</Text>
                </View>
                <View style={styles.bottomSubHeader}>
                  <Text style={styles.subjectName}>Subject Name</Text>
                  <Text style={styles.location}>Location</Text>
                  <Text style={styles.location}>Sex,Age</Text>
                </View>
              </View>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.headerView}>
                <Text style={styles.headerText}>Multi-Entry Forms</Text>
                <TouchableOpacity onPress={this.gotoSingleEntry.bind(this)}>
                  <Text style={styles.moreText}>more...</Text>
                </TouchableOpacity>
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
            <TouchableOpacity style={styles.bottomBar} onPress={this.gotoMultiFormRed.bind(this)}>
              <View style={styles.plusButtonView}>
                <View style={{width:28,height:28,backgroundColor:'white',borderRadius:30,marginTop:8}}>
                    <Icon name="md-add" style={styles.addIcon}/>
                </View>
              </View>
              <View style={styles.newFormView}>
                <Text style={styles.newFormText}>BEGIN NEW ENTRY</Text>
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
export default connect(null, bindAction)(ExistingRecordHome);
