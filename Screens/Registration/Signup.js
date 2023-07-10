import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import GenderDeatils from '../../Componets/GenderDeatils'
import ModalPopup from '../../Componets/ModalPopup';
import NameDetials from '../../Componets/NameDetials';
import DobModule from '../../Componets/DobModule';
import InterstedModule from '../../Componets/InterstedModule';
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      modalVisible:true
    }
  }
    scroll = null
  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)
  onPress (index) {
    this.scroll.scrollTo({x: index * deviceWidth, y: 0, animated: true})
 }

 componentDidMount(){

 }
  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
     
      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
            //   width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
              width:10,
              height:10,
              borderRadius:5
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })
    
     
    return (
      <View
        style={styles.container}
        flex={1}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          ref = {re => this.scroll = re}
        //    scrollEnabled={false}
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >
          <GenderDeatils deviceWidth={deviceWidth} onPress={(value)=>{this.onPress(1),console.log('values ',value)}}/>
          <NameDetials deviceWidth={deviceWidth} onPress={(value)=>{this.onPress(2),console.log('values ',value)}}/>
          <DobModule deviceWidth={deviceWidth} onPress={(value)=>{this.onPress(3),console.log('values ',value)}}/>
          <InterstedModule deviceWidth={deviceWidth} onPress={(value)=>{this.onPress(3),console.log('values ',value)}}/>
          <ModalPopup deviceWidth={deviceWidth} modalVisible={this.state.modalVisible} onPress={()=>this.setState({modalVisible:false})}/>
        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#F76A7B',
    height: 10,
    width:10,
    // position: 'absolute',
    left: 0,
    top: 0,
    borderRadius:10
  },
})