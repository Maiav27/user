

import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUser from './ListUser';
import AddUser from './AddUser';
import { QueryClientProvider, QueryClient } from 'react-query';
import UpdateUser from './UpdateUser';



const Stack = createNativeStackNavigator()

export default function App() {
    const queryClient = new  QueryClient()
  
  return (
    <QueryClientProvider client={queryClient} >
        <NavigationContainer>
            <Stack.Navigator  initialRouteName='ListUser'>
            <Stack.Screen  name='ListUser' component={ListUser} options={{headerShown : false}} />
            <Stack.Screen  name='AddUser' component={AddUser} options={{headerShown : false}} />
                <Stack.Screen  name='UpdateUser' component={UpdateUser} options={{headerShown : false}} />
            </Stack.Navigator>
        </NavigationContainer>
    </QueryClientProvider>
  );
}



