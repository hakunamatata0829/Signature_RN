import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { withNamespaces } from "react-i18next";
import { Text, Button, Icon } from 'native-base';
import Styles from '../../themes/styles';

class DrawingOnPadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawSignImage: "",
    }

  }

  static navigationOptions = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name={'menu'} style={{ color: '#fff', paddingLeft: 18 }} size={25} />
        </TouchableOpacity>
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;
    var signImage = "file://data" + this.props.navigation.getParam("drawSignImage") + '?' + new Date();
    return (
      <View style={Styles.fullView}>
        <Text style={Styles.blueTopTitle}>
          Drawing on a pad
        </Text>
        <View>
          <View style={{ alignItems: 'center', paddingHorizontal:42 }} >
            <View style={Styles.viewCenterRange236_131} >
              <Image
                style={{width:200,height:130}}
                source={{uri:signImage}}
              />
            </View>

            <Button
              onPress={() => this.props.navigation.navigate("DrawingSignPage")}
              style={Styles.captureBtn135_40}>
              <Text style={Styles.captureTxt}>
                Capture Name
                </Text>
            </Button>

            <Button
              onPress={() => this.props.navigation.navigate("DrawingSignPage")}
              style={Styles.captureBtn135_40}>
              <Text style={Styles.captureTxt}>
                Capture Initials
              </Text>
            </Button>
          </View>

        </View>
        <Button
          onPress={() => this.props.navigation.navigate("EasySignatureSelectPage")}
          style={Styles.saveBtn96}>
          <Text style={Styles.txtOrangeSave}>
            SAVE
              </Text>
        </Button>
      </View>
    );
  }
}
export default withNamespaces()(DrawingOnPadPage);
