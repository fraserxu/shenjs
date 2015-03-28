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
      <View><Text>About ShenJS</Text></View>
    );
  }
});

module.exports = AboutPage;
