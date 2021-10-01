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



const Page1 = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <StatusBar style='dark'/>
                <Roundbg resizeMode="cover" source={require('./../assets/img/roundbg.png')}/>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>

                
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{top: -450, width: 300}}>
                            <PageTitle style={{top: 90}}> Jitendra Raut</PageTitle>
                            <SubTitle style={{top: 45}}> +91 9988776655</SubTitle>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{top: -400,width: 120,right: 70 }}>
                            <StyledButton style={{shadowRadius: 5,shadowOpacity: 0.5,shadowOffset: { width: 0, height: 3 }, shadowColor: '#000',backgroundColor: '#B5EAE0',top: -23, width: 100,height: 30, right: 0}} onPress = {handleSubmit}>
                                <ButtonText style={{color: '#000','font-weight': 'bold'}}>
                                    Bookings
                                </ButtonText>
                            </StyledButton>
                            <PageTitle style={{top: -30, 'font-size': '50px'}}>
                                    23
                            </PageTitle>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{top: -550, width: 120,left: 70 }}>
                            <StyledButton style={{shadowRadius: 5,shadowOpacity: 0.5,shadowOffset: { width: 0, height: 3 },shadowColor: '#000',backgroundColor: '#B5EAE0',top: -9, width: 100,height: 30, right: 0}} onPress = {handleSubmit}>
                                <ButtonText style={{color: '#000','font-weight': 'bold'}}>
                                    Attendance
                                </ButtonText>
                            </StyledButton>
                            <StyledButton style={{shadowRadius: 5,shadowOpacity: 0.5,shadowOffset: { width: 0, height: 3 },shadowColor: '#000',backgroundColor: '#90ee90',top: 0, width: 100,height: 65, right: 0, 'border-radius':'15px'}} onPress ={() => navigation.navigate("Page2")}>
                                <ButtonText style={{color: '#000','font-weight': 'bold'}}>
                                    Start
                                </ButtonText>
                            </StyledButton>
                        </Cards>)
                    }
                </Formik>
                <br/>
                <br/>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{backgroundColor: '#B5EAE0',top: -510, width: 80,height: 80, right: 100 }}>
                            <StyledFormArea>
                            </StyledFormArea>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{backgroundColor: '#B5EAE0',top: -590, width: 80,height: 80, right: 0  }}>
                            <StyledFormArea>
                            </StyledFormArea>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{backgroundColor: '#B5EAE0',top: -670, width: 80,height: 80, left: 100 }}>
                            <StyledFormArea>
                            </StyledFormArea>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{backgroundColor: '#B5EAE0',top: -640, width: 80,height: 80, right: 40  }}>
                            <StyledFormArea>
                            </StyledFormArea>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (<Cards style={{backgroundColor: '#B5EAE0',top: -720, width: 80,height: 80, left: 60}}>
                            <StyledFormArea>
                            </StyledFormArea>
                        </Cards>)
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (
                            <StyledFormArea>
                            <StyledButton style={{'border-radius': '30px',top: -400, width: 120,height: 50, left: 80}} onPress = {handleSubmit}>
                                <ButtonText>
                                    Profile
                                </ButtonText>
                            </StyledButton>
                            </StyledFormArea>
                            )
                    }
                </Formik>
                <Formik>{({handleChange, handleBlur, handleSubmit,values}) => 
                        (
                            <StyledFormArea>
                            <StyledButton style={{'border-radius': '30px', top: -450, width: 120,height: 50, right: 70}} onPress = {handleSubmit}>
                                <ButtonText>
                                    Home
                                </ButtonText>
                            </StyledButton>
                            </StyledFormArea>
                            )
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
export default Page1;