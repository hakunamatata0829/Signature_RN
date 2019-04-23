import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Container,List,Thumbnail, ListItem, Text, Left, Body, Right, Button, Content } from 'native-base';
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import Icon from "react-native-vector-icons/MaterialIcons";

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
                  fontWeight:'bold',
                  fontSize: 22,
                  lineHeight: 24,
                  color: '#0048A7',
                  marginTop:2,
                  paddingLeft:16,
                }}
            >
              Doc Revision
          </Text>

          <View style={{
            margin:12,
            marginTop:55,
            elevation: 2,
            borderWidth:0,

          }}>
            <View >
              <List style={{borderWidth:0, borderColor:'#fff'}}>
                <ListItem icon style={{borderWidth:0,  borderColor:'#fff',  marginTop:15}}>
                  <Left>
                    <Thumbnail source={require('../../assets/blank_photo.jpg')}/>
                  </Left>
                  <Body style={{borderWidth:0, borderColor:'#fff'}}>
                      <Text  style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight:'normal',
                            fontSize: 24,
                            color: '#263238',
                            marginTop:0,
                            paddingLeft:16,
                          }}
                      >
                      Structure</Text>
                  </Body>

                </ListItem>

              </List>
            </View>
            <Text style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontSize: 14,
                  color: '#263238',
                  marginTop:16,
                  marginBottom:23,
                  paddingLeft:16,
                }}>
              Files:{'\n'}
              1 - Contrato.pdf{'\n'}
              signers:{'\n'}
              Person1{'\n'}
              Person2{'\n'}{'\n'}

              2 - Contrato2.pdf{'\n'}
              Person1{'\n'}
              Person2{'\n'}
              Person3{'\n'}{'\n'}

              Message-{'\n'}
              The process of writing a job description requires having a clear understanding of the job’s duties and responsibilities. The job posting should also include a concise picture of the skills required for the position to attract qualified job candidates. Organize the job description into five sections: Company Information, Job Description, Job Requirements, Benefits and a Call to Action. Be sure to include keywords that will help make your job posting searchable.
              {'\n'}{'\n'}
              Private Message{'\n'}
              Singer - Person1{'\n'}
              Message:{'\n'}
              The process of writing a job description requires having a clear understanding of the job’s duties and responsibilities. The job posting should also include a concise picture of the skills required for the position to attract qualified job candidates. Organize the job description into five sections: Company Information, Job Description, Job Requirements, Benefits and a Call to Action. Be sure to include keywords that will help make your job posting searchable.

            </Text>
          </View>
          <Button iconLeft
              onPress={() => this.props.navigation.navigate("PaymentSummaryPage")}
              style={{alignSelf: 'flex-end',
                      width:137, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:21, marginRight:13,marginBottom:16}}>
              <Icon name='send' style={{color:'#fff', paddingLeft:11,alignSelf: 'flex-start'}} size={21}/>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
                SEND
              </Text>
            <Text></Text>
          </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(AccountPage);
