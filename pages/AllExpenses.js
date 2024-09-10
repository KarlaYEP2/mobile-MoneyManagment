import { FlatList, StyleSheet, Text, View } from "react-native";
import FullExpensesList from "../components/FullExpensesList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses);
  const [selectedId, setSelectedId] = useState();

  // Rendered as a separate component do pass selectedId UseState
  const renderItem = ({ item }) => (
    <FullExpensesList
      item={item}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );

  let TotalMoneySpent = expenses.reduce(
    (sum, expense) => (sum = +sum + +expense.money),
    0
  ); // Finds the total money spent for All Expenses

  return (
    <View>
      <View>
        <Text>Total Spent: {TotalMoneySpent.toFixed(2)}</Text>
      </View>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
