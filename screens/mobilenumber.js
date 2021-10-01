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
const {brand, darkLight} = colors;



const Mobilenumber = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg style={{height:600,  }} resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                
                <Formik

                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<StyledFormArea>
                            <StyledButton style={{top:100,height:40, width:300, }} onPress ={() => navigation.navigate("Otpverify")}>
                                <ButtonText>
                                    Mobile  Number
                                </ButtonText>
                            </StyledButton>
                            <br/>
                            <ExtraView style={{top:100}}>
                                <ExtraText>Register / Login as Therapists</ExtraText>
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
export default Mobilenumber;