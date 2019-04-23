import React from "react";
import { View, Image, ScrollView, Picker, TouchableOpacity, } from "react-native";
import { Container, List, Thumbnail, ListItem, Text, Item, Left, Form, Icon, Textarea, Button, Input, } from 'native-base';
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";
import Styles from '../../themes/styles';

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
      headerTitle: "Certul Certification",
      headerStyle: {
        backgroundColor: '#2372D8',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 28,
        color: '#fff',
        textAlign: "center",
        flex: 1
      },
      headerTintColor: '#fff',
      headerRight: (
        <Icon name={'notifications'} style={{ color: '#fff', paddingRight: 10 }} size={25} />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };


  render() {
    const { t } = this.props;

    return (
      <ScrollView style={{
        width: '100%'
      }}>

        <View style={{ marginHorizontal: 42, marginVertical: 26 }}>
          <View
            style={Styles.viewCenterFullRange} >
            <View style={{ alignItems: 'center' }} >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")} >
                <View style={Styles.viewCenterRange76_94} >

                  <Icon type={'FontAwesome'} name={'camera'}
                    style={Styles.iconBlue}
                  />
                </View>
              </TouchableOpacity>

            </View>

          </View>

          <View >
            <Input placeholder="Full Name"
              style={Styles.inputNormal} />

            <Picker
              style={Styles.pickerNormal}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Country" value="key0" />
            </Picker>

            <Picker
              style={Styles.pickerNormal}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="ID Type" value="key0" />
            </Picker>
            <Input placeholder="ID Number"
              style={Styles.inputNormal} />

            <Input placeholder="Birth Date"
              style={Styles.inputNormal} />

            <Input placeholder="State"
              style={Styles.inputNormal} />

            <Input placeholder="City"
              style={Styles.inputNormal} />

            <Input placeholder="Zip Code"
              style={Styles.inputNormal} />

            <Input placeholder="Phone"
              style={Styles.inputNormal} />
          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("SignatureAcceptPage")}
          style={Styles.btnOrangeSave}>
          <Text style={Styles.txtOrangeSave}>
            NEXT
          </Text>
        </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(AccountPage);
