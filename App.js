import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

/*
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
*/
const NumberPad = (props) => {
  let rows = [];
  let nums = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ['.', 0, '='],
  ];
  for (let i = 0; i < nums.length; i++) {
    let row = [];
    for (let j = 0; j < nums[0].length; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          onPress={() => props.onPress(nums[i][j])}
          style={styles.button}>
          <Text style={styles.textButton}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }
  return rows;
};

const OperationPad = (props) => {
  let rows = [];
  for (let i = 0; i < props.operations.length; i++) {
    rows.push(
      <TouchableOpacity
        key={props.operations[i]}
        onPress={() => props.onPress(props.operations[i])}
        style={styles.button}>
        <Text style={styles.textButton}>{props.operations[i]}</Text>
      </TouchableOpacity>,
    );
  }
  return rows;
};
const App = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const operations = ['DEL', '/', '*', '-', '+'];

  const calculationResult = () => {
    // Brackets -> of -> division -> mult -> add -> substract
    setResult(eval(calculation));
  };

  const isValid = () => {
    console.log(calculation.slice(-1));
    if (operations.indexOf(calculation.slice(-1)) > 0) return false;
    else return true;
  };

  const buttonPressed = (text) => {
    console.log(text);

    const lastChar = calculation.split('').pop();

    switch (text) {
      case '=':
        isValid() && calculationResult();
        break;
      case 'DEL':
        setCalculation(calculation.slice(0, -1));
        break;
      case '/':
        if (operations.indexOf(lastChar) > 0) {
          setCalculation(calculation.slice(0, -1) + text);
        } else if (calculation != '') {
          setCalculation((prevState) => prevState + text);
        }
        break;
      case '*':
        if (operations.indexOf(lastChar) > 0) {
          setCalculation(calculation.slice(0, -1) + text);
        } else if (calculation != '') {
          setCalculation((prevState) => prevState + text);
        }
        break;
      case '-':
        if (operations.indexOf(lastChar) > 0) {
          setCalculation(calculation.slice(0, -1) + text);
        } else if (calculation != '') {
          setCalculation((prevState) => prevState + text);
        }
        break;
      case '+':
        if (operations.indexOf(lastChar) > 0) {
          setCalculation(calculation.slice(0, -1) + text);
        } else if (calculation != '') {
          setCalculation((prevState) => prevState + text);
        }
        break;
      default:
        setCalculation((prevState) => prevState + text);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.textCalculation}>{calculation}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.textResult}>{result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <NumberPad onPress={buttonPressed} />
          </View>
          <View style={styles.operations}>
            <OperationPad onPress={buttonPressed} operations={operations} />
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
    backgroundColor: '#FFC312',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  result: {
    flex: 1,
    backgroundColor: '#6ab04c',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#badc58',
  },
  operations: {
    flex: 1,
    backgroundColor: '#c7ecee',
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
    fontSize: 30,
    color: 'white',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
