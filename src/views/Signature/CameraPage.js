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
        <Text style={Styles.blueTopTitle}>
          Capture using a camera
        </Text>
        <View>
          <View style={{ alignItems: 'center'}} >
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
                style={{alignSelf: 'center',
                        width:115,
                        height:40,
                        backgroundColor:'#fff',
                        justifyContent: 'center',
                        marginTop:29,

                       }}>
                <Text style={{fontFamily: 'Roboto',fontSize: 11,  color:'#FF5722',fontWeight:'500' }}>
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
                style={{alignSelf: 'center',
                        width:115,
                        height:40,
                        backgroundColor:'#fff',
                        justifyContent: 'center',
                        marginTop:29,
                       }}>
                <Text style={{fontFamily: 'Roboto',fontSize: 11,  color:'#FF5722',fontWeight:'500' }}>
                  START CAMERA
                </Text>
            </Button>

          </View>

        </View>
        <Button
              onPress={() => this.props.navigation.navigate("UploadSignaturePage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:65, marginRight:20,marginBottom:23}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:30 }}>
                SAVE
              </Text>
          </Button>
      </View>
    );
  }
}
export default withNamespaces()(EasySignaturePage3);
