import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Questions from "../component/Questions";

const QuestionsScreen = (props) => {
  return (
    <Questions onPass={(ScreenName) => props.navigation.push(ScreenName)} />
  );
};

const styles = StyleSheet.create({});

export default QuestionsScreen;
