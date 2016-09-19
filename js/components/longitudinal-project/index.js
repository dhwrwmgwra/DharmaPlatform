
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView,TextInput} from 'react-native';
import {MKButton, MKTextField} from 'react-native-material-kit';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../header/';
import styles from './styles';

class LongitudinalProject extends Component {
  constructor(props) {
      super(props);
    }
    gotoSingleEntryOptions(){
      this.props.replaceRoute('single-entry');
    }
    gotoNewEnrollmentForm(){
      this.props.pushNewRoute('new-enrollment-form');
    }
    gotoExistingRecordHome(){
      this.props.pushNewRoute('existing-record-home');
    }
    gotoCamera(){
      this.props.pushNewRoute('camera');
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
              <Header backButton={true} onBack={this.popRoute.bind(this)} title={"PROJECT NAME RECORDS"} style={styles.headerColor} />
              <View style={styles.topBarBottom}>
                <View style={styles.leftBottomBar}>
                  <Icon name='search' style={styles.searchIcon}/>
                </View>
                <View style={styles.middleBottomBar}>
                  <MKTextField placeholder='Search by identifier or scan code'
                        tintColor={'transparent'}
                         style={styles.searchText}
                         textInputStyle={styles.searchTextInput}
                         onChangeText={()=>{}} />
                </View>
                <TouchableOpacity style={styles.rightBottomBar} onPress={this.gotoCamera.bind(this)}>
                  <Icon name='photo-camera' style={styles.qrCodeIcon}/>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.scrollViewWrapper}>
                <TouchableOpacity style={styles.longitudinalProjectView} onPress={this.gotoExistingRecordHome.bind(this)}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.longitudinalProjectView}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.longitudinalProjectView}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.longitudinalProjectView}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.longitudinalProjectView}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.longitudinalProjectView}>
                  <View style={styles.topLongitudinalProjectView}>
                    <Text style={styles.activityText}>Last Activity:</Text>
                    <Text style={styles.activityText}>8/16/2016</Text>
                  </View>
                  <View style={styles.bottomLongitudinalProjectView}>
                    <Text style={styles.projectId}>138503912</Text>
                    <Text style={styles.identifier}>Identifier 1, Identifier 2</Text>
                    <View style={styles.projectCPR}>
                      <View style={styles.projectC}>
                        <View style={[styles.pills,{backgroundColor:'springgreen'}]}></View>
                        <Text style={styles.pillsText}>293 Complete</Text>
                      </View>
                      <View style={styles.projectR}>
                        <View style={[styles.pills,{backgroundColor:'#fe4d4d'}]}></View>
                        <Text style={styles.pillsText}>399 Remaining</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divider}></View>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.bottomBar} onPress={this.gotoNewEnrollmentForm.bind(this)}>
              <View style={styles.plusButtonView}>
                <View style={{width:28,height:28,backgroundColor:'white',borderRadius:30,marginTop:8}}>
                    <Icon name="add" style={styles.addIcon}/>
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
