import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import Myimage from "./assets/Person_1.jpeg"
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Component = () => {
    const Results = useSafeAreaInsets();
    const [status, setstatus] = useState(false)
    return (
        <>
           
           

        </>
    )

}
export default Component;

const Mystyles = StyleSheet.create({
    MyChip: {
        width: 140
    },
    MystatusBar: {
        backgroundColor: "green"
    },


})