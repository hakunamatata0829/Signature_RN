import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Banner } from "react-native-paper";
import { withNamespaces } from "react-i18next";
import { Text, Icon } from 'native-base';
import Styles from '../../themes/styles';


class SecurityOptionPage extends React.Component {
  state = {
    visible: true,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Sign Doc",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (<
        Icon name={'notifications'}
        style={ Styles.headerRightIcon }
      />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;
    return (
    <View style={Styles.fullView}>
      <Banner visible={this.state.visible}
        actions={
          [{
            label: 'Got it',
            onPress: () => this.setState({ visible: false }),
          }]
        } >
        <Text style={Styles.bannerText} > For your security is recommended to do the both processes. </Text>
      </Banner>
      <View
        style={Styles.viewCenterFullRange} >
        <View style={{ alignItems: 'center' }} >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EasySignatureSelectPage")} >
            <View style={Styles.viewCenterRange144} >

              <Icon type={'Entypo'} name={'plus'}
                style={Styles.btnOrangeRound }
              />
              <Text style={Styles.textMediumCenter}>
                Easy Signature
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EasySignatureSelectPage")} >
            <View style={Styles.viewCenterRange144} >

              <Icon type={'Entypo'} name={'plus'}
                style={Styles.btnOrangeRound }

              />
              <Text style={Styles.textMediumCenter}>
                   AppKey{'\n'}
                  Signature
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    );
  }
}
export default withNamespaces()(SecurityOptionPage);
