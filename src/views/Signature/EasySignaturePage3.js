import React from "react";
import { View, TouchableOpacity } from "react-native";
import { withNamespaces } from "react-i18next";
import { Text, Icon } from 'native-base';
import Styles from '../../themes/styles';

class EasySignaturePage3 extends React.Component {
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
          <Icon name={'menu'} style={Styles.headerLeftIcon}  />
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
          <TouchableOpacity onPress={this.openPopup} style={{alignItems: 'flex-end',}}>
            <View style={Styles.pencilView} >
              <Icon type={'MaterialCommunityIcons'} name={'pencil'}
                style={Styles.btnOrangeRoundPen}
              />
            </View>
          </TouchableOpacity>

        </View>
        <View>
          <View style={{ alignItems: 'center', marginTop:30 }} >

            <TouchableOpacity onPress={() => this.props.navigation.navigate("EasySignatureSelectPage")} >
              <View style={Styles.viewCenterRange144} >

                <Icon type={'Entypo'} name={'plus'}
                  style={Styles.btnOrangeRound}
                />
                <Text style={Styles.textMedium}>
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
export default withNamespaces()(EasySignaturePage3);
