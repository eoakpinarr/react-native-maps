import { StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import Config from 'react-native-config'
import MapView from 'react-native-maps'
import useFetch from './hooks/useFetch'
import InfoCard from './component/InfoCard'
import Loading from './component/Loading'
import UserMarker from './component/marker/UserMarker'

const App = () => {

    const mapRef = useRef()
    const [user, setUser] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const { data, loading, error } = useFetch(Config.API_URL)

    const setModalVisibility = () => { setModalVisible(!modalVisible) }

    const renderUserMarker = () => {
        return data.map(({ id, avatar, first_name, last_name, username, phone_number, address: { coordinates } }) => {
            return (
                <UserMarker
                    key={id}
                    coordinates={{
                        latitude: coordinates.lat,
                        longitude: coordinates.lng
                    }}
                    userImageURL={avatar}
                    onSelect={() => markerSelect(coordinates, { first_name, last_name, username, phone_number })}
                />
            )
        })
    }

    const markerSelect = (coor, selectedUser) => {
        setUser(selectedUser)
        setModalVisibility()
        mapRef.current.animateToRegion({
            latitude: coor.lat,
            longitude: coor.lng,
            latitudeDelta: 8,
            longitudeDelta: 8,
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView ref={mapRef} style={{ flex: 1 }}>
                {data && renderUserMarker()}
            </MapView>
            {loading && <Loading />}
            {user && (<InfoCard visible={modalVisible} onClose={setModalVisibility} user={user} />)}
        </View>
    )
}

export default App
