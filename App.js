import React from 'react';
//screens

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Onboard from './screens/onboard';
import Onboard1 from './screens/onboard1';
import Onboard2 from './screens/onboard2';
import Mobilenumber from './screens/mobilenumber';
import Otpnumber from './screens/otpnumber';
import Otpverify from './screens/otpverify';
import Page1 from './screens/page1';
import Page2 from './screens/page2';



//react stack
import RootStack from './navigators/RootStack';

export default function App(){
  return(
    <RootStack/>
  );
}
