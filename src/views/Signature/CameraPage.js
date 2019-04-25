import React from "react";
import { View,TouchableOpacity } from "react-native";
import { withNamespaces } from "react-i18next";
import { Text, Button, Icon } from 'native-base';
import Styles from '../../themes/styles';


class CameraPage extends React.Component {
  state = {
    visible: true,
  };
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
          <Icon name={'menu'} style={Styles.headerLeftIcon} />
        </TouchableOpacity>
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;
    var path = this.props.navigation.getParam("captureImage");

    return (
      <View style={Styles.fullView}>
        <Text style={Styles.blueTopTitle}>
          Capture using a camera
        </Text>
        <View>
          <View style={{ alignItems: 'center' }} >
            <View style={Styles.viewCenterRange116_23} >
              <Text style={Styles.labelTextSize11}>
                Name
              </Text>
            </View>
            <TouchableOpacity onPress={this.openPopup} >

              <View style={Styles.viewCenterRange116} >
                <Icon type={'FontAwesome'} name={'camera'}
                  style={Styles.iconBlueRound}
                />
              </View>
            </TouchableOpacity>

            <Button
              onPress={() => this.props.navigation.navigate("CameraCapturePage")}
              style={Styles.captureBtn}>
              <Text style={Styles.captureTxt}>
                START CAMERA
              </Text>
            </Button>


            <View style={Styles.viewCenterRange116_23} >
              <Text style={Styles.labelTextSize11}>
                Initials
              </Text>
            </View>
            <TouchableOpacity onPress={this.openPopup} >

              <View style={Styles.viewCenterRange116} >

                <Icon type={'FontAwesome'} name={'camera'}
                  style={Styles.iconBlueRound}
                />
              </View>
            </TouchableOpacity>

            <Button
              onPress={() => this.props.navigation.navigate("CameraCapturePage")}
              style={Styles.captureBtn}>
              <Text style={Styles.captureTxt}>
                START CAMERA
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
export default withNamespaces()(CameraPage);
