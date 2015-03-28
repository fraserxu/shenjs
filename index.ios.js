/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

var TabBarItemIOS = TabBarIOS.Item;
var SchedulePage = require('./pages/schedule.ios');
var AboutPage = require('./pages/about.ios');
var MapPage = require('./pages/map.ios');

var shenjs = React.createClass({

  statics: {
    title: 'ShenJS',
    description: '2015 JavaScript Conference China'
  },

  getInitialState: function() {
    return {
      selectedTab: 'scheduleTab'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarItemIOS
          accessibilityLabel="Schedule"
          title="Schedule"
          name="scheduleTab"
          icon={{}}
          selected={this.state.selectedTab === 'scheduleTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'scheduleTab'
            });
          }}>
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Schedule',
              component: SchedulePage,
            }}
          />
        </TabBarItemIOS>
        <TabBarItemIOS
          name="mapTab"
          icon={{}}
          accessibilityLabel="Map"
          title="Map"
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
            });
          }}>
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Map',
              component: MapPage,
            }}
          />
        </TabBarItemIOS>
        <TabBarItemIOS
          name="aboutTab"
          icon={{}}
          accessibilityLabel="About"
          selected={this.state.selectedTab === 'aboutTab'}
          title="About"
          onPress={() => {
            this.setState({
              selectedTab: 'aboutTab'
            });
          }}>
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'About',
              component: AboutPage,
            }}
          />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

// This is needed because the actual image may not exist as a file and
// is used by the native code to load a system image.
// TODO(nicklockwood): How can this fit our require system?
function _ix_DEPRECATED(imageUri) {
  return {
    uri: imageUri,
    isStatic: true,
  };
}

AppRegistry.registerComponent('shenjs', () => shenjs);
