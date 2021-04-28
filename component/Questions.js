import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import { QuestionsData } from "../data/dummy-data";
import Card from "../component/Card";
import FinalScreen from "../screens/FinalScreen";
const Questions = (props) => {
  let [yes, setYes] = useState(0);
  let [no, setNo] = useState(0);
  let [count, setCount] = useState(1);
  const firstSelectedQuestion = QuestionsData.find((cat) => cat.id === count);

  console.log("yes:", yes);
  console.log("no:", no);
  console.log("count", count);
  const increaseCountPositive = () => {
    setCount(count + 1);
    setYes(yes + 1);
  };
  const increaseCountNegative = () => {
    setCount(count + 1);
    setNo(no + 1);
  };

  if (count <= 10) {
    return (
      <View>
        <Card style={styles.QuestionsCard}>
          <Text style={styles.QuestionsImportantText}>
            Bu teste vereceğiniz cevapların doğruluğu test sonucu için önem
            taşımaktadır.
          </Text>
          <View flexDirection="row" style={{marginHorizontal:10,textAling:'center'}}>
            <Text style={styles.QuestionsNumber}>
              {firstSelectedQuestion.id})
            </Text>
            <Text style={styles.QuestionsText}>
              {firstSelectedQuestion.question}
            </Text>
          </View>
          <View style={styles.QuestionsViewButton}>
            <Button
              title="HAYIR"
              style={styles.QuestionsNumber}
              onPress={() => {
                increaseCountNegative() && props.onPass("QuestionsScreen");
              }}
            />

            <Button
              title="EVET"
              style={styles.QuestionsNumber}
              onPress={() => {
                increaseCountPositive() && props.onPass("QuestionsScreen");
              }}
            />
          </View>
        </Card>
      </View>
    );
  } else return <FinalScreen count={count} yesCount={yes} noCount={no} />;
};

const styles = StyleSheet.create({
  QuestionsCard: {
    padding: 20,
    margin: 20,
  },
  QuestionsNumber: {
    fontSize: 20,
    fontWeight: "600",
    marginRight:2,
  },
  QuestionsText: {
    fontSize: 20,
    fontWeight: "600",
  },
  QuestionsViewButton: {
    justifyContent: "space-around",
    flexDirection: "row",
    margin: 20,
  },
  QuestionsImportantText: {
    color: "red",
    fontWeight: "bold",
    margin: 20,
  },
});

export default Questions;
