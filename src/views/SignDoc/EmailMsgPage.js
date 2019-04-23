import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Container,List,Thumbnail, ListItem, Text, Left, Body, Icon, Textarea, Button, Input } from 'native-base';
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";


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
      <ScrollView  style={{
        width:'100%'
      }}>

        <Text
          style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight:'normal',
              fontSize: 22,
              lineHeight: 24,
              color: '#0048A7',
              marginTop:5,
              marginBottom:18,
              paddingLeft:14,
            }}
          >
             Write e-mail Message
          </Text>
          <View >
            <Input placeholder="Subject"
                style={{ marginHorizontal:32, borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
            <Textarea rowSpan={5} placeholder="Message"
                style={{ marginHorizontal:32, borderWidth:1,marginTop:26,borderColor:'rgba(111, 111, 111, 0.5)'}} />
          </View>
          <Text
          style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight:'normal',
              fontSize: 22,
              lineHeight: 24,
              color: '#0048A7',
              marginTop:26,
              paddingLeft:14,
            }}
          >
             Private Message
          </Text>
          <Text
          style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight:'normal',
              fontSize: 17,
              lineHeight: 24,
              color: '#0048A7',
              marginTop:2,
              paddingLeft:14,
            }}
          >
             Private messages are appended after the body message
          </Text>



          <View style={{
            margin:42,
            marginTop:16,
          }}>
            <Button iconLeft style={{ width:144, height:40, backgroundColor:'#2372D8', marginTop:15}}>
              <Icon type='Ionicons'  name='md-trash' style={{color:'#fff',alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                PERSON 1
              </Text>
              <Text></Text>
            </Button>
            <Textarea rowSpan={5} placeholder="Message"
                style={{borderWidth:1,marginTop:16,borderColor:'rgba(111, 111, 111, 0.5)'}} />

            <Button iconLeft style={{ width:144, height:40, backgroundColor:'#2372D8', marginTop:49}}>
              <Icon type='Feather'  name='plus' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                PERSON 2
              </Text>
              <Text></Text>
            </Button>

            <Button iconLeft style={{ width:144, height:40, backgroundColor:'#2372D8', marginTop:11}}>
              <Icon type='Feather'  name='plus' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                PERSON 3
              </Text>
              <Text></Text>
            </Button>
          </View>
          <Button
              onPress={() => this.props.navigation.navigate("DocRevisionPage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:97, marginRight:18,marginBottom:19}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:30 }}>
                NEXT
              </Text>
          </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(AccountPage);
