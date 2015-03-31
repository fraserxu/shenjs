'use strict';

var React = require('react-native');
var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  ScrollView,
  View,
} = React;

var schedulePage = React.createClass({
  statics: {
    title: 'Schedule',
    description: 'Schedule'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(SCHEDULES[0]),
      selectedDay: 0
    };
  },

  setDay: function(day) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(SCHEDULES[day]),
      selectedDay: day
    });
  },

  render: function() {
    var tab1Style = {
      color: this.state.selectedDay === 0 ? '#5399fc' : null
    };
    var tab2Style = {
      color: this.state.selectedDay === 1 ? '#5399fc' : null
    };
    return (
      <View style={styles.listContainer}>
        <View style={styles.tabContainer}>
          <TouchableHighlight onPress={this.setDay.bind(this, 0)}>
            <View style={[styles.tab, styles.tab1]}>
              <Text style={[styles.tabItem, tab1Style]}>Day 1 test</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.setDay.bind(this, 1)}>
            <View style={styles.tab}>
              <Text style={[styles.tabItem, tab2Style]}>Day 2</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.separator} />
        <ListView
          style={styles.content}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var schedule = SCHEDULES[this.state.selectedDay];
    return (
      <View>
        <View style={styles.row}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText} >
              {schedule[rowID].time + '  '}
              <Text style={styles.timeRange} >
                {schedule[rowID].range}
              </Text>
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {schedule[rowID].title}
            </Text>
            <Text style={styles.description} numberOfLines={1}>
              {schedule[rowID].speaker}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
});

var SCHEDULES = [
  [
    {"time": "11:00", "range": "AM", "speaker":"James Holiday","title":"Browserify Author"},
    {"time": "12:00", "range": "AM", "speaker":"Zhao Cheng","title":"Atom Developer"},
    {"time": "1:00", "range": "PM", "speaker":"Yu Bo","title":"Seajs Author"},
    {"time": "2:00", "range": "PM", "speaker":"Sofish","title":"Typo.css Author"},
    {"time": "3:00", "range": "PM", "speaker":"Luying Li","title":"Twitter Software Developer"},
    {"time": "4:00", "range": "PM", "speaker":"Mikael Karon","title":"EF Learning Lab Architect"},
    {"time": "5:00", "range": "PM", "speaker":"Garry Yao","title":"EF Learning Tech Lead"},
    {"time": "6:00", "range": "PM", "speaker":"Berg","title":"Baidu Architect"},
    {"time": "7:00", "range": "PM", "speaker":"Qing Yan","title":"Angularjs.cn Founder"},
    {"time": "8:00", "range": "PM", "speaker":"Caesar Chi","title":"Hiiir Developer"}
  ],
  [
    {"time": "12:00", "range": "AM", "speaker":"Zhao Cheng","title":"Atom Developer"},
    {"time": "1:00", "range": "PM", "speaker":"Yu Bo","title":"Seajs Author"},
    {"time": "2:00", "range": "PM", "speaker":"Sofish","title":"Typo.css Author"},
    {"time": "3:00", "range": "PM", "speaker":"Luying Li","title":"Twitter Software Developer"},
    {"time": "4:00", "range": "PM", "speaker":"Mikael Karon","title":"EF Learning Lab Architect"},
    {"time": "5:00", "range": "PM", "speaker":"Garry Yao","title":"EF Learning Tech Lead"},
    {"time": "6:00", "range": "PM", "speaker":"Berg","title":"Baidu Architect"},
    {"time": "7:00", "range": "PM", "speaker":"Qing Yan","title":"Angularjs.cn Founder"},
    {"time": "8:00", "range": "PM", "speaker":"Caesar Chi","title":"Hiiir Developer"}
  ]
];

var styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 65,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab1: {
    borderRightWidth: 1,
    borderColor: '#CCCCCC'
  },
  tabItem: {
    fontSize: 12,
    fontWeight: '300'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  timeContainer: {
    justifyContent: 'center',
    width: 75,
    height: 50
  },
  timeText: {
    fontSize: 12,
    fontWeight: '300'
  },
  timeRange: {
    fontSize: 8,
    fontWeight: '300'
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  content: {
    marginBottom: 50
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '300',
    marginTop: 15,
    marginBottom: 2,
  },
  description: {
    color: '#999999',
    fontSize: 12,
  }
});

module.exports = schedulePage;
