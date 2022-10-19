import React, { useContext } from "react";
import { Avatar, Button, ListItem, Icon } from "@rneui/base";
import { Alert, FlatList, View } from 'react-native';
import UsersContext from "../context/UsersContext";

export default props => {

    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: "Não"
            }
        ])
    }

    function getUserItem({ item: user }) {
        console.log(user.name)
        return (
            <ListItem key={user.id} bottomDivider>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content >
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                        onPress={() => props.navigation.navigate('UserForm', user)}
                        type="clear"
                    >
                        <Icon name="edit" size={25} color="orange" />
                    </Button>
                    <Button
                        onPress={() => confirmUserDeletion(user)}
                        type="clear"
                    >
                        <Icon name="delete" size={25} color="red" />
                    </Button>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>

    )
}