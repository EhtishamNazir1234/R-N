import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:'plum'}}>Hello World!</Text>
      <Text style={{height:200,width:200, backgroundColor:'black'}}> </Text>
      <Text style={{height:200,width:200, backgroundColor:'lightgreen'}}> </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
