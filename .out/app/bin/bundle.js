var _ = (function (React, fs) {
    'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    function Text (props) {
        // return (<text {...props} />);
        return React.createElement('text', props);
    }

    function View (props) {
        // return (<view {...props} />);
        return React.createElement('view', props);
    }

    function Image (props) {
        // return (<image {...props} />);
        return React.createElement('image', props);
    }

    function LinearLayout (props) {
        // return (<linearLayout {...props} />);
        return React.createElement('linearLayout', props);
    }

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

    return MyApp;

}(React, fs));
