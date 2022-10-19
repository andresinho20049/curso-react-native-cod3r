import { Button } from "@rneui/themed";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {});

    const { dispatch } = useContext(UsersContext);

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
                style={style.input}
            />
            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o E-mail"
                value={user.email}
                style={style.input}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o E-mail"
                value={user.avatarUrl}
                style={style.input}
            />
            <Button
                title={user?.id ? 'Atualizar':'Salvar'}
                onPress={() => {
                    dispatch({
                        type: user?.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})