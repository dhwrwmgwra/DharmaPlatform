
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import {pushNewRoute, replaceRoute} from '../../actions/route';
import { StyleSheet ,Image, View, Text, TextInput, TouchableOpacity,TouchableHighlight, ScrollView,ListView} from 'react-native';
import styles from './styles';

class Home extends Component {
  constructor(props) {
      super(props);
    }
    gotoLongitudinalProject(){
      console.log("Going to longitudinal");
      this.props.pushNewRoute('longitudinal-project','');
    }
    gotoTimeSeriesProject(){
      this.props.pushNewRoute('time-series-project');
    }
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
              <View style={styles.topBar}>
                <View style={styles.topBarTop}>
                  <Image source={require('../../../images/dharma-logo.png')} style={styles.topBarImageStyle}></Image>
                  <View style={styles.projectNUsernameView}>
                    <Text style={styles.projectName}>My Projects</Text>
                    <Text style={styles.username}>Username</Text>
                  </View>
                </View>
                <View style={styles.topBarBottom}>
                  <TouchableOpacity onPress={() => this.replaceRoute('login')}>
                     <Text style={styles.logout}>Switch user</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={styles.scrollView}>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoTimeSeriesProject.bind(this)} >
                    <Text style={styles.projectTitle}>Time Series Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoLongitudinalProject.bind(this)}>
                    <Text style={styles.projectTitle}>Logitudinal Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoTimeSeriesProject.bind(this)}>
                    <Text style={styles.projectTitle}>Time Series Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoTimeSeriesProject.bind(this)}>
                    <Text style={styles.projectTitle}>Longitudinal Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoTimeSeriesProject.bind(this)}>
                    <Text style={styles.projectTitle}>Time Series Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectCards} onPress={this.gotoTimeSeriesProject.bind(this)}>
                    <Text style={styles.projectTitle}>Longitudinal Project Name</Text>
                    <Text style={styles.projectLocation}>Location,Administrator</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectP}>
                        <View style={[styles.pills,{backgroundColor:'yellow'}]}></View>
                        <Text style={styles.pillsText}>6 In Progress</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
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
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Home);
