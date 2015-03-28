
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
  }
});

module.exports = MapPage;
