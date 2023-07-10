import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';

export default class ModalPopup extends Component {
  state = {
    modalVisible: true,
  };

  render() {
    const {modalVisible} = this.state;
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   this.setState({modalVisible: !modalVisible});
          // }}
          >
          <View style={[styles.centeredView,{width:this.props.deviceWidth,backgroundColor:'rgba(0,0,0,0.5)'}]}>
            <View style={[styles.modalView,{width:this.props.deviceWidth}]}>
              <Text style={{fontSize:20,fontWeight:'600',lineHeight:24,color:'#1B1B1B'}}>OTP Verification</Text>
              <Text style={{fontSize:28,fontWeight:'600',color:'#F76A7B',marginTop:10}}>Successful</Text>
              <TouchableOpacity style={{height:32,width:143,marginTop:28,backgroundColor:'#5363DD',borderRadius:6,alignItems:'center',justifyContent:'center'}}
                onPress={()=>this.props.onPress()}  >
                <Text style={{fontSize:13,lineHeight:17.6,fontWeight:'600',color:'#FFFFFF'}}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:240,
    alignItems:'center',
    justifyContent:'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
 