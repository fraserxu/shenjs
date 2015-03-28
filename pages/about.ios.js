'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var AboutPage = React.createClass({
  statics: {
    title: 'About',
    description: 'About'
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>About ShenJS</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
  }
});

module.exports = AboutPage;
