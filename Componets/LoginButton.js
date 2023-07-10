
import * as React from 'react';
import { View, Text ,SafeAreaView, ImageBackground,Image,TouchableOpacity} from 'react-native';

export default class LoginButton extends React.Component{
 constructor(props){
  super(props)
  this.state={

  }
 }
 render(){
    // console.log('this.props.title',this.props.title)
  return (
    <View>
        {this.props.title =="Number"?
        <TouchableOpacity style={{width:'100%',borderRadius:5,height:43,marginTop:16,backgroundColor:'#FFFFFF',flexDirection:'row',alignItems:'center'}}
           onPress={()=>this.props.onPress()}
           >
    
        <Image style={{width:16,height:26,marginLeft:15}}
           source={require('../assets/Mobile.png')}
        />
        <Text style={{fontSize:14,lineHeight:24,fontWeight:'700',color:'#000000',marginLeft:20}}>Continue With Phone No.</Text>
       </TouchableOpacity>
        :
        
        <TouchableOpacity style={{width:'100%',borderRadius:5,height:43,marginTop:16,flexDirection:'row',alignItems:'center'}}>
            
        <Image style={{width:'100%',height:43}}
           source={this.props.title =='Facebook'? require('../assets/FbLogin.png'):require('../assets/GoogleSing.png')}
        />
        
       </TouchableOpacity>
        }
    </View>
   
  );
 }
}