'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View,
  LayoutAnimation,
  // StatusBarIOS
} = React;

var Schedule = React.createClass({

  render: function() {

    // <Navigator
    //   renderScene={this.renderScene}
    //   initialRoute={ScheduleRouters[0]}
    //   initialRouteStack={ScheduleRouters}
    //   navigationBar={<View><Text>ssss</Text></View>}
    //   configureScene={route => {
    //     return route.sceneConfig || Navigator.SceneConfigs.FloatFromRight;
    //   }}
    //   onWillFocus={route => {
    //     if (route.onWillFocus) { route.onWillFocus(); }
    //   }}
    //   onDidFocus={route => {
    //     if (route.onDidFocus) { route.onDidFocus(); }
    //   }}
    // />

    // StatusBarIOS.setStyle(2, false);
    // StatusBarIOS.setHidden(true, 1);

    return (
      <View style={{}}>
        <Text>Hello Schedule</Text>
      </View>
    );

  }

});

module.exports = Schedule;
