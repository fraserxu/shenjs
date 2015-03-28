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

var tabs = React.createClass({

  statics: {
    title: 'ShenJS',
    description: '2015 JavaScript Conference China'
  },

  getInitialState: function() {
    return {
      selectedTab: 'scheduleTab',
      presses: 0,
    };
  },

  _renderContent: function(pageText: string) {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  },

  render: function() {

    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarItemIOS
          accessibilityLabel="Schedule"
          name="scheduleTab"
          icon={_ix_DEPRECATED('mostRecent')}
          selected={this.state.selectedTab === 'scheduleTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'scheduleTab'
            });
          }}>
          <SchedulePage />
        </TabBarItemIOS>
        <TabBarItemIOS
          name="mapTab"
          icon={_ix_DEPRECATED('favorites')}
          accessibilityLabel="Map"
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
            });
          }}>
          <MapPage />
        </TabBarItemIOS>
        <TabBarItemIOS
          name="aboutTab"
          icon={_ix_DEPRECATED('contacts')}
          accessibilityLabel="About"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'aboutTab'
            });
          }}>
          <AboutPage />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Shen JS',
          component: tabs,
          passProps: {
            onExternalExampleRequested: (example) => {
              this.setState({ openExternalExample: example, });
            },
          }
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor='#008888'
      />
    );
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
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

AppRegistry.registerComponent('shenjs', () => App);
