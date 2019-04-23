import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { ButtonAction } from "@themes";
import { withNamespaces } from "react-i18next";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{t("Home")}</Text>
        <Button
          mode="contained"
          dark={true}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          Go to Profile screen
        </Button>
        <Button
          mode="contained"
          dark={true}
          onPress={() => this.props.navigation.navigate("AccountPage")}
        >
          Go to Sign Doc screen
        </Button>
        <ButtonAction onPress={() => this.props.navigation.navigate("Login")}>
          Go to Login screen
        </ButtonAction>
        <ButtonAction onPress={() => this.changeLng()}>Change Language</ButtonAction>
        <Button
          icon="folder"
          mode="contained"
          dark={true}
          style={{color:'#fff',backgroundColor:'#2372D8', width:140, height:40, marginTop:17}}
          onPress={() => this.props.navigation.navigate("SecurityOptionPage")}
        >
          Certul Step
        </Button>
        <Button
          icon="folder"
          mode="contained"
          dark={true}
          style={{color:'#fff',backgroundColor:'#2372D8', width:140, height:40, marginTop:17}}
          onPress={() => this.props.navigation.navigate("CameraPage")}
        >
          TEST
        </Button>
      </View>
    );
  }
}
export default withNamespaces()(Home);
