import { Image } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import styles from './UserMarker.style'

const UserMarker = ({ coordinates, userImageURL, onSelect }) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
        <Image source={{uri: userImageURL}} style={styles.image}/>
    </Marker>
  )
}

export default UserMarker