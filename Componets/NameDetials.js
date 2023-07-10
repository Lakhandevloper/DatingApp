
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image,TouchableOpacity, TextInput} from 'react-native';

export default class NameDetials extends React.Component{
 constructor(props){
  super(props)
  this.state={
    name:''
  }
 }
 render(){
    // console.log('this.props.title',this.props.title)
  return (
    <View style={{width:this.props.deviceWidth,height:'80%',alignSelf:'flex-end',justifyContent:'space-between',marginBottom:10,alignItems:'center'}}>
        <View style={{width:'80%',alignItems:'center'}}>
            <Text style={{fontSize:24,lineHeight:24,fontWeight:'600',color:'#F76A7B'}}>My Name is</Text>
            <TextInput style={{width:'100%',paddingLeft:20,height:48,borderRadius:18.5,marginTop:35,fontSize:17,lineHeight:24,color:"#1B1B1B",borderWidth:2,borderColor:'#D5D5D5'}}
              placeholder='Name'
              onChangeText={(text)=>this.setState({name:text})}
            />
            <TouchableOpacity style={{height:45,width:'100%',borderRadius:35,backgroundColor:'#5363DD',marginTop:35,alignItems:'center',justifyContent:'center'}} onPress={()=>this.props.onPress(this.state.name)} >
                <Text style={{fontSize:16,lineHeight:19.5,fontWeight:'700',color:'#FFFFFF'}}>Continue</Text>
            </TouchableOpacity>
        </View>
        <Image style={{width:'90%',height:329}}
          source={require('../assets/CouplewithTour.png')}
        />
    </View>
   
  );
 }
}