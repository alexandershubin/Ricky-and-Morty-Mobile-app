import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WidgetList from "../components/Widget/WidgetList";
import {Widget} from "../components/Widget/Widget";
import PopupInfo from "../components/Widget/PopupInfo";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Widget'}
                    component={Widget}
                    options={{
                        title: 'Rick and Morty',
                        headerStyle: {
                            backgroundColor: '#3c3e44',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name={'WidgetList'}
                    component={WidgetList}
                    options={{title: 'Виджеты'}}
                />
                <Stack.Screen
                    name={'Person'}
                    component={PopupInfo}
                    options={{
                        title: 'Person',
                        headerStyle: {
                            backgroundColor: '#3c3e44',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
