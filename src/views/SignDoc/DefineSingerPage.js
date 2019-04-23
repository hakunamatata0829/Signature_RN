import React from "react";
import { View, Image, ScrollView, Picker, Dimensions, TouchableHighlight, } from "react-native";
import { Container,List,CheckBox, ListItem, Text, Item, Left, Body , Icon, Textarea, Button, Input,   } from 'native-base';
import { Banner } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import { Col, Row, Grid } from "react-native-easy-grid";

class DefineSingerPage extends React.Component {
  constructor(props) {
    super(props);
    this. state = {
      visible: true,
      selected: undefined,
      selected2: 'key1',
      selected3: 'key2',
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }
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
      <Container>
      <ScrollView  style={{
        width:'100%'
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
          >The number of signers was previously defined on the flipdoc tool.</Text>
        </Banner>
        <Text
          style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight:'normal',
              fontSize: 22,
              lineHeight: 24,
              color: '#0048A7',
              marginTop:31,
              marginBottom:18,
              paddingLeft:28,
            }}
          >
            Define Singers
          </Text>
          <Grid style={{}}>
            <Row>
              <Col style={{ backgroundColor: '#fff',  width:64,justifyContent: 'center', alignItems: 'center'  }}>
              <TouchableHighlight
                  style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: 40,
                    height: 40,
                    backgroundColor:'#fff',
                    justifyContent: 'center',
                    borderColor:'#0048A7',
                    borderWidth:2,
                    borderStyle:'dashed',
                    alignItems: 'center',
                  }}
                  underlayColor = '#ccc'
                >
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#0048A7',
                    }}> 1 </Text>
                </TouchableHighlight>
              </Col>
              <Col style={{ backgroundColor: '#fff',  marginRight:20}}>
                <Input placeholder="Name"
                  style={{ borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
                <Input placeholder="E-mail"
                  style={{ marginTop:8, borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Security Level"  value="key0" />
                  <Picker.Item label="Easy Signature" value="key1" />
                  <Picker.Item label="Appkey Sign" value="key2" />
                </Picker>
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Verification Process"  value="key0" />
                  <Picker.Item label="DocPhoto" value="key1" />
                  <Picker.Item label="Selfie" value="key2" />
                </Picker>
                <ListItem style={{ color:"#0048A7", borderColor:'#fff'}}>
                  <CheckBox checked={true} color="#0048A7"/>
                  <Body>
                    <Text style={{
                          fontFamily: 'Roboto',
                          fontStyle: 'normal',
                          fontSize: 14,
                          color: '#0048A7',
                          paddingLeft:8,
                      }}>Include ID and Proof of residence</Text>
                  </Body>
                </ListItem>
              </Col>
            </Row>

            <Row>
              <Col style={{ backgroundColor: '#fff',  width:64,justifyContent: 'center', alignItems: 'center'  }}>
              <TouchableHighlight
                  style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: 40,
                    height: 40,
                    backgroundColor:'#fff',
                    justifyContent: 'center',
                    borderColor:'#0048A7',
                    borderWidth:2,
                    borderStyle:'dashed',
                    alignItems: 'center',
                  }}
                  underlayColor = '#ccc'
                >
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#0048A7',
                    }}> 2 </Text>
                </TouchableHighlight>
              </Col>
              <Col style={{ backgroundColor: '#fff',  marginRight:20}}>
                <Input placeholder="Name"
                  style={{ borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
                <Input placeholder="E-mail"
                  style={{ marginTop:8, borderWidth:1,borderColor: 'rgba(111, 111, 111, 0.5)' }} />
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Security Level"  value="key0" />
                  <Picker.Item label="Easy Signature" value="key1" />
                  <Picker.Item label="Appkey Sign" value="key2" />
                </Picker>
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Verification Process"  value="key0" />
                  <Picker.Item label="DocPhoto" value="key1" />
                  <Picker.Item label="Selfie" value="key2" />
                </Picker>
                <ListItem style={{ color:"#0048A7", borderColor:'#fff'}}>
                  <CheckBox checked={true} color="#0048A7"/>
                  <Body>
                    <Text style={{
                          fontFamily: 'Roboto',
                          fontStyle: 'normal',
                          fontSize: 14,
                          color: '#0048A7',
                          paddingLeft:8,
                      }}>Include ID and Proof of residence</Text>
                  </Body>
                </ListItem>
              </Col>
            </Row>
          </Grid>


          <Row>
              <Col style={{ backgroundColor: '#fff', width:64,justifyContent: 'center', alignItems: 'center'  }}>
              <TouchableHighlight
                  style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: 40,
                    height: 40,
                    backgroundColor:'#fff',
                    justifyContent: 'center',
                    borderColor:'#0048A7',
                    borderWidth:2,
                    borderStyle:'dashed',
                    alignItems: 'center',
                  }}
                  underlayColor = '#ccc'
                >
                  <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#0048A7',
                    }}> 3 </Text>
                </TouchableHighlight>
              </Col>
              <Col style={{ backgroundColor: '#fff',  marginRight:20}}>
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Group Name"  value="key0" />
                  <Picker.Item label="Group 1" value="key1" />
                  <Picker.Item label="Group 2" value="key2" />
                </Picker>
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Security Level"  value="key0" />
                  <Picker.Item label="Easy Signature" value="key1" />
                  <Picker.Item label="Appkey Sign" value="key2" />
                </Picker>
                <Picker
                  style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                  selectedValue={this.state.selected3}
                  onValueChange={this.onValueChange3.bind(this)}
                >
                  <Picker.Item label="Verification Process"  value="key0" />
                  <Picker.Item label="DocPhoto" value="key1" />
                  <Picker.Item label="Selfie" value="key2" />
                </Picker>

              </Col>
            </Row>
          <Button
              onPress={() => this.props.navigation.navigate("DefineSignerEachPage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:65, marginRight:20,marginBottom:23}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:30 }}>
                NEXT
              </Text>
          </Button>
      </ScrollView>
      </Container>
    );
  }
}
export default withNamespaces()(DefineSingerPage);
