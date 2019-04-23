import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {  Banner   } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import { Container,List, ListItem, Text, Left, Body, Right, Button,Icon } from 'native-base';

class AccountPage extends React.Component {
  state = {
    visible: true,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Sign Doc",
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
          >For your security is recommended to do the both processes.</Text>
        </Banner>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={this.openPopup}>
            <View style={{
                flex: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:40,
                width:144,
                height:120,
                borderWidth:1,
                borderStyle:'dashed',
                borderRadius: 5,
                borderColor: '#2372D8',

              }}
              >

              <Icon name={'plus'} style={{color:'#0048A7', marginTop:33}} size={44} />
              <Text style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 11,
                  lineHeight: 25,
                  letterSpacing: 0.25,
                  color: '#A7A7A7',
                  marginBottom:23,

                }} >
                Easy Signature
              </Text>
            </View>
            </TouchableOpacity>
          </View>

        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("TemplatePage")}
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
