import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserForm from "./views/UserForm";
import UserList from "./views/UserList";
import { Button, Icon } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4522e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

const App = () => {
    return (
        <SafeAreaProvider>
            <UsersProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                        <Stack.Screen name="UserList" component={UserList}
                            options={({ navigation }) => {
                                return {
                                    title: "Lista de Usuários",
                                    headerRight: () => (
                                        <Button
                                            type="clear"
                                            icon={<Icon name="add" size={22} color="#fff" />}
                                            onPress={() => navigation.navigate("UserForm")}
                                        />

                                    )
                                }
                            }} />
                        <Stack.Screen name="UserForm" component={UserForm} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UsersProvider>
        </SafeAreaProvider>
    );
}

export default App;