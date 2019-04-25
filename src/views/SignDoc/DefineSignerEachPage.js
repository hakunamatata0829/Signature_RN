import React from "react";
import { View, Image, ScrollView, Picker, Dimensions, TouchableHighlight, } from "react-native";
import { Container,List,Thumbnail, ListItem, Text, Item, Left, Form , Icon, Textarea, Button, Input,   } from 'native-base';
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";


class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              marginTop:16,
              marginBottom:18,
              paddingLeft:15,
            }}
          >
            Define singers to each file
          </Text>
            <ListItem itemDivider>
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
                    alignItems: 'center'
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
                <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#263238',
                      paddingLeft:13,
                    }}>my_image.pdf</Text>
            </ListItem>
            <View style={{marginHorizontal:42, marginVertical:13}}>
              <Picker
                style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
              <Picker
                style={{ marginTop:8, borderWidth:1 }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
            </View>

            <ListItem itemDivider>
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
                    alignItems: 'center'
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
                <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#263238',
                      paddingLeft:13,
                    }}>my_image.pdf</Text>
            </ListItem>
            <View style={{marginHorizontal:42, marginVertical:13}}>
              <Picker
                style={{  borderWidth:1, borderColor:'#111' }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
              <Picker
                style={{ marginTop:8, borderWidth:1 }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
            </View>


            <ListItem itemDivider>
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
                    alignItems: 'center'
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
                <Text style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight:'normal',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#263238',
                      paddingLeft:13,
                    }}>my_image.pdf</Text>
            </ListItem>
            <View style={{marginHorizontal:42, marginVertical:13}}>
              <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{  borderWidth:1, borderColor:'#111' }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
              <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ marginTop:8, borderWidth:1 }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>

              <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ marginTop:8, borderWidth:1 }}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Person 1"  value="key0" />
                <Picker.Item label="Person 2" value="key1" />
                <Picker.Item label="Person 3" value="key2" />
              </Picker>
            </View>






          <Button
              onPress={() => this.props.navigation.navigate("EmailMsgPage")}
              style={{alignSelf: 'flex-end',
                      width:96, height:40,
                      backgroundColor:'#FF5722',
                      marginTop:56, marginRight:16,marginBottom:16}}>
              <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, paddingLeft:30 }}>
                NEXT
              </Text>
          </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(AccountPage);
