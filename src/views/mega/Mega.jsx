import React from "react";
import { Text, TextInput } from "react-native";


export default class Mega extends React.Component {

    state = {
        qtdeNumero: this.props.qtdeNumero
    }

    changeNumero = (qtde) => {
        this.setState({ qtdeNumero: qtde })
    }


    render() {
        return (
            <>
            <Text style={{ fontSize: 25 }}>
                Gerador de Mega-Sena
                {this.props.qtdeNumero}
            </Text>

            <TextInput 
                keyboardType="numeric"
                style={{borderBottomWidth: 1}}
                placeholder="Qtde de Numeros"
                value={this.state.qtdeNumero}
                onChangeText={qtde => this.changeNumero(qtde)}
            />
            
            </>
        )
    }
}