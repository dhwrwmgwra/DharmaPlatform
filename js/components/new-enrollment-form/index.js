
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute , pushNewRoute} from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView,TextInput} from 'react-native';
import {MKButton, MKTextField} from 'react-native-material-kit';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../header/';
import styles from './styles';

class LongitudinalProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
          fullName:'Given name',
          familyName:'Family name',
          currentAddress:'Current Address',
          country:'Country of origin',
          age:'Age',
          sex:'Sex',
          conditions:'Pre-existing conditions',
          notes:'Additional notes',
      };
    }
    gotoSingleEntryOptions(){
      this.props.replaceRoute('single-entry');
    }
    gotoExistingRecordHome(){
      this.props.pushNewRoute('existing-record-home');
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
              <Header backButton={false} title={"PROJECT NAME RECORDS"} style={styles.headerColor} />
              <View style={styles.subHeader}>
                <View style={styles.subHeaderLeft}>
                  <Text style={styles.subHeaderText}>Scan new barcode</Text>
                </View>
                <TouchableOpacity style={styles.subHeaderRight}>
                  <FontAwesome name='barcode' style={styles.qrCodeIcon}/>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.internalScrollview}>
                <View style={styles.aLilPadding}>
                  <Text style={styles.formHeader}>Enter identifying information:</Text>
                  <View style={styles.formBody}>
                    <TextInput value={this.state.fullName}
                      onFocus={()=>this.setState({fullName:''})}
                      onChangeText={(text) => this.setState({fullName:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.familyName}
                      onFocus={()=>this.setState({familyName:''})}
                      onChangeText={(text) => this.setState({familyName:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.currentAddress}
                      onFocus={()=>this.setState({currentAddress:''})}
                      onChangeText={(text) => this.setState({currentAddress:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.country}
                      onFocus={()=>this.setState({country:''})}
                      onChangeText={(text) => this.setState({country:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.age}
                      onFocus={()=>this.setState({age:''})}
                      onChangeText={(text) => this.setState({age:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.sex}
                      onFocus={()=>this.setState({sex:''})}
                      onChangeText={(text) => this.setState({sex:text})}
                      style={styles.textInputStyle}/>
                    <TextInput value={this.state.conditions}
                      multiline={true}
                      numberOfLines = {4}
                      onFocus={()=>this.setState({conditions:''})}
                      onChangeText={(text) => this.setState({conditions:text})}
                      style={styles.textInputStyle2}/>
                    <TextInput value={this.state.notes}
                      multiline={true}
                      numberOfLines = {4}
                      onFocus={()=>this.setState({notes:''})}
                      onChangeText={(text) => this.setState({notes:text})}
                      style={styles.textInputStyle2}/>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.bottomBar}>
              <TouchableOpacity style={styles.cancelBtn} onPress={this.popRoute.bind(this)}>
                <Text style={styles.cancelBtnText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.enrollBtn} onPress={this.gotoExistingRecordHome.bind(this)} >
                <Text style={styles.cancelBtnText}>ENROLL</Text>
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
export default connect(null, bindAction)(LongitudinalProject);
