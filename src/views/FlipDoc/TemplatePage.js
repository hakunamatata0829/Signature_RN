import React from "react";
import { View, Image } from "react-native";
import { withNamespaces } from "react-i18next";
import { Icon, Button, Text } from 'native-base';
import Styles from '../../themes/styles';

class AccountPage extends React.Component {
  state = {
    visible: true,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Flip Doc",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (
        <Icon name={'notifications'}  style={Styles.headerRightIcon} />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;

    return (
      <View style={Styles.fullView}>
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
            onPress={() => this.props.navigation.navigate("FlipDocUploadFilePage")}
          >
          <Icon type='Foundation' name='page-add' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            NEW DOC
          </Text>
          <Text></Text>
        </Button>
        <Button iconLeft
            style={{alignSelf: 'center', width:144, height:40,
                    backgroundColor:'#2372D8', marginTop:15}}
            onPress={() => this.props.navigation.navigate("FlipDocUploadFilePage")}
          >
          <Icon type='MaterialIcons' name='cloud-upload' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            UPLOAD
          </Text>
          <Text></Text>
        </Button>

        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("FlipDocUploadFilePage")}
        >
          <Icon type='MaterialCommunityIcons' name='format-text' style={{color:'#fff', alignSelf: 'flex-start', borderWidth:1, borderColor:'#fff'}} />
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            TEMPLATE
          </Text>
          <Text></Text>
        </Button>
        <Button iconLeft
          style={{alignSelf: 'center', width:144, height:40,
                  backgroundColor:'#2372D8', marginTop:15}}
          onPress={() => this.props.navigation.navigate("FlipDocUploadFilePage")}
        >
          <Icon type='FontAwesome' name='folder' style={{color:'#fff', alignSelf: 'flex-start'}} size={21}/>
          <Text style={{fontFamily: 'Roboto',fontSize: 14,letterSpacing: 0.25, }}>
            MY FOLDERS
          </Text>
          <Text></Text>
        </Button>
      </View>
      </View>
    );
  }
}
export default withNamespaces()(AccountPage);
