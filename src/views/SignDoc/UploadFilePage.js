import React from "react";
import { View, FlatList, TouchableOpacity, ProgressBarAndroid } from "react-native";
//import {  Text, Banner,List   } from "react-native-paper";
import { Container,List, ListItem, Text, Left, Body, Right, Button } from 'native-base';
import { withNamespaces } from "react-i18next";
import {  Image  } from "react-native-elements";
import { ButtonAction } from "@themes";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class AccountPage extends React.Component {

  state = {
    visible: true,
    Progress_Value: 0.75
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
  openPopup = () => {
    alert('upload')
  }
  renderRow ({ item }) {
    return (
      <ListItem
        roundAvatar
        title={item.name}
        subtitle={item.subtitle}
        avatar={{uri:item.avatar_url}}
      />
    )
  }
  render() {
    const { t } = this.props;

    return (
      <View >
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={this.openPopup}>
          <View style={{
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:40,
              width:140,
              height:140,
              borderWidth:1,
              borderStyle:'dashed',
              borderRadius: 1,
              borderColor: '#2372D8',

            }}
            >

            <Icon name={'cloud-upload'} style={{color:'#0048A7', marginTop:33}} size={44} />
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

            Upload a doc
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View >

          <Text
              style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight:'bold',
                  fontSize: 14,
                  lineHeight: 24,
                  color: '#0048A7',
                  marginTop:32,
                  marginBottom:23,
                  paddingLeft:16,
                }}
            >
              File Name
          </Text>
        </View>
        <View style={{ margin:0}} >
          {/* <List.Section>
              <List.Subheader>Some title</List.Subheader>
              <List.Item
                title="I"
                style={{borderTopWidth:1, borderBottomWidth:1}}
                left={() => <Text style={{color:'#37474F', marginTop:10}}>ABC.pdf</Text>}
                right={() => <FontAwesome5 name={'trash'} style={{color:'#979797', marginTop:10, paddingRight:15}} size={18} />}
              />
              <List.Item
                title=" "
                style={{borderBottomWidth:1}}

              />
              <List.Item
                title=" "
                style={{borderBottomWidth:1}}

              />
          </List.Section> */}
          <List >
            <ListItem icon style={{borderTopWidth:1, borderBottomWidth:1, backgroundColor: '#ffF',}}>
              <Left>
                <Text style={{color:'#37474F'}}>ABC.pdf</Text>
              </Left>
              <Body>
               <ProgressBarAndroid
                styleAttr = "Horizontal"
                progress = { this.state.Progress_Value }
                indeterminate = { false }
                style={{width:'50%', alignSelf: 'flex-end', color:'#0048A7', marginRight:26, }}
                />
              </Body>
              <Right>
                <Button transparent>
                  <FontAwesome5 name={'trash'} style={{color:'#979797',paddingRight:5}} size={18} />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon style={{ borderBottomWidth:1, backgroundColor: '#ffF',}}>
              <Left>
                <Text style={{color:'#37474F', marginTop:0}}>ABC.pdf</Text>
              </Left>
              <Body>
               <ProgressBarAndroid
                styleAttr = "Horizontal"
                progress = { this.state.Progress_Value }
                indeterminate = { false }
                style={{width:'50%', alignSelf: 'flex-end', color:'#0048A7', marginRight:26, marginTop:0}}
                />
              </Body>
              <Right>
                <Button transparent>
                  <FontAwesome5 name={'trash'} style={{color:'#979797', marginTop:0, paddingRight:5}} size={18} />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon style={{ borderBottomWidth:1, backgroundColor: '#ffF',}}>
              <Left>
                <Text style={{color:'#37474F', marginTop:0}}>ABC.pdf</Text>
              </Left>
              <Body>
               <ProgressBarAndroid
                styleAttr = "Horizontal"
                progress = { this.state.Progress_Value }
                indeterminate = { false }
                style={{width:'50%', alignSelf: 'flex-end', color:'#0048A7', marginRight:26, marginTop:0}}
                />
              </Body>
              <Right>
                <Button transparent>
                  <FontAwesome5 name={'trash'} style={{color:'#979797', marginTop:0, paddingRight:5}} size={18} />
                </Button>
              </Right>
            </ListItem>
          </List>
        </View>
        <ButtonAction
          style={{width:96,
                  height:40,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight:'bold',
                  fontSize: 14,
                  alignSelf: 'flex-end',
                  marginRight:27,
                  marginTop:70,
                  }}
                  onPress={() => this.props.navigation.navigate("DefineSingerPage")}>
          UPLOAD
          </ButtonAction>
      </View>

    );
  }
}
export default withNamespaces()(AccountPage);
