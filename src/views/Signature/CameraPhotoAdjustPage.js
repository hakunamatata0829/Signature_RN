import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { withNamespaces } from "react-i18next";
import { Text, Button, Icon } from 'native-base';
import Styles from '../../themes/styles';
import ImagePicker from 'react-native-image-crop-picker';

class CameraPhotoAdjustPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      percentContrast: 50,
      cropImgPath:'',
      imagePath:''
    };
    this.croppingImage = this.croppingImage.bind(this);
  }
  upContrast() {
    if (this.state.percentContrast < 100) {
      this.setState({
        percentContrast: this.state.percentContrast + 1
      });
    }
  }
  downContrast() {
    if (this.state.percentContrast > 0) {
      this.setState({
        percentContrast: this.state.percentContrast - 1
      });
    }
  }



  croppingImage(img) {
    ImagePicker.openCropper({
      path: img,
      width: 300,
      height: 200
    }).then(image => {
      console.log(image);
      this.setState({cropImgPath:image.path})
    });
  }

  componentDidMount(){
    this.setState({imagePath:this.props.navigation.getParam("captureImage")});
    this.croppingImage(this.props.navigation.getParam("captureImage"))
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Signature",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (<
        Icon name={'notifications'}
        style={Styles.headerRightIcon}
      />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name={'menu'} style={Styles.headerLeftIcon} size={25} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { t } = this.props;
    console.log("propsvalue_; ",this.props.navigation.getParam("captureImage"))

    //

    return (

      <ScrollView style={{ width: '100%' }}>
        <Text style={Styles.blueTopTitle}>
          Capture using a camera
        </Text>
        <View>

          <View style={{ alignItems: 'center' }} >
            <View style={Styles.viewCenterRange287_174} >

              <Image source={{ uri: this.state.imagePath }}
                style={Styles.capturedCameraImage} />
            </View>

            <View style={Styles.middleAdjustView}>
              <Text style={Styles.middleAdjustText}>
                Adjustment
              </Text>
              <Text onPress={() => this.downContrast()}>
                <Icon type={'Entypo'} name={'circle-with-minus'} style={Styles.adjustControlIcon} />
              </Text>
              <Text style={Styles.middleBrightnessText}>
                {this.state.percentContrast} %
              </Text>
              <Text onPress={() => this.upContrast()}>
                <Icon type={'Entypo'} name={'circle-with-plus'} style={Styles.adjustControlIcon} />
              </Text>
            </View>

            <View style={Styles.viewCenterRange287_174} >

              <Image source={{ uri: this.state.cropImgPath }}
                style={Styles.capturedCameraImage} />
            </View>

          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("EasySignatureSelectPage")}
          style={Styles.saveBtn96}>
          <Text style={Styles.txtOrangeSave}>
            SAVE
          </Text>
        </Button>

      </ScrollView>
    );
  }
}
export default withNamespaces()(CameraPhotoAdjustPage);
