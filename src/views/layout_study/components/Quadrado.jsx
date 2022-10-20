import { View } from "react-native"


export const Quadrado = ({color}) => {
    const lado = 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: color
        }}/>
    )
}