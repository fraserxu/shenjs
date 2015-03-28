
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
      <View>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
        />
      </View>
    );
  },

});

var styles = StyleSheet.create({
  map: {
    height: 400,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

module.exports = MapPage;
