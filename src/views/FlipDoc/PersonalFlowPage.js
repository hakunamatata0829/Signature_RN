import React from "react";
import { View, ScrollView, Picker } from "react-native";
import { Text, Icon, Textarea, Button, Input } from 'native-base';
import { withNamespaces } from "react-i18next";
import Styles from '../../themes/styles';
import ToggleSwitch from 'toggle-switch-react-native'

class EasySignaturePage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      selected: undefined,
      selected2: 'key1',
      selected3: 'key2',
      isGroupMode:false,
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
      headerTitle: "Signature",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (
        <Icon name={'notifications'} style={Styles.headerRightIcon} />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  changeMode = () => {
    this.setState({isGroupMode:!this.state.isGroupMode})
    console.log(this.state.isGroupMode);
  };


  render() {
    const { t } = this.props;

    return (
      <ScrollView style={Styles.fullWidth}>

        <View style={Styles.ContainerPadding42}>
          <View >
            <Text style={Styles.blueTopTitle90}>
              File Name
            </Text>
            <Input placeholder="Name"
              style={Styles.inputNormalTop0} />

            <Text style={Styles.blueTopTitle20}>
              Total number of parties (individuals and/or business) to inlcude on this document
            </Text>
            <ToggleSwitch
                isOn={this.state.isGroupMode}
                onColor='#304FFE'
                offColor='grey'
                label='Group Mode'
                labelStyle={{color: '#0048A7', fontFamily: 'Roboto',fontWeight: 'normal',fontSize: 17,}}
                size='small'
                onToggle={ () => this.changeMode()  }
            />
            <Picker
              style={Styles.pickerNormal}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="1(to) 12" value="key0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />

            </Picker>

          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("FlipDocBusinessFlowPage")}
          style={Styles.btnOrangeSave}>
          <Text style={Styles.txtOrangeSave}>
            NEXT
          </Text>
        </Button>
      </ScrollView>
    );
  }
}
export default withNamespaces()(EasySignaturePage2);
