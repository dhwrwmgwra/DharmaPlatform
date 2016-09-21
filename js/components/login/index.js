
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image ,View,TextInput,Text, TouchableOpacity} from 'react-native';
import {Container, Content } from 'native-base'
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false,
            username:'User name',
            password:'Password',
            passwordMode:false
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
                <View style={styles.innerContainer}>
                  <View style={styles.imageView}>
                    <Image source={require('../../../images/dharma-logo.png')} style={styles.topBarImageStyle}></Image>
                  </View>
                  <View style={styles.inputView}>
                    <TextInput value={this.state.username} onFocus={()=>this.setState({username:''})} onChangeText={(text) => this.setState({username:text})} style={styles.textInputStyle}/>
                    <TextInput value={this.state.password} onFocus={()=>this.setState({password:'',passwordMode:true})} secureTextEntry={this.state.passwordMode} onChangeText={(text) => this.setState({password:text})} style={styles.textInputStyle}/>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => this.replaceRoute('home')}>
                      <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                  </View>
                </View>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindActions)(Login);
