
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image,TouchableOpacity, TextInput} from 'react-native';

export default class DobModule extends React.Component{
 constructor(props){
  super(props)
  this.state={
    DD:'',
    MM:'',
    YYYY:''
  }
 }
 ValidationFun(){
    let dob ={
        DD:this.state.DD,
        MM:this.state.MM,
        YYYY:this.state.YYYY
    }
    this.props.onPress(dob)
 }
 render(){
    // console.log('this.props.title',this.props.title)
  return (
    <View style={{width:this.props.deviceWidth,height:'80%',alignSelf:'flex-end',justifyContent:'space-between',marginBottom:10,alignItems:'center'}}>
        <View style={{width:'80%',alignItems:'center'}}>
            <Text style={{fontSize:24,lineHeight:24,fontWeight:'600',color:'#F76A7B'}}>My Birthday</Text>
            <View style={{flexDirection:'row',marginTop:37,marginBottom:37,justifyContent:'space-between',width:'100%'}}>
            <TextInput style={{width:92,height:48,textAlign:'center',borderRadius:18.5,fontSize:17,lineHeight:24,color:"#1B1B1B",borderWidth:2,borderColor:'#D5D5D5'}}
              placeholder='DD'
              maxLength={2}
              keyboardType='numeric'
              onChangeText={(text)=>this.setState({DD:text})}
              
            />
            <TextInput style={{width:92,height:48,textAlign:'center',borderRadius:18.5,fontSize:17,lineHeight:24,color:"#1B1B1B",borderWidth:2,borderColor:'#D5D5D5'}}
              placeholder='MM'
              maxLength={2}
              keyboardType='numeric'
              onChangeText={(text)=>this.setState({MM:text})}
              
            />
            <TextInput style={{width:121,height:48,textAlign:'center',borderRadius:18.5,fontSize:17,lineHeight:24,color:"#1B1B1B",borderWidth:2,borderColor:'#D5D5D5'}}
              placeholder='YYYY'
              maxLength={4}
              keyboardType='numeric'
              onChangeText={(text)=>this.setState({YYYY:text})}
              
            />
            </View>
            <TouchableOpacity style={{height:45,width:'100%',borderRadius:35,backgroundColor:'#5363DD',alignItems:'center',justifyContent:'center'}} onPress={()=>this.ValidationFun()} >
                <Text style={{fontSize:16,lineHeight:19.5,fontWeight:'700',color:'#FFFFFF'}}>Continue</Text>
            </TouchableOpacity>
        </View>
        <Image style={{width:'90%',height:329}}
          source={require('../assets/coplewithSelfy.png')}
        />
    </View>
   
  );
 }
}