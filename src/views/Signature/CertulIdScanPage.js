import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Banner } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import { Container, List, ListItem, Text, Left, Body, Right, Button, Icon } from 'native-base';
import Styles from '../../themes/styles';


class CertulIdScanPage extends React.Component {
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
        <Text style={Styles.bannerText} >
        To make the Certul Certification it's just 3 minutes...
        </Text>
      </Banner>
      <View
        style={Styles.viewCenterFullRange} >
        <View style={{ alignItems: 'center' }} >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CertulFormPage")} >
            <View style={Styles.viewCenterRange144} >

              <Icon type={'Entypo'} name={'plus'}
                style={Styles.btnOrangeRound }
              />
              <Text style={Styles.textMediumCenter}>
                ID Scan Front
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    </View>
    );
  }
}
export default withNamespaces()(CertulIdScanPage);
