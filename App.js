import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const NumberPad = () => {
  let rows = [];
  let nums = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ['+/-', 0, '='],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} key={i * 3 + j}>
            {nums[i][j]}
          </Text>
        </TouchableOpacity>,
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }
  return rows;
};

const OperationPad = () => {
  let operations = ['÷', '×', '－', '＋'];
  let rows = [];
  for (let i = 0; i < 4; i++) {
    rows.push(
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }
  return rows;
};
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.textCalculation}>11x11</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.textResult}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <NumberPad />
          </View>
          <View style={styles.operations}>
            <OperationPad />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  result: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  textCalculation: {
    fontSize: 50,
    color: 'white',
  },
  textResult: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 30,
  },
});

export default App;
