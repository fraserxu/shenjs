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
        <Text>深JS——2015 JS中国开发者大会是一场专注于JavaScript和Node.js技术，为期两天的国际性技术大会。届时，大会会邀请国内外的优秀讲师为大家分享在JavaScript和Node.js技术方面的经验。继上海，北京和杭州之后，JS中国开发者大会将于2015年7月11－12日在深圳召开。</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 10
  }
});

module.exports = AboutPage;
