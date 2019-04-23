// themes/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  headerStyle: {
    backgroundColor: '#2372D8'
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

  headerRightIcon: {
    color: '#fff',
    paddingRight: 18
  },

  bannerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 23,
    letterSpacing: 0.25,
    color: '#0048A7',
    marginTop: 16,
    marginBottom: 23,
  },

  btnOrangeRound: {
    marginTop: 21,
    color: '#fff',
    marginBottom: 13,
    backgroundColor: '#FF5722',
    borderRadius: 50,
    padding: 10,
    fontSize: 15
  },

  btnOrangeRoundPen: {
    color: '#FF5722',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#FF5722',
    borderWidth: 2,
    padding: 9,
    paddingLeft: 12,
    paddingTop: 12,
    fontSize: 15
  },

  textMedium: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#005074',
  },

  textMediumCenter: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: '#005074',
    marginBottom: 26,
    textAlign: 'center',

  },

  viewCenterFullRange: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewCenterRange40: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },

  viewCenterRange144: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 144,
    height: 120,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 6,
    borderColor: '#2372D8',
  },

  // css of SelectEasySignaturePage
  touchable_view_first: {
    flex: 0,
    justifyContent: "center",
    marginTop: 74,
    width: 278,
    height: 68,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 6,
    borderColor: "#005074",
  },
  touchable_view_others: {
    flex: 0,
    justifyContent: "center",
    marginTop: 20,
    width: 278,
    height: 68,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 6,
    borderColor: "#005074",
  },
  left_text: {
    width: 40,
    height: 40,
    padding: 7,
    backgroundColor: "#2372D8",
    color: "#fff",
    textAlign: "center",
    borderRadius: 50,
    fontSize: 20,
  },
  left_icon: {
    width: 40,
    height: 40,
    padding: 7,
    backgroundColor: "#2372D8",
    color: "#fff",
    textAlign: "center",
    borderRadius: 50,
    fontSize: 20,
  },
  body_default: {
    borderBottomColor: "white",
  },
  body_title: {
    fontSize: 17,
    color: "#0048A7",
  },
  body_text: {
    fontSize: 11,
    color: "#0048A7",
  },
  ///signaturePage3
  blueBorderedView: {
    margin: 12,
    marginTop: 96,
    borderWidth: 1,
    height: 96,
    borderColor: '#2372D8',
    borderRadius: 3,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },

  pencilView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderWidth: 0,
    borderRadius: 6,
    borderColor: '#2372D8',
  },

  //CameraPage
  blueTopTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 23,
    letterSpacing: 0.25,
    color: '#0048A7',
    marginTop: 22,
    marginBottom: 23,
    paddingHorizontal: 27
  },

  viewCenterRange116_23: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 25,
    width: 116,
    height: 23,
  },

  viewCenterRange116: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: 116,
    height: 96,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 6,
    borderColor: '#2372D8',
  },

  iconBlueRound: {
    marginTop: 34,
    color: '#0048A7',
    marginBottom: 34,
    fontSize: 30,
  },

  labelTextSize11: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 16,
    color: '#0048A7',
  },

  //SignatureAcceptPage
  blueBorderedAcceptView: {
    margin: 12,
    marginTop: 96,
    borderWidth: 1,
    height: 96,
    borderColor: '#2372D8',
    borderRadius: 3,
    paddingVertical: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viewBetweenSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  iconEarth: {
    color: '#0048A7',
    fontSize: 18,
    paddingRight: 18,
  },

  txtGreen: {
    color: '#149100',
    fontFamily: 'Sarabun',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    marginTop: 15,
  },

  //CertulFormPage
  viewCenterRange76_94: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 0,
    width: 76,
    height: 94,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#DADADA',
  },

  iconBlue: {
    color: '#0048A7',
    backgroundColor: '#fff',
    fontSize: 20,
    borderWidth: 1,
    padding: 1,
    paddingLeft: 4,
    paddingTop: 4,
    borderColor: '#DADADA',
  },

  inputNormal: {
    marginTop: 19,
    borderWidth: 1,
    borderColor: 'rgba(111, 111, 111, 0.5)'
  },
  inputNormalTop0: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: 'rgba(111, 111, 111, 0.5)'
  },

  pickerNormal: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    overflow: 'hidden'
  },

  btnOrangeSave: {
    alignSelf: 'flex-end',
    width: 96, height: 40,
    backgroundColor: '#FF5722',
    marginTop: 56, marginRight: 16, marginBottom: 16
  },

  txtOrangeSave: {
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.25,
    paddingLeft: 30
  },

  textAreaNormal:{
    borderWidth: 1,
    marginTop: 26,
    borderColor: 'rgba(111, 111, 111, 0.5)'
  },

  ContainerPadding42:{
    marginHorizontal: 42,
    marginVertical: 22
  },
  //DrawingOnPadPage
  viewCenterRange236_131: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 42,
    height:150,
    width:'100%',
    borderColor:'#bdc3c7',
    borderWidth:1,
    borderRadius:3
  },
});
