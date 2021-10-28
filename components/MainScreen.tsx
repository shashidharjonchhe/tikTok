import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import { Video as propsVideo } from "../services/api";
const { height, width } = Dimensions.get("screen");

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;
const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface propsVideos {
  videos: Array<propsVideo>;
}

const MainScreen = ({ videos }: propsVideos) => {
  const [selected, setSelected] = useState(0);
  const [openMessageBox, setOpenMessageBox] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<string>>([
    "Hii there",
    "Hii there",
    "Hello ",
    "Nice Video",
    "Nice Damce",
  ]);
  const handleScroll = (event) => {
    setSelected(Math.ceil(event.nativeEvent.contentOffset.y / height));
  };
  const showMessageBox = (status: boolean) => {
    console.log(status);
    setOpenMessageBox(status);
  };
  const handleChange = (data: string) => {
    setMessage(data);
  };
  const handleSendMessage = (): void => {
    if (!message) {
      return;
    }
    setMessages([message, ...messages]);
    setMessage("");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onMomentumScrollEnd={handleScroll}
        pagingEnabled
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {videos.map((item, index) => {
          console.log(selected, index);
          return (
            <View
              key={item.id}
              style={{
                flex: 1,
                height: height,
                justifyContent: "center",
                backgroundColor: "#010101",
              }}
            >
              <VideoPlayer
                video={item.video}
                poster={item.poster}
                isPlay={selected === index}
              />
              <Gradient
                locations={[0, 0.26, 0.6, 1]}
                colors={[
                  "rgba(26,26,26,0.6)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0.6)",
                ]}
              >
                <Center>
                  <Sidebar showMessageBox={showMessageBox} count={item.count} />
                </Center>
              </Gradient>
            </View>
          );
        })}
      </ScrollView>

      {openMessageBox && (
        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: width,
            height: height / 2,
            bottom: 0,
          }}
        >
          <Button
            color="#111"
            style={styles.button}
            onPress={() => setOpenMessageBox(false)}
            title="Close"
          />
          <ScrollView>
            {messages.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.messageText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <View>
            <TextInput
              onChangeText={handleChange}
              placeholderTextColor="#fff"
              style={styles.input}
              value={message}
              placeholder={"Type your message here..."}
            />
            <TouchableOpacity
              onPress={handleSendMessage}
              style={styles.semdButton}
            >
              <View style={styles.textWrapper}>
                <Text style={styles.messageText}>Send</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  scrollView: {
    position: "relative",
    backgroundColor: "#000",
  },
  button: {
    color: "#333",
    borderRadius: 0,
  },
  semdButton: {
    backgroundColor: "orange",
    width: 80,
    height: 50,
    borderRadius: 10,
    position: "relative",
    right: -275,
    bottom: 5,
  },
  textWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    color: "#ddd",
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    // margin: 2,
    borderColor: "#262335",
    borderWidth: 1,
    backgroundColor: "#111",
  },
  input: {
    position: "absolute",
    bottom: 0,
    height: 60,
    color: "#fff",
    padding: 10,
    backgroundColor: "#262335",
    width: width,
    borderColor: "gray",
    borderWidth: 1,
  },
});
