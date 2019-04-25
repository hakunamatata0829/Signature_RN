/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react');
var ReactNative = require('react-native');
var {Component} = React;

var {
    AppRegistry,
    StyleSheet,
    View, TouchableHighlight,
    TouchableOpacity
} = ReactNative;

import { Container, List, ListItem, Text, Left, Body, Right, Button, Icon } from 'native-base';
import SignatureCapture from 'react-native-signature-capture';
import Styles from '../../themes/styles';

export default class DrawingSignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawSignImagePath: "",
    }

    this._onSaveEvent = this._onSaveEvent.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: "Signature",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (<
        Icon name={'notifications'}
        style={Styles.headerRightIcon}
      />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("DrawingOnPadPage", { drawSignImage: params.drawSignImage })}>
          <Icon type={'Ionicons'} name={'ios-arrow-back'} style={{ color: '#fff', paddingLeft: 18 }} size={25} />
        </TouchableOpacity>
      ),
    };
  };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{alignItems:"center",justifyContent:"center"}}>Signature Capture Extended </Text>
                <SignatureCapture
                    style={[{flex:1},styles.signature]}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={true}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.saveSign() } } >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableHighlight>

                </View>

            </View>
        );
    }

    saveSign() {
        this.refs["sign"].saveImage();
        this.setPath('ss');
    }

    resetSign() {
        this.refs["sign"].resetImage();
    }

    _onSaveEvent(result) {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        console.log(result);
        this.setState({
          drawSignImagePath: result.pathName,
        });
        this.props.navigation.setParams({
          drawSignImage: result.pathName,
        });
    }
    _onDragEvent() {
         // This callback will be called when the user enters signature
        console.log("dragged");
    }

    componentDidMount(){
      this.props.navigation.setParams({
        drawSignImage: this.state.drawSignImagePath,
      });
    }


    setPath = (path) =>{
      this.setState({
        drawSignImagePath: path,
      });
      this.props.navigation.setParams({
        drawSignImage: path,
      });

    }
}

const styles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});

AppRegistry.registerComponent('DrawingSignPage', () => DrawingSignPage);
