import { Video } from "expo-av";
import { Fragment, useRef, useState } from "react";
import {Button, StyleSheet, View} from 'react-native'
export const VideoPlayer = () => {
    const video = useRef(null);
  const [status, setStatus] = useState({});
    return <Fragment>
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        // uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        uri: 'https://vod-progressive.akamaized.net/exp=1670612088~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4799%2F28%2F723997399%2F3358320950.mp4~hmac=4e20a6f96b47de76517285cbdc682266ea40090b79177ef16e2131006394af90/vimeo-prod-skyfire-std-us/01/4799/28/723997399/3358320950.mp4?filename=file.mp4&download=1',
      }}
      useNativeControls
      resizeMode="contain"
      volume={100}
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={styles.buttons}>
      <Button
        title={status.isPlaying ? 'Pause' : 'Play'}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      />
    </View>
  </View>
  </Fragment>
}


const styles = StyleSheet.create({
    video: {
        width:'100%',
        height:300,
    },
    container: {
        marginTop: 20
    },
    buttons: {
        display: 'none'
    },

  });
  