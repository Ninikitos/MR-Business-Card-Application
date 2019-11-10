import React from '../node_modules/react/index.js';
import { View, LinearLayout, Image, Text } from '../node_modules/magic-script-components/src/components.js';
import 'fs';

//
class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return React.createElement(View, {
      name: "main-view"
    }, React.createElement(LinearLayout, {
      defaultItemAlignment: "center-left",
      defaultItemPadding: [0.1, 0.04, 0.1, 0.2],
      orientation: "horizontal",
      localPosition: [-0.6, 0.6, 0]
    }, React.createElement(LinearLayout, null, React.createElement(Image, {
      filePath: "res/Mask Group.png",
      width: 0.4,
      height: 0.4
    })), React.createElement(LinearLayout, null, React.createElement(Text, {
      setText: "Brave Nick",
      textSize: 0.16
    }), React.createElement(Text, {
      setText: "Mixed reality",
      textSize: 0.06
    }), React.createElement(Text, {
      setText: "Brave Nick",
      textSize: 0.04
    }), React.createElement(Text, {
      setText: "Brave Nick",
      textSize: 0.04
    }))));
  }

}

export default MyApp;
