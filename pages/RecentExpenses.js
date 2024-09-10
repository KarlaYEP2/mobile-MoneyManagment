import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import FullExpensesList from "../components/FullExpensesList";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses);
  const [selectedId, setSelectedId] = useState();

  const sevenDaysAgo = Date.now() - 60 * 60 * 24 * 7 * 1000; // seven days ago in timestamp
  const [data, setData] = useState(expenses);
  const sevenLastDaysData = useMemo(() => {
    return data.filter((item) => item.date >= sevenDaysAgo);
    // IMPORTANT: item.date Must be timpestamp other wise you should convert it to timestamp
  }, [data]);

  // Rendered as a separate component do pass selectedId UseState
  const renderItem = ({ item }) => (
    <FullExpensesList
      item={item}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );

  let TotalMoneySpent = sevenLastDaysData.reduce(
    (a, v) => (a = +a + +v.money),
    0
  ); // Finds the total money spent last 7 days

  return (
    <View>
      <View>
        <Text>Spent Last 7 days {TotalMoneySpent.toFixed(2)}</Text>
      </View>
      <FlatList
        data={sevenLastDaysData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
