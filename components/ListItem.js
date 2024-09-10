import { StyleSheet, Text, TouchableOpacity } from "react-native";

// AllExpenses List uses ListItem to define each item in the list of all expenses
const ListItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Text style={styles.title}>{item.money}</Text>
    <Text style={styles.title}>{item.date}</Text>
  </TouchableOpacity>
);

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
