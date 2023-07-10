
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image, TouchableOpacity, TextInput} from 'react-native';
import LoginButton from '../../Componets/LoginButton';

export default class PhoneNumber extends React.Component{
 constructor(props){
  super(props)
  this.state={

  }
 }
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
            <View style={{width:'80%',alignItems:'center',}}>
              <Text style={{fontSize:20,fontWeight:'600',lineHeight:24,marginBottom:21,color:'#F76A7B'}} >My Phone No.</Text>
              <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{width:72,height:44,borderWidth:1,borderColor:'#AAAAAA',borderRadius:13,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}
                    onPress={()=>this.props.navigation.navigate('PhoneVerification')} >
                    <Text style={{fontSize:15,fontWeight:'600',lineHeight:24}}>+91</Text>
                    <Image style={{width:13,height:11}}
                      source={require('../../assets/Arrow.png')}
                    />
                </TouchableOpacity>
                <TextInput style={{width:'75%',padding:5,paddingLeft:15,height:44,borderRadius:13,borderWidth:1,borderColor:'#AAAAAA'}}
                  placeholder='Phone no.'
                />
              </View>
            </View>
            <View style={{width:'100%',height:293}}>
                <Image style={{width:'100%',height:'100%'}} resizeMode='contain'
                   source={require('../../assets/CupleWithCycle.png')}
                />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
 }
}