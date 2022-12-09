import { useMutation } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Theme } from "../shared/constants";

export const HomeScreen = () => {
  const [text, onChangeText] = useState("Useless Text");
  const { isLoading, error, data, refetch } = useMutation(
    ["search"],
    () => {
      console.log("first");
    },
    {}
  );

  const onSubmit = () => {
    console.log("submit", { text });
  };

  const submitDisabled = text.length === 0 || isLoading;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TextInput
        placeholder="Search"
        value={text}
        onChangeText={onChangeText}
        multiline
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={onSubmit}
        disabled={submitDisabled}
        style={styles.button({ submitDisabled })}
      >
        {isLoading ? (
          <ActivityIndicator color={"#ffffff"} size={"small"} />
        ) : (
          <View>
            <Text style={{ textAlign: "center", color: Theme.DARK_BG }}>
              Submit
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Theme.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.DARK_BG,
  },
  textInput: {
    marginTop: 20,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  button: ({ submitDisabled }) => ({
    backgroundColor: "#16DB93",
    opacity: submitDisabled ? 0.5 : 1,
    width: "40%",
    marginHorizontal: "30%",
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }),
});
