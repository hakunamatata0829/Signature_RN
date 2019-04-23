import React from "react";
import { View, FlatList, TouchableOpacity, ProgressBarAndroid } from "react-native";
//import {  Text, Banner,List   } from "react-native-paper";
import { Container, Text, Button, Content } from 'native-base';
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
      headerTitle: "Send or Go to",
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
        <Icon name={'notifications'} style={{color:'#fff', paddingRight:10}} size={25}
           onPress={() => this.props.navigation.navigate("Home")}
        />
      ),
      headerLeft: (
        <Icon name={'menu'} style={{color:'#fff', paddingLeft:18}} size={25} />
      ),
    };
  };


  openPopup = () => {
    alert('upload')
  }

  render() {
    const { t } = this.props;

    return (
      <Container>
      <Content >
        <View style={{
            width:'100%',
            //justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 22,
                lineHeight: 25,
                letterSpacing: 0.25,
                color: '#A7A7A7',
                marginBottom:23,
                marginTop:25,
                color:'#2372D8'
              }} >
              Ok message sent!
            </Text>
            <Button iconLeft style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8'}}>
              <Icon name='send' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                SIGNDOC
              </Text>
              <Text></Text>
            </Button>
            <Button iconLeft style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon name='send' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                SIMPLESTAMP
              </Text>
              <Text></Text>
            </Button>
            <Button iconLeft style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon name='send' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                SIMPLECART
              </Text>
              <Text></Text>
            </Button>
            <Button iconLeft
              onPress={() => this.props.navigation.navigate("Home")}
              style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon name='dashboard' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                HOME
              </Text>
              <Text></Text>
            </Button>
            <Button iconLeft style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon name='email' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                INBOX
              </Text>
              <Text></Text>
            </Button>
            <Button iconLeft style={{alignSelf: 'center', width:185, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon name='inbox' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                OUTBOX
              </Text>
              <Text></Text>
            </Button>
            {/* <Button
              icon={<FontAwesome5 name={'send'} style={{color:'#fff', paddingRight:10}} size={25} />}
              title="USE MASK"
              buttonStyle={{
                backgroundColor: "#2372D8",
                width:140, height:40, marginTop:17
              }}
              onPress={() => this.props.navigation.navigate("UploadFilePage")}
            /> */}
        </View>

      </Content>
    </Container>
    );
  }
}
export default withNamespaces()(AccountPage);
