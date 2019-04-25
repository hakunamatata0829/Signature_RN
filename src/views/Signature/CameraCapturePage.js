import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  CameraRoll
} from 'react-native';

import { Container, Icon, Text, View } from 'native-base';

import { RNCamera } from 'react-native-camera';
import Styles from '../../themes/styles';

const PendingView = () => (
  <View style={styles.pendingDiv} >
    <Text>Waiting...</Text>
  </View>
);

export default class CameraCapturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signCameraImagePath: "ss",
      signDrawImagePath: "",
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({
      captureImage: this.state.signCameraImagePath,
    });
  }


  setPath = (path) =>{
    this.setState({
      signCameraImagePath: path,
    });
    this.props.navigation.setParams({
      captureImage: path,
    });

  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
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
        <TouchableOpacity onPress={() => navigation.navigate("CameraPhotoAdjustPage", { captureImage: params.captureImage })}>
          <Icon type={'Ionicons'} name={'ios-arrow-back'} style={{ color: '#fff', paddingLeft: 18 }}  />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <Container>

        <View style={styles.container}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View >
                  <View  >
                    <View style={Styles.greenLineView}>
                    </View>
                    <View style={Styles.takePhotoButtonView}>
                      <TouchableOpacity onPress={() => this.takePicture(camera)}
                        style={styles.capture}>
                         <Icon type={'FontAwesome'} name={'circle'} style={{ color: '#fff', fontSize:30 }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          </RNCamera>
        </View>
      </Container>
    );
  }

  takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);

    //  eslint-disable-next-line
    console.log(data.uri);
    alert('Photo captured!');
    this.setPath(data.uri);
    this.setState({ signCameraImagePath: data.uri });

    CameraRoll.saveToCameraRoll(data.uri);
  };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    // width: 40,
    // height: 40
  },

  pendingDiv:{
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
