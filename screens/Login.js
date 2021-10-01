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
    TextLinkContent

} from './../components/styles'
import { View } from 'react-native' 

// Colors
const {brand, darkLight} = colors;



const Login = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg style={{top:-200}} resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Mobilenumber");
                    }}
                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<StyledFormArea>
                            <MyTextInput
                                label = "Email Address"
                                placeholder = "enter mail"
                                placeholderTextColor = {darkLight}
                                onChangeText = {handleChange('email')}
                                onBlur = {handleBlur('email')}
                                value = {values.email}
                                keyboardType = "email-address"
                            />

                            <MyTextInput
                                label = "Password"
                                placeholder = "*********"
                                placeholderTextColor = {darkLight}
                                onChangeText = {handleChange('password')}
                                onBlur = {handleBlur('password')}
                                value = {values.password}
                                secureTextEntry = {true}
                            />

                            <StyledButton onPress = {handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>

                            <ExtraView>
                                <ExtraText onPress ={() => navigation.navigate("Signup")}>Not yet member? SignUP</ExtraText>
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
export default Login;