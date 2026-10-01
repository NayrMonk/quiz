import { StyleSheet, Text, View } from 'react-native';

export default function ProfileHeader({ name, roll }) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.roll}>Roll No: {roll}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roll: {
    fontSize: 16,
    marginTop: 4,
  },
});
