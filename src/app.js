//
import React from "react";
import { View, Text, Image, ScrollView, ScrollBar, LinearLayout } from "magic-script-components";
import { link } from "fs";

export default class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <View name="main-view">
        <LinearLayout
          defaultItemAlignment="center-left"
          defaultItemPadding={[0.1, 0.04, 0.1, 0.2]}
          orientation="horizontal"
          localPosition={[-0.6, 0.6, 0]}>
          <LinearLayout
          ><Image
            filePath="res/Mask Group.png"
            width={0.4}
            height={0.4}
            ></Image>  
          </LinearLayout>
          <LinearLayout>
            <Text setText="Brave Nick" textSize={0.16}></Text>
            <Text setText="Mixed reality" textSize={0.06}></Text>
            <Text setText="Brave Nick" textSize={0.04}></Text>
            <Text setText="Brave Nick" textSize={0.04}></Text>
          </LinearLayout>
        </LinearLayout>
      </View>
    );
  }
}
