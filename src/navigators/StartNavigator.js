import { createStackNavigator } from "react-navigation";

import Home from "@views/Home";
import Profile from "@views/Profile";
import Login from "@views/auth/Login";
import AccountPage from "@views/SignDoc/AccountPage";
import TemplatePage from "@views/SignDoc/TemplatePage";
import UploadFilePage from "@views/SignDoc/UploadFilePage";
import DocRevisionPage from "@views/SignDoc/DocRevisionPage";
import DefineSingerPage from "@views/SignDoc/DefineSingerPage";
import DefineSignerEachPage from "@views/SignDoc/DefineSignerEachPage";
import EmailMsgPage from "@views/SignDoc/EmailMsgPage";
import SendMsgPage from "@views/SignDoc/SendMsgPage";
import PaymentFailedPage from "@views/SignDoc/PaymentFailedPage";
import PaymentSummaryPage from "@views/SignDoc/PaymentSummaryPage";

//Signature
import SecurityOptionPage from "@views/Signature/SecurityOptionPage";
import EasySignatureSelectPage from "@views/Signature/EasySignatureSelectPage";
import EasySignaturePage2 from "@views/Signature/EasySignaturePage2";
import EasySignaturePage3 from "@views/Signature/EasySignaturePage3";
import DrawingOnPadPage from "@views/Signature/DrawingOnPadPage";
import DrawingSignPage from "@views/Signature/DrawingSignPage";
import CameraPage from "@views/Signature/CameraPage";
import CameraCapturePage from "@views/Signature/CameraCapturePage";
import CameraPhotoAdjustPage from "@views/Signature/CameraPhotoAdjustPage";
import UploadSignaturePage from "@views/Signature/UploadSignaturePage";
import CertulIdScanPage from "@views/Signature/CertulIdScanPage";
import CertulFormPage from "@views/Signature/CertulFormPage";
import SignatureAcceptPage from "@views/Signature/SignatureAcceptPage";


const StartNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Login: { screen: Login },
  AccountPage: { screen: AccountPage },
  TemplatePage: { screen: TemplatePage },
  UploadFilePage: { screen: UploadFilePage },
  DocRevisionPage: { screen: DocRevisionPage },
  PaymentSummaryPage: { screen: PaymentSummaryPage },
  PaymentFailedPage: { screen: PaymentFailedPage },
  SendMsgPage: { screen: SendMsgPage },
  EmailMsgPage: { screen: EmailMsgPage },
  DefineSingerPage: { screen: DefineSingerPage },
  DefineSignerEachPage: { screen: DefineSignerEachPage },

  SecurityOptionPage: { screen: SecurityOptionPage },
  EasySignatureSelectPage: { screen: EasySignatureSelectPage },
  EasySignaturePage2: { screen: EasySignaturePage2 },
  EasySignaturePage3: { screen: EasySignaturePage3 },
  DrawingOnPadPage: { screen: DrawingOnPadPage },
  DrawingSignPage: { screen: DrawingSignPage },
  CameraPage: { screen: CameraPage },
  CameraCapturePage: { screen: CameraCapturePage },
  CameraPhotoAdjustPage: { screen: CameraPhotoAdjustPage },
  UploadSignaturePage: { screen: UploadSignaturePage },
  CertulIdScanPage: { screen: CertulIdScanPage },
  CertulFormPage: { screen: CertulFormPage },
  SignatureAcceptPage: { screen: SignatureAcceptPage },


});

export default StartNavigator;
