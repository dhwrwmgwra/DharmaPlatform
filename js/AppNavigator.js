
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import { Drawer } from 'native-base';
import { BackAndroid, Platform, StatusBar } from 'react-native';
import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';
import Navigator from 'Navigator';

import Login from './components/login/';
import Home from './components/home/';
import ProjectDetails from './components/project-details/';
import SingleEntry from './components/single-entry';
import MultiEntryGreen from './components/multi-form-green';
import MultiEntryRed from './components/multi-form-red';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sideBar';
import { statusBarColor } from "./themes/base-theme";

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};

export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        var currentState = state;

        if(currentState){
            while (currentState.children){
                currentState = currentState.children[currentState.index]
            }
        }
        return defaultReducer(state, action);
    }
};

const drawerStyle  = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};
var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FadeAndroid;
var CustomFade = Object.assign({}, BaseConfig, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 10,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});
var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 200,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomFade,
  }
});
class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;

        this.props.store.subscribe(() => {
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close();
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home' || routes[routes.length - 1].id == 'login') {
                return false;
            }
            else {
                this.popRoute();
                return true;
            }
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SideBar navigator={this._navigator} />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={this.configureScene}
                    initialRoute={{id: (Platform.OS === "android") ? 'splashscreen' : 'login', statusBarHidden: true}}
                    renderScene={this.renderScene}
                  />
            </Drawer>
        );
    }

    configureScene(route){
      // return CustomSceneConfig;
      switch (route.id) {
          case 'splashscreen':
              return Navigator.SceneConfigs.FloatFromRight;
          case 'login':
              return Navigator.SceneConfigs.FloatFromRight;
          case 'home':
              return Navigator.SceneConfigs.FloatFromRight;
          case 'project-details':
              return Navigator.SceneConfigs.FloatFromRight;
          case 'single-entry':
              return Navigator.SceneConfigs.FloatFromBottom;
          case 'multi-entry-red':
              return Navigator.SceneConfigs.FloatFromBottom;
          case 'multi-entry-green':
              return CustomSceneConfig;
          default :
              return Navigator.SceneConfigs.FloatFromRight;
      }
    }
    renderScene(route, navigator) {
        switch (route.id) {
            case 'splashscreen':
                return <SplashPage navigator={navigator} />;
            case 'login':
                return <Login navigator={navigator} />;
            case 'home':
                return <Home navigator={navigator} />;
            case 'project-details':
                return <ProjectDetails navigator={navigator} />;
            case 'single-entry':
                return <SingleEntry navigator={navigator} />;
            case 'multi-entry-red':
                return <MultiEntryRed navigator={navigator} />;
            case 'multi-entry-green':
                return <MultiEntryGreen navigator={navigator} />;
            default :
                return <Login navigator={navigator}  />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
