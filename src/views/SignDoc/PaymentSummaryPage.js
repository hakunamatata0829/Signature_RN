import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Container,Card,CardItem, ListItem, Text,Icon, Left, Body, Right, Button, Content } from 'native-base';
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
      <Container style={{marginHorizontal:15}}>
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:18 }}>
              <Icon type="Entypo" name="calculator" style={{color:'#0048A7'}} size={14}/>
              <Text style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 22,
                    color: '#0048A7',
                    paddingLeft:8,
                  }}>Payment Summary</Text>
            </View>
            <Card >
              <CardItem >
                <Body>
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontSize: 14,
                      color: '#263238',
                    }}>
                    File 1 (Contract.pdf){'\n'}{'\n'}
                    Video Sign ----- R$ 0,10 > 5X = r$ 0,50{'\n'}{'\n'}
                    File 2 (Contract2.pdf){'\n'}{'\n'}
                    Easy Sign ----- R$ 0,03 > 5X = r$ 0,30{'\n'}{'\n'}

                  </Text>
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontSize: 14,
                      color: '#263238',alignSelf: 'flex-end', marginRight:31}}>Total = R$ 0,80</Text>
                </Body>
              </CardItem>
            </Card>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:18 }}>
              <Icon type="FontAwesome5" name="money-bill" style={{color:'#0048A7'}} size={8}/>
              <Text style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 22,
                    color: '#0048A7',
                    paddingLeft:8,
                  }}>Choose Payment Method</Text>
            </View>
            <Card >
              <CardItem >
                  <Icon type="Ionicons" name="md-card" style={{color:'#0048A7'}} size={14}/>
                  <Text style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontSize: 17,
                        color: '#0048A7',
                        paddingLeft:8,
                      }}>Credit Card</Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem >
                  <Icon type="MaterialCommunityIcons" name="bank" style={{color:'#0048A7'}} size={14}/>
                  <Text style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontSize: 17,
                        color: '#0048A7',
                        paddingLeft:8,
                      }}>PayPal</Text>
              </CardItem>
            </Card>
            <Button
              onPress={() => this.props.navigation.navigate("PaymentFailedPage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:45, marginRight:6,marginBottom:19}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:30}}>
                NEXT
              </Text>
          </Button>
          </ScrollView>

        </Container>
    );
  }
}
export default withNamespaces()(AccountPage);
