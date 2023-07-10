
import * as React from 'react';
import { View, Text ,SafeAreaView,StyleSheet, ImageBackground,Image, TouchableOpacity, TextInput} from 'react-native';
import LoginButton from '../../Componets/LoginButton';
import OTPTextInput from 'react-native-otp-textinput';
export default class PhoneVerification extends React.Component{
 constructor(props){
  super(props)
  this.state={
    otp:''
  }
  this.otpInput
 }
 clearText = () => {
    this.otpInput.clear();
}

updateOtpText = () => {
    if(this.state.otp.length == 4){
        console.log('length',this.state.otp.length)
        this.props.navigation.navigate('Signup')
    }
    else{
        console.log('pending ',this.state.otp.length)
    }
  };
 render(){
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}
        >
          <View style={{alignItems:'center',justifyContent:'space-between',height:'90%',width:'100%',alignSelf:'center'}}>
            <View style={{alignItems:'center'}}>
              <Image style={{width:101,height:99}}
                source={require('../../assets/Heart.png')}
              />
              <Text style={{fontSize:20,fontWeight:'700',color:'#5A5A5A'}}>KikDating</Text>
            </View>
            <View style={{width:'80%',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600',lineHeight:24,color:'#F76A7B'}} >OTP Verification</Text>
              <Text style={{fontSize:12,fontWeight:'600',lineHeight:24,marginBottom:21,color:'#5A5A5A'}} >Code sent you on your Phone No.</Text>
              <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                <OTPTextInput
                    handleTextChange={e => this.setState({otp:e},()=>this.updateOtpText())}
                    tintColor="#000000"
                    textInputStyle={styles.roundedTextInput}
                    keyboardType="numeric"
                />
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:12,lineHeight:24,fontWeight:'700'}}>Did not get code ?</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:12,color:'#F33B67',fontWeight:'700'}} >Resend</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'100%',height:293}}>
                <Image style={{width:'100%',height:'100%'}} resizeMode='contain'
                   source={require('../../assets/cuple.png')}
                />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
 }
}


const styles = StyleSheet.create({
    
    roundedTextInput: {
      borderWidth: 1,
      width:59,height:59,
      borderRadius:13,
      borderColor:'#AAAAAA',
      alignSelf:'center',
      shadowOffset:0
    },
    
  });
  