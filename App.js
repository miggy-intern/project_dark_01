import React from 'react';
import { View, Text, Button, Modal, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './Styles/Styles';
import { defaultTime, blindValues, levels } from './Const/Constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.normalText}>Project 3: Pop Up </Text>
        <Button title="Show Blinds Structure" onPress={() => { this.setState({ show: true }) }} />

        <Modal
          transparent={true}
          visible={this.state.show}
          animationType="fade"
          animationInTiming={900}>

          <View style={Styles.modalView}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
              <View>
                <View style={Styles.closeContainer}>

                  <TouchableOpacity onPress={() => { this.setState({ show: false }) }}>
                    <View style={Styles.closeButton}>
                      <Text style={Styles.closeButtonText}>X</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <Text style={Styles.blindsHeader}>Blinds Structure</Text>
              </View>
              <View style={Styles.blackPadding}>
                <View style={[Styles.row, Styles.headerRow]}>

                  <View style={[Styles.column, Styles.headerColumn]}>
                    <Text style={[Styles.columnHeader, Styles.LevelAlign]}>Level</Text>
                  </View>

                  <View style={[Styles.column, Styles.headerColumn]}>
                    <Text style={[Styles.columnHeader, Styles.TimeAlign]}>Time</Text>
                  </View>

                  <View style={[Styles.column, Styles.headerColumn]}>
                    <Text style={[Styles.columnHeader, Styles.BlindAlign]}>Blinds</Text>
                  </View>
                </View>

                {levels.map((level, index) => (
                  <View key={index} style={[Styles.row, index % 2 === 0 ? Styles.rowEven : Styles.rowOdd]}>

                    <View style={[Styles.column, Styles.dataColumn]}>
                      <Text style={Styles.LevelAlign}>{`${level}`}</Text>
                    </View>

                    <View style={[Styles.column, Styles.dataColumn]}>
                      <Text style={Styles.TimeAlign}>{`${(level - 1) * parseInt(defaultTime, 10)}:00`}</Text>
                    </View>

                    <View style={[Styles.column, Styles.dataColumn]}>
                      <Text style={Styles.BlindAlign} numberOfLines={1}>{blindValues[index]}</Text>
                    </View>

                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

export default App;
