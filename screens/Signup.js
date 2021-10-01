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



const Signup = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                
                <Formik
                    initialValues={{email:'', password:'',username:'', number:'' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Login");
                    }}
                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<StyledFormArea>
                            <MyTextInput
                                label = "Username"
                                placeholder = "enter username"
                                placeholderTextColor = {darkLight}
                                onChangeText = {handleChange('username')}
                                onBlur = {handleBlur('username')}
                                value = {values.username}
                                keyboardType = "text"
                            />

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

                            <MyTextInput
                                label = "Whatsapp number"
                                placeholder = "enter whatsapp number"
                                placeholderTextColor = {darkLight}
                                onChangeText = {handleChange('number')}
                                onBlur = {handleBlur('number')}
                                value = {values.number}
                                keyboardType = "phone-pad"
                            />

                            <StyledButton onPress = {handleSubmit}>
                                <ButtonText>
                                    Sign UP
                                </ButtonText>
                            </StyledButton>

                            <ExtraView>
                                <ExtraText>Already a member? SignIn</ExtraText>
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
export default Signup;