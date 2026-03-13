import React, { useState,useEffect } from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import * as Notification from "expo-notifications"
Notification.setNotificationHandler({
  handleNotification: async() => ({
    shouldPlaySound:true,
    shouldShowBanner:true,
    shouldSetBadge:true
  })
})
export default function App() {
  const [Token , setToken] = useState(null)
  useEffect(()=>{
    Notification.addNotificationReceivedListener(msg =>{
      console.log(msg)
    })
  })
  const GetToken = async() =>{
        console.log(await Notification.getPermissionsAsync())
      const data = await Notification.getExpoPushTokenAsync()
      setToken(data.data)
      console.log(data.data)
  }
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={GetToken}>Get Token</Button>
      {
        Token ?
        <Text>{Token}</Text>
        : <Text>No Token Generated</Text>
      }
    </View>
  );
}