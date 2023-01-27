import React, { useState, useEffect, useRef } from "react";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import { Audio } from "expo-av";
import {
  Feather,
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const songName = "Ehide My Heart";
const SampleTrack = require(`../assets/songs/${songName}.mp3`);

export default function Controller() {
  const [play, setPlay] = useState(false);
  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    LoadAudio();
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          setPlay(true);
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          setPlay(false);
        }
      }
    } catch (error) {}
  };

  const stopAudio = async () => {
    sound.current.stopAsync();
    setPlay(false);
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Feather name="heart" size={24} color="white" />
        <Ionicons name="share-outline" size={24} color="white" />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 24 }}>{songName}</Text>
      </View>
      <View style={styles.play}>
        <FontAwesome5 name="random" size={32} color="white" />
        <AntDesign name="stepbackward" size={32} color="white" />
        <Pressable onPress={!play ? PlayAudio : PauseAudio}>
          <FontAwesome5
            name={play ? "pause" : "play"}
            size={32}
            color="white"
          />
        </Pressable>
        <AntDesign name="stepforward" size={32} color="white" />
        <Entypo name="loop" size={32} color="white" />
      </View>
      <Pressable onPress={stopAudio}>
        <Ionicons name="return-down-back" size={32} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth - 8,
    marginTop: 10,
    marginBottom: 60,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#3e4359",
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  play: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
