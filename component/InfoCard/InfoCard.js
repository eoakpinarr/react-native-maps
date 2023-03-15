import { View, Text } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import styles from './InfoCard.style'

const InfoCard = ({visible, onClose, user}) => {
  return (
    <Modal
    style = {styles.modal}
    isVisible={visible}
    swipeDirection="down"
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    backdropOpacity={0.2}
    >
      <View style = {styles.container}>
        <Text style = {styles.username}>Kullanıcı Adı: {user.username}</Text>
        <Text style = {styles.fullname}>Adı: {user.first_name} {user.last_name}</Text>
        <Text style = {styles.fullname}>Telefon Numarası: {user.phone_number}</Text>

      </View>
    </Modal>
  )
}

export default InfoCard