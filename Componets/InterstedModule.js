
import * as React from 'react';
import { View, Text ,SafeAreaView,FlatList, ImageBackground,Image,TouchableOpacity} from 'react-native';
const data =[
    {title:'Pet Lover',id:1},{title:'Travel',id:2},{title:'Reading',id:3},
    {title:'Pet Lover',id:4},{title:'Travel',id:5},{title:'Reading',id:6},
    {title:'Pet Lover',id:7},{title:'Travel',id:8},{title:'Reading',id:9},
    {title:'Pet Lover',id:10},{title:'Travel',id:11},{title:'Reading',id:12},
    {title:'Pet Lover',id:13},{title:'Travel',id:14},{title:'Reading',id:15},
    {title:'Pet Lover',id:16},{title:'Travel',id:17},{title:'Reading',id:18}
]
export default class InterstedModule extends React.Component{
 constructor(props){
  super(props)
  this.state={
    selectedIds:[]
  }
 }
 handleSelectionMultiple = (id) => {
    var selectedIds = [...this.state.selectedIds] // clone state
 
    if(selectedIds.includes(id))
      selectedIds = selectedIds.filter(_id => _id !== id)
    else 
      selectedIds.push(id)
 
    this.setState({selectedIds})
 }
 render(){
    // console.log('this.props.title',this.props.title)
  return (
    <View style={{width:this.props.deviceWidth,height:'85%',alignSelf:'flex-end',justifyContent:'space-between',marginBottom:10,alignItems:'center'}}>
        <View style={{width:'90%',alignItems:'center'}}>
        <Text style={{fontSize:25,lineHeight:24,marginBottom:52,fontWeight:'600',color:'#F76A7B'}}>My Interests</Text>
        <FlatList
           data={data}
           numColumns={3}
           extraData={
            // this.state.selectedId     // for single item
            this.state.selectedIds    // for multiple items
          }
           renderItem={({item})=>
           <TouchableOpacity style={{width:'30%',height:28,marginTop:10,marginLeft:10,backgroundColor:this.state.selectedIds.includes(item.id) ?'#5363DD':"#DEDEDE",borderRadius:13,alignItems:'center',justifyContent:'center'}} onPress={()=>this.handleSelectionMultiple(item.id)}>
            <Text style={{fontSize:12,fontWeight:'600',lineHeight:14.63}}>{item?.title}</Text>
           </TouchableOpacity>
        }
        />
        
        </View>
        <TouchableOpacity style={{height:45,width:'90%',borderRadius:35,backgroundColor:'#5363DD',alignItems:'center',justifyContent:'center'}} onPress={()=>this.props.onPress(this.state.selectedIds)} >
            <Text style={{fontSize:16,lineHeight:19.5,fontWeight:'700',color:'#FFFFFF'}}>Continue</Text>
        </TouchableOpacity>
    </View>
   
  );
 }
}