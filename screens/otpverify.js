import { StatusBar } from 'expo-status-bar';
import React from 'react';


//formik
import { Formik } from 'formik';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Roundbg,
    SubTitle,
    StyledFormArea,
    StyledInputLabel,
    StyledTextInput,
    colors,
    StyledButton,
    ButtonText,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Cards

} from './../components/styles'
import { View } from 'react-native' 

// Colors
const {brand, darkLight, tertiary} = colors;



const Otpverify = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                <PageTitle style={{top:-320, }}>Enter Code</PageTitle>
                <ExtraView style={{top:-330, }}>
                    <SubTitle>We have sent you an sms on --- with code</SubTitle>
                </ExtraView>
                
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (
                            <StyledFormArea>
                            <Cards>
                            <br/>
                            <MyTextInput
                                placeholder = "*********"
                                placeholderTextColor = {darkLight}
                                onChangeText = {handleChange('password')}
                                onBlur = {handleBlur('password')}
                                value = {values.password}
                                secureTextEntry = {true}
                            />

                            <StyledButton style={{width:250, }} onPress ={() => navigation.navigate("Onboard")}>
                                <ButtonText>
                                    Submit
                                </ButtonText>
                            </StyledButton>
                            </Cards>
                            <ExtraView>
                                <SubTitle>Did not receive code</SubTitle>
                            </ExtraView>
                            <ExtraView style={{top:30}}>
                                <ExtraText onPress ={() => navigation.navigate("Otpnumber")}>Re-send</ExtraText>
                            </ExtraView>

                        </StyledFormArea>)
                    }

                </Formik>
                
            </InnerContainer>
        </StyledContainer>
    );
}


const MyTextInput = ({label,icon, ...props}) => {
    return(
        <View>
           <StyledInputLabel>{label}</StyledInputLabel>
           <StyledTextInput {...props}/> 
        </View>
    )
}
export default Otpverify;