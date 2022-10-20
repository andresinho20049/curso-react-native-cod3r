import { StyleSheet, View } from "react-native"
import Mega from "../mega/Mega"
import { Quadrado } from "./components/Quadrado"


export const Flexbox = () => {
    return (
        <View style={style.flexContainer}>
            <Quadrado color={'#ff801a'} />
            <Quadrado color={'#50d1f6'} />
            <Quadrado color={'#dd22c1'} />
            <Quadrado color={'#8312ed'} />
            <Quadrado color={'#36c9a7'} />
            <Mega qtdeNumero={7}/>
        </View>
    )
}

const style = StyleSheet.create({
    flexContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#233'
    }
})