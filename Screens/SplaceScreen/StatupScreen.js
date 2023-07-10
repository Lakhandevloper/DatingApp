
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image} from 'react-native';
import LoginButton from '../../Componets/LoginButton';

export default class Statup extends React.Component{
 constructor(props){
  super(props)
  this.state={

  }
 }
 render(){
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{flex:1,alignItems:'center',justifyContent:'center'}}
           source={require('../../assets/natalia-sobolivska-b1__P6lKE7Y-unsplash.png')}
        >
          <View style={{alignItems:'center',justifyContent:'space-between',height:'80%',width:'100%',alignSelf:'center'}}>
            <View style={{alignItems:'center'}}>
              <Image style={{width:151,height:148}}
                source={require('../../assets/Heart.png')}
              />
              <Text style={{fontSize:25,fontWeight:'700',color:'#5A5A5A'}}>KikDating</Text>
            </View>
            <View style={{width:'70%'}}>
              <LoginButton title='Number' onPress={()=>this.props.navigation.navigate('PhoneNumber')}/>
              <LoginButton title='Facebook'/>
              <LoginButton title='Google'/>
            </View>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
 }
}