import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Banner } from "react-native-paper";
import { withNamespaces } from "react-i18next";
import {
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Body
} from "native-base";

import styles from "../../themes/styles";

class EasySignatureSelectPage extends React.Component {
  state = {
    visible: true,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Easy Signature",
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor: "#fff",
      headerRight: (<
        Icon name={'notifications'}
        style={ styles.headerRightIcon }
      />
      ),
    };
  };

  changeLng = () => {
    this.props.i18n.changeLanguage("pt-BR");
  };

  render() {
    const { t } = this.props;

    return (
      <View style={styles.fullView} >
        <Banner
          visible={this.state.visible}
          actions={[
            {
              label: "Got it",
              onPress: () => this.setState({ visible: false }),
            },
          ]}
        >
          <Text style={styles.bannerText}>
            Select one of the signature type and you can change whatever you need
          </Text>
        </Banner>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity >
            <View style={styles.touchable_view_first}>
              <List>
                <ListItem thumbnail
                  onPress={() => this.props.navigation.navigate("EasySignaturePage2")}>
                  <Left>
                    <Text style={styles.left_text}>A</Text>
                  </Left>
                  <Body style={styles.body_default}>
                    <Text style={styles.body_title}>Typing your name</Text>
                    <Text style={styles.body_text}>Type your name and choose a font</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity >
            <View style={styles.touchable_view_others}>
              <List>
                <ListItem thumbnail
                  onPress={() => this.props.navigation.navigate("DrawingOnPadPage")}>
                  <Left>
                    <Icon type="MaterialIcons" name="brush" style={styles.left_icon} />
                  </Left>
                  <Body style={styles.body_default}>
                    <Text style={styles.body_title}>Drawing on a pad</Text>
                    <Text style={styles.body_text}>Draw your signature on a pad</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity >
            <View style={styles.touchable_view_others}>
              <List>
                <ListItem thumbnail onPress={() => this.props.navigation.navigate("CameraPage")}>
                  <Left>
                    <Icon type="FontAwesome" name="camera" style={styles.left_icon} />
                  </Left>
                  <Body style={styles.body_default}>
                    <Text style={styles.body_title}>Capture using a camera</Text>
                    <Text style={styles.body_text}>Take signature's picture using a camera</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <View style={styles.touchable_view_others}>
              <List>
                <ListItem thumbnail onPress={() => this.props.navigation.navigate("UploadSignaturePage")}>
                  <Left>
                    <Icon type="FontAwesome5" name="cloud-upload-alt" style={styles.left_icon} />
                  </Left>
                  <Body style={styles.body_default}>
                    <Text style={styles.body_title}>Upload a file</Text>
                    <Text style={styles.body_text}>Upload an image file with your signature</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNamespaces()(EasySignatureSelectPage);
