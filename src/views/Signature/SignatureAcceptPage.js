import React from "react";
import { View, TouchableOpacity } from "react-native";
import { withNamespaces } from "react-i18next";
import { Text, Icon } from 'native-base';
import Styles from '../../themes/styles';


class SignatureAcceptPage extends React.Component {
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
        <TouchableOpacity onPress={() => navigation.navigate('EasySignatureSelectPage')}>
          <Icon name={'menu'} style={Styles.headerLeftIcon} size={25} />
        </TouchableOpacity>
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
        <View style={Styles.blueBorderedView}>
          <Text style={Styles.textMedium}>
            Easy Signature{'\n'}
          </Text>
          <TouchableOpacity onPress={this.openPopup} style={{ alignItems: 'flex-end', }}>
            <View style={Styles.pencilView} >
              <Icon type={'MaterialCommunityIcons'} name={'pencil'}
                style={Styles.btnOrangeRoundPen}
              />
            </View>
          </TouchableOpacity>

        </View>

        <View style={Styles.blueBorderedView}>
            <View  style={Styles.viewBetweenSpace} >
              <View style={Styles.paddingLeft25Top3}>
                <Text style={Styles.textMedium}>
                  <Icon type={'AntDesign'} name={'earth'}
                    style={Styles.iconEarth}
                  />
                  AppKey Signature{'\n'}
                </Text>
              </View>
              <View>
                <Icon type={'MaterialCommunityIcons'} name={'check-decagram'} style={Styles.iconBlue25}/>
              </View>
            </View>

          {/* check-decagram , certificate*/}
          <TouchableOpacity onPress={this.openPopup} style={Styles.viewBetweenSpace}>
              <View>
                <Text style={Styles.txtGreen}>
                  Expiration Date: 25 March 2019
                  <Icon type={'AntDesign'} name={'check'} style={Styles.iconGreen} />
                </Text>
              </View>
            <View style={Styles.pencilView} >
              <Icon type={'MaterialCommunityIcons'} name={'pencil'}
                style={Styles.btnOrangeRoundPen}
              />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default withNamespaces()(SignatureAcceptPage);
