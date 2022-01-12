import React from "react";
import { View, Text, StyleSheet } from "react-native";

let App = (props) => {
    return (
        <View style={{backgroundColor: "purple", flex: 1 }}>

            <View style={{backgroundColor: "lightpink", flex: 1 }}>

                <Text>Green Chicken Enchiladas</Text>


            </View>

            <View style={{backgroundColor: "blue", flex: 2 }}>

                <View style={{backgroundColor: "yellow", flex: 1, justifyContent: "space-around", flexDirection: "row" }}>
                    <View style={{backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                        <Text>98 Kcal</Text>
                    </View>
                    <View style={{backgroundColor: "yellow"}}>
                        <Text>lorem lorem</Text>
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec velit vitae eros luctus scelerisque at nec neque. Donec tempor sodales neque, sit amet sagittis dui placerat eget. Morbi scelerisque elit vitae tellus pharetra vulputate. Proin rhoncus diam est, in finibus metus posuere sit amet. Pellentesque vitae pellentesque dui.</Text>

                </View>

            </View>
        </View>
    )
}

export default App;