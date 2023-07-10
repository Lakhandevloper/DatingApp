
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image,TouchableOpacity} from 'react-native';

export default class GenderDeatils extends React.Component{
 constructor(props){
  super(props)
  this.state={

  }
 }
 render(){
    // console.log('this.props.title',this.props.title)
  return (
    <View style={{width:this.props.deviceWidth,height:'80%',alignSelf:'flex-end',justifyContent:'space-between',marginBottom:10,alignItems:'center'}}>
        <View style={{width:'80%',alignItems:'center'}}>
        <Text style={{fontSize:25,lineHeight:24,fontWeight:'600',color:'#F76A7B'}}>Ready to get Virgified !</Text>
        
        <Text style={{fontSize:24,lineHeight:24,fontWeight:'600',color:'#F76A7B',marginTop:57}}>I'm a</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:27}}>
            <TouchableOpacity onPress={()=>this.props.onPress('Male')}>
                <Text style={{fontSize:17,fontWeight:'600',lineHeight:24,color:'#1B1B1B'}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.onPress('Female')}>
                <Text style={{fontSize:17,fontWeight:'600',lineHeight:24,color:'#1B1B1B'}}>Female</Text>
            </TouchableOpacity>
        </View>
        </View>
        <Image style={{width:'90%',height:329}}
          source={require('../assets/cupleWithRose.png')}
        />
    </View>
   
  );
 }
}