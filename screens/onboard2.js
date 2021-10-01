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



const Onboard2 = ({navigation}) => {
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
                    >{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<StyledFormArea style={{
                            margin: 700
                            }} >
                            <PageTitle style={{ top: -200}}>Free Resources</PageTitle>
                            <br/>
                            <SubTitle style={{ top: -200}}>Find all the free resources</SubTitle>  
                            <StyledButton style={{width:250, height:10 }} onPress ={() => navigation.navigate("Page1")}>
                                <ButtonText>
                                    Next
                                </ButtonText>
                            </StyledButton>
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
export default Onboard2;