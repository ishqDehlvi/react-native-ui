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



const Welcome = ({navigation}) => {
    return(
        <StyledContainer style={{
            flex: 1,
            backgroundColor: '#B5EAE0',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <InnerContainer>
                <StatusBar style='dark'/>
                <PageLogo style={{ top: 200}} resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values) => {
                        console.log(values);
                        
                    }}
                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<StyledFormArea style={{
                            margin: 700
                            }} >

                            <StyledButton style={{width:250, height:10, }} onPress ={() => navigation.navigate("Login")}>
                                <ButtonText >
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <br/>
                            <StyledButton style={{width:250, height:10}} onPress ={() => navigation.navigate("Signup")}>
                                <ButtonText>
                                    SignUp
                                </ButtonText>
                            </StyledButton>
                            <br/>
                            <ExtraView>
                                <ExtraText onPress ={() => navigation.navigate("Signup")}>Register/ Login as therapists</ExtraText>
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
export default Welcome;