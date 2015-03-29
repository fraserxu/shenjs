'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} = React;

var AboutPage = React.createClass({
  statics: {
    title: 'About',
    description: 'About'
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image}
            source={{uri: 'http://fraserxu.u.qiniudn.com/20142014-06-22-026.jpg?imageView/2/h/757'}} />
        <View style={styles.textBox}>
          <Text style={styles.description}>
            JSConf China is a two day conference focused on JavaScript and Node.js technologies. This developer driven event brings together notable figures from both the Chinese and international JavaScript communities to share their knowledge and passion for JavaScript. After Shanghai, Beijing and Hangzhou, JSConf China is going to Shenzhen from July 11-12 in 2015.
          </Text>
          <Text style={styles.description}>
            深JS——2015 JS中国开发者大会是一场专注于JavaScript和Node.js技术，为期两天的国际性技术大会。届时，大会会邀请国内外的优秀讲师为大家分享在JavaScript和Node.js技术方面的经验。继上海，北京和杭州之后，JS中国开发者大会将于2015年7月11－12日在深圳召开。
          </Text>
        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  description: {
    fontSize: 14,
    lineHeight: 16,
    padding: 5
  },
  image: {
    width: 400,
    height: 300
  },
  textBox: {
    padding: 10
  }
});

module.exports = AboutPage;
