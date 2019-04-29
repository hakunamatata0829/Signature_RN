import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text, Icon, iew, Fab, Button } from 'native-base';
import { withNamespaces } from "react-i18next";
import Styles from '../../themes/styles';

import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      selected: undefined,
      active: true,
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "",
      headerStyle: Styles.headerGrayStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerLeft: (
        <View style={Styles.headerLeftIconContainer}>
          <Icon type={'AntDesign'} name={'checkcircleo'} style={{color: '#FF5722', paddingRight: 18}} />
          <Text style={{backgroundColor:'#977DE0',paddingHorizontal:10,paddingVertical:4, borderRadius:50, color:'#fff',marginRight: 18}}>4</Text>
          <Icon type={'FontAwesome5'} name={'envelope-open-text'} style={Styles.headerRightIcon} />
        </View>
      ),
      headerRight: (
          <Icon type={'Feather'} name={'more-horizontal'} style={Styles.headerRightIcon} />
      ),
    };
  };
  render() {
    //const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    const source = require('./sample.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,..."};

    return (
      <View style={Styles.fullView}>
        <View style={styles.container}>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf} />

          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});
