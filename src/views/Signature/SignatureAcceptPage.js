import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from "react-native";
import { Banner } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import { Container, List, ListItem, Text, Left, Body, Right, Button, Icon } from 'native-base';
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
    return (
      <View style={{ width: '100%', height: '100%' }}>
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
              <View style={{paddingLeft:25, paddingTop:3}}>
                <Text style={Styles.textMedium}>
                  <Icon type={'AntDesign'} name={'earth'}
                    style={Styles.iconEarth}
                  />
                  AppKey Signature{'\n'}
                </Text>
              </View>
              <View>
                <Icon type={'MaterialCommunityIcons'} name={'check-decagram'}
                        style={{color: '#0048A7', fontSize: 25 }}/>
              </View>
            </View>

          {/* check-decagram , certificate*/}
          <TouchableOpacity onPress={this.openPopup}
          style={Styles.viewBetweenSpace}>
              <View>
                <Text style={Styles.txtGreen}>
                  Expiration Date: 25 March 2019
                  <Icon type={'AntDesign'} name={'check'}
                  style={{color: '#149100',fontSize: 15,}}
                  />
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
export default withNamespaces()(EasySignaturePage3);
