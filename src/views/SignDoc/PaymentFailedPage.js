import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Container,Card,CardItem, Input, CheckBox, Text,Icon, ListItem, Body, Right, Button, Content } from 'native-base';
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
//import Icon from "react-native-vector-icons/Entypo";

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
      <Container >
        <ScrollView >
            <View style={{ flex: 1, flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor:'#FF7373',
                          paddingLeft:29,
                          paddingVertical:18,
                          height:56
                          }}>
              <Icon type="Entypo" name="warning" style={{color:'#fff'}} size={14}/>
              <Text style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 17,
                    color: '#fff',
                    paddingLeft:33,
                  }}>Payment Failed</Text>
            </View>

            <View style={{marginHorizontal:15,color:'#263238'}}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:33 }}>
              <Icon type="FontAwesome5" name="money-bill" style={{color:'#0048A7'}} size={8}/>
              <Text style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 22,
                    color: '#0048A7',
                    paddingLeft:8,
                  }}>Payment</Text>
            </View>
            <Card >
              <CardItem >
                <Body>
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontSize: 38,
                      color: '#0048A7',
                      height:78,
                      marginTop:28,
                      alignSelf: 'center',
                    }}>
                   R$ 0,80
                  </Text>

                </Body>
              </CardItem>
            </Card>

              <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:45 }}>
                <Icon type="Ionicons" name="camera" style={{color:'#0048A7'}} size={29}/>
                <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontSize: 22,
                      color: '#0048A7',
                      paddingLeft:16,
                    }}>Scan your card</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#DADADA',
                  borderBottomWidth: 1,
                  marginTop:30,
                  marginBottom:22
                }}
              />
              <View >
                <Input placeholder="Name on the Card"
                    style={{ marginHorizontal:20, borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
                <Input placeholder="Card Number"
                    style={{ marginHorizontal:20, borderWidth:1,marginTop:26,borderColor:'rgba(111, 111, 111, 0.5)'}} />
                <View style={{flexDirection: 'row', marginTop:26, alignSelf: 'center' }}>
                  <Input placeholder="MM/YYYY" style={{width:'60%',textAlign:'center',
                  marginHorizontal:20, borderWidth:1,borderColor:'rgba(111, 111, 111, 0.5)'}} size={20}/>
                  <Input placeholder="CCV" style={{width:'30%',
                  marginHorizontal:20,textAlign:'center', borderWidth:1,borderColor:'rgba(111, 111, 111, 0.5)'}} size={10}/>
                </View>
              </View>
              <ListItem style={{marginTop:19, color:"#0048A7", borderColor:'#fff'}}>
                <CheckBox checked={true} color="#0048A7"/>
                <Body>
                  <Text style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontSize: 17,
                        color: '#0048A7',
                        paddingLeft:16,
                    }}>Save for future purchase</Text>
                </Body>
              </ListItem>
            </View>


            <Button
              onPress={() => this.props.navigation.navigate("SendMsgPage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:24, marginRight:21,marginBottom:22}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:37}}>
                PAY
              </Text>
          </Button>

          </ScrollView>

        </Container>
    );
  }
}
export default withNamespaces()(AccountPage);
