
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute , replaceRoute } from '../../actions/route';
import { View , Text, TouchableOpacity , ScrollView} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import styles from './styles';

class ProjectDetails extends Component {
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
        console.log("here")
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
                  <Text style={styles.projectName}>PROJECT NAME</Text>
              </View>
              <View style={styles.topBarBottom}>
                <View style={styles.leftBottomBar}>
                  <Text style={{fontSize:15,fontWeight:'600',color:'rgba(0,0,0,0.799)',padding:2}}>Project Name</Text>
                  <Text style={{fontSize:10,fontWeight:'600',color:'rgba(0,0,0,0.567)',padding:2}}>Location</Text>
                  <Text style={{fontSize:10,fontWeight:'600',color:'rgba(0,0,0,0.567)',padding:2}}>Progress Level</Text>
                </View>
                <View style={styles.rightBottomBar}>
                  <Text style={{fontSize:9,fontWeight:'400',fontStyle:'italic',color:'rgba(0,0,0,0.567)',padding:2}}>Last Activity:</Text>
                  <Text style={{fontSize:9,fontWeight:'400',fontStyle:'italic',color:'rgba(0,0,0,0.567)',padding:2}}>8/16/2016</Text>
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
                <Text style={styles.newFormText}>BEGIN NEW FORM</Text>
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
export default connect(null, bindAction)(ProjectDetails);
