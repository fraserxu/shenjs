'use strict';

var React = require('react-native');
var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

var SpeakerPage = React.createClass({
  statics: {
    title: 'Speakers',
    description: 'Speakers'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(SPEAKERS),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var imgSource = {
      uri: SPEAKERS[rowID].avatar,
    };
    return (
      <View>
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource} />
          <View style={styles.textContainer}>
            <Text style={styles.speakerName} numberOfLines={1}>
              {SPEAKERS[rowID].name}
            </Text>
            <Text style={styles.speakerIntro} numberOfLines={2}>
              {SPEAKERS[rowID].intro}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
});

var SPEAKERS = [
    {"name":"James Holiday","intro":"browserify author. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-jameshalliday.jpeg"},
    {"name":"Zhao Cheng","intro":"atom developer. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-zhaocheng.png"},
    {"name":"Yu Bo","intro":"seajs author. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-yubo-updated.png"},
    {"name":"Sofish","intro":"typo.css author. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-sofish.png"},
    {"name":"Luying Li","intro":"twitter software developer. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-luying.png"},
    {"name":"Mikael Karon","intro":"EF Learning Lab Architect. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-mikaelkaron.jpg"},
    {"name":"Garry Yao","intro":"EF Learning Tech Lead. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-garryyao.jpg"},
    {"name":"Berg","intro":"Baidu Architect. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-berg.png"},
    {"name":"Qing Yan","intro":"Angularjs.cn Founder. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-yanqing.png"},
    {"name":"Caesar Chi","intro":"Hiiir Developer. unix philosopher. beep boop.", "avatar": "http://jsconfcn.qiniudn.com/img/speaker-caesarchi.png"}
];

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start'
  },
  speakerName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 2,
  },
  speakerIntro: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 55,
    height: 55,
  },
  text: {
    flex: 1,
  },
});

module.exports = SpeakerPage;
