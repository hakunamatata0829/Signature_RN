import React from "react";
import { View, Image } from "react-native";
import {  Banner   } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import { Icon, Button, Text } from 'native-base';

class AccountPage extends React.Component {

  state = {
    visible: true,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Flip Doc",
      headerStyle: {
        backgroundColor: '#2372D8',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 28,
        color:'#fff',
        textAlign:"center",
        flex:1
      },
      headerTintColor: '#fff',
      headerRight: (
        <Icon name={'notifications'} style={{color:'#fff', paddingRight:10}} size={25} />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;

    return (
      <View  style={{
        width:'100%',
        height:'100%'
      }}>
        <Banner
            visible={this.state.visible}
            actions={[
              {
                label: 'Got it',
                onPress: () => this.setState({ visible: false }),
              }
            ]}
          >
          <Text style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 22,
              lineHeight: 23,
              letterSpacing: 0.25,
              color: '#0048A7',
              marginTop:16,
              marginBottom:23,
            }}
          >Choose your personal or business account.</Text>
        </Banner>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        <Text style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 22,
              lineHeight: 25,
              letterSpacing: 0.25,
              color: '#0048A7',
              marginTop:16,
              marginBottom:23,
            }}
        >Choose your account
        </Text>

        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("FlipDocTemplatePage")}
        >
          <Icon type='MaterialIcons' name='cloud-upload' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            PERSONAL
          </Text>
          <Text></Text>
        </Button>
        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("FlipDocTemplatePage")}
        >
          <Icon type='FontAwesome' name='folder' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            BUSINESS
          </Text>
          <Text></Text>
        </Button>

      </View>
      </View>
    );
  }
}
export default withNamespaces()(AccountPage);
