import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import homeStyle from './homeStyle'
import {useSelector } from 'react-redux'

export default function Home() {


    const cartData = useSelector((state:any) => state.reducer);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cartData)
    }, [cartData])
    

  return (
    <View>
      <Text>{cartItems.map(item => item.name)}</Text>
    </View>
  )
}