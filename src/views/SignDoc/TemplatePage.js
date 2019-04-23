import React from "react";
import { View, Image } from "react-native";
import { withNamespaces } from "react-i18next";
import { Icon, Button, Text } from 'native-base';

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
      <View  style={{
        width:'100%',
        height:'100%'
      }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >

          <Button iconLeft
            style={{alignSelf: 'center', width:144, height:40,
                    backgroundColor:'#2372D8', marginTop:15}}
            onPress={() => this.props.navigation.navigate("UploadFilePage")}
          >
          <Icon type='MaterialIcons' name='cloud-upload' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            TEMPLATE
          </Text>
          <Text></Text>
        </Button>
        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("UploadFilePage")}
        >
          <Icon type='FontAwesome' name='folder' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            MY FOLDERS
          </Text>
          <Text></Text>
        </Button>
        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("UploadFilePage")}
        >
          <Icon type='FontAwesome5' name='mask' style={{color:'#fff', alignSelf: 'flex-start'}} size={20}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            USE MASK
          </Text>
          <Text></Text>
        </Button>

      </View>
      </View>
    );
  }
}
export default withNamespaces()(AccountPage);
