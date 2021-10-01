import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import  Constants  from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;
//colors

export const colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#B5EAE0',
    blue: '#07426A',
}


const{ primary,secondary,tertiary,darkLight,brand,blue} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 3;
    width: 100%;
    align-items: center;
`;
export const PageLogo = styled.Image`
    width: 312px; 
    height: 102px;
    top: -360px;
    left: 10px;
`;

export const Roundbg = styled.Image`
    width: 376px; 
    height: 438px;
    top: -230px;
    align: auto;
`;

export const PageTitle = styled.Text`
    position: relative;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${blue};
    top: -285px;
`;

export const SubTitle = styled.TouchableOpacity`
    font-size: 12px;
    margin-bottom: relative;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    top: 20px;
    margin: auto;

`;


export const StyledFormArea = styled.View`
    width: 90%;
    bottom: 300px;


`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size:13px;
    text-align: left;
`;

export const StyledButton = styled.TouchableOpacity`
    width: 100px;
    padding: 15px;
    background-color: ${blue};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 50px;
    margin: auto;

`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;


export const ExtraView= styled.View`
    justify-content: center;
    flex-directions: row;
    align-itmes: 10px;
`;

export const ExtraText = styled.TouchableOpacity`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
    margin: auto;
`;
export const small = styled.View`
    height:120;
    top:120;
    width:"80%";
    background-color: ${brand};
    borderRadius:15;
    elevation:12;
    shadowColor: '#000';
    shadowOffset: { width: 0, height: 3 };
    shadowOpacity: 0.5;
    shadowRadius: 5;
`;

export const Cards = styled.View`
    height:150;
    width:"80%";
    background-color: ${secondary};
    borderRadius:15;
    elevation:10;
    shadowColor: '#000';
    shadowOffset: { width: 0, height: 3 };
    shadowOpacity: 0.5;
    shadowRadius: 5;
`;





