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
  SafeAreaView,
} from "react-native";
import { VideoPlayer } from "../components/VideoPlayer";
import { Theme } from "../shared/constants";

export const HomeScreen = () => {
  const [text, onChangeText] = useState("");
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style="light" />
        <TextInput
          placeholder="Search"
          value={text}
          onChangeText={onChangeText}
          multiline
          numberOfLines={2}
          style={styles.textInput}
        />

        <TouchableOpacity
          onPress={onSubmit}
          disabled={submitDisabled}
          style={styles.button({ submitDisabled })}
        >
          <View>
            {isLoading ? (
              <ActivityIndicator color={"#ffffff"} size={"small"} />
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  color: Theme.WHITE,
                }}
              >
                Submit
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <VideoPlayer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Theme.WHITE,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.DARK_BG,
  },
  textInput: {
    marginTop: 20,
    width: "100%",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  button: ({ submitDisabled }) => ({
    backgroundColor: "#274BC1",
    opacity: submitDisabled ? 0.5 : 1,
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  }),
});
