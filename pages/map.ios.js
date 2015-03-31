'use strict';

var React = require('react-native');
var {
  StyleSheet,
  MapView,
  Text,
  View,
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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
        />
        <View style={styles.location}>
          <Text>地址：深圳市东滨路与临海路交汇处前海深港现代服务业合作区内</Text>
          <Text>电话：(0755)32988888</Text>
          <Text>网址：http://qh.vanke.com</Text>
        </View>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  map: {
    height: 400
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  location: {
    flex: 1,
    padding: 10
  }
});

module.exports = MapPage;
