import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProfileHeader from './components/ProfileHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileHeader name="Muhammad Umer" roll="23i-6129" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
