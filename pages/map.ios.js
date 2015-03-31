'use strict';

var React = require('react-native');
var {
  StyleSheet,
  MapView,
  Text,
  View,
  ScrollView
} = React;

var MapPage = React.createClass({

  getInitialState() {
    return {
      mapRegion:  {
        latitude: 22.54358752526538,
        longitude: 114.1251824513425,
        latitudeDelta: 0.095,
        longitudeDelta: 0.2156
      }
    };
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
        />
        <View style={styles.location}>
          <Text>电话：(0755)32988888</Text>
          <Text>网址：http://qh.vanke.com</Text>
          <Text>地址：深圳市东滨路与临海路交汇处前海深港现代服务业合作区内</Text>
        </View>
      </ScrollView>
    );
  },

});

var styles = StyleSheet.create({
  map: {
    height: 300
  },
  container: {
    flex: 1
  },
  location: {
    flex: 1,
    padding: 10
  }
});

module.exports = MapPage;
