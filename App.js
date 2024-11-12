import React, {useState, useRef} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const limit = 10;

  const incrementCounter = () => {
    if (counter < limit) {
      setCounter(counter + 1)
    }
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Pessoas no restaurante:</Text>

      <View style={styles.counterSection}>
        <Text style={styles.counterNumber}>{counter}</Text>
      </View>

      {
        counter === limit &&
            <View style={styles.limitSection}>
              <Text style={styles.limitSectionText}> Limite de pessoas atingidas no estabelecimento.</Text>
            </View>
      }

      <View style={styles.actionsSection}>
        <TouchableOpacity
            disabled={counter === limit}
            onPress={() => incrementCounter()}
            style={{...styles.addAction, backgroundColor: counter === limit ? 'rgb(49,48,48)' : '#0086FE'}}
        >
          <Text style={styles.addActionText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            disabled={counter === 0}
            onPress={() => decrementCounter()}
            style={{...styles.removeAction, backgroundColor: counter === 0 ? 'rgb(112,112,112)' : '#0086FE'}}
        >
          <Text style={styles.removeActionText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: 400
  },
  counterSection: {
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 20
  },
  counterNumber: {
    fontSize: 40,
    color: 'white'
  },
  actionsSection: {
    width: '80%',
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  addAction: {
    padding: 12,
    borderRadius: 10
  },
  addActionText: {
    color: 'white',
    fontSize: 15
  },
  removeAction: {
    backgroundColor: '#0086FE',
    padding: 12,
    borderRadius: 10
  },
  removeActionText: {
    color: 'white',
    fontSize: 15
  },
  limitSection: {
    padding: 8,
    backgroundColor: '#ff6b00',
    margin: 10,
    borderRadius: 10
  },
  limitSectionText: {
    fontStyle: 'italic',
    fontWeight: "bold",
    fontSize: 15
  }
});
