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
      headerTitle: "Contrato.doc",
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: '#fff',
      headerRight: (
        <View style={Styles.iconContainer}>
          <Icon type={'MaterialCommunityIcons'} name={'message-text-outline'} style={Styles.headerRightIcon} />
          <Icon type={'AntDesign'} name={'adduser'} style={Styles.headerRightIcon} />
          <Icon type={'Feather'} name={'more-horizontal'} style={Styles.headerRightIcon} />
        </View>
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
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#FF5722' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon type='MaterialCommunityIcons' name="pencil" />
              <Button style={{ backgroundColor: '#34A34F' }}
                onPress={() => this.props.navigation.navigate("FlipDocContratoPdfEditPage")}
              >
                <Icon type='MaterialCommunityIcons' name="pencil" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon type='MaterialIcons' name="save" />
              </Button>
              <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon type='MaterialIcons' name="delete" />
              </Button>
            </Fab>
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
