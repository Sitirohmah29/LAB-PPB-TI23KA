import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const InstagramHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Instagram</Text>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={"heart"} size={23} color={"white"} style={styles.icon}/>
                <FontAwesome5 name={"facebook-messenger"} size={23} color={"white"} style={styles.icon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginRight: 15, // Menambahkan jarak antara kontainer dan teks
    },
    text: {
        color: 'white',
        fontSize: 26,
        marginLeft: 10, // Menambahkan jarak antara teks dan ikon
    },
    iconContainer: {
        flexDirection: 'row', // Menjadikan ikon berada dalam satu baris
        alignItems: 'center',
    },
    icon: {
        marginLeft: 20, // Jarak antara ikon hati dan pesawat
    },
});

export default InstagramHeader;