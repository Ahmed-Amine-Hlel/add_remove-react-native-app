import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <View>
        <Appbar style={styles.appBarM}></Appbar>
        <Appbar style={styles.appBarS}>
          <Text style={styles.appBarText}>React Native Demo Home Page</Text>
        </Appbar>
      </View>
      <View style={styles.container}>
        <Text style={styles.phrase}>
          You have pushed the button this many times :
        </Text>
        <Text style={styles.counter}>{count}</Text>
        <FAB
          placement="right"
          icon={{ name: 'add', color: 'white' }}
          color="#3949AB"
          onPress={increment}
        />
        <FAB
          placement="left"
          icon={{ name: 'remove', color: 'white' }}
          color="#880E4F"
          onPress={decrement}
        />
        <StatusBar bg="#3700B3" barStyle="light-content" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarText: {
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appBarM: {
    backgroundColor: '#38833c',
  },
  appBarS: {
    backgroundColor: '#4caf50',
  },
  phrase: {
    fontSize: 16,
    color: '#808080',
  },
  counter: {
    fontSize: 35,
    color: '#808080',
  },
});
