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



const Otpnumber = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                
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
                                placeholder = "Enter your number"
                                border-color = {brand}
                                placeholderTextColor = {tertiary}
                                onChangeText = {handleChange('number')}
                                onBlur = {handleBlur('number')}
                                value = {values.number}
                                keyboardType = "phone-pad"
                            />

                            <StyledButton style={{width:250, }} onPress = {handleSubmit}>
                                <ButtonText>
                                    Submit
                                </ButtonText>
                            </StyledButton>
                            </Cards>

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
export default Otpnumber;