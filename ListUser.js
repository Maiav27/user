import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react'
import { configureFonts, DataTable } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useQuery,useIsFetching } from 'react-query';
const ListUser = () =>{
   
   const [list, setList] = useState([])
    
    const getList = async () =>{
      const config = {
        headers : {
          'Authorization' : 'Bearer cbc4667d57d8ade57c30a069804260557d0d7a1d5394a40653c0ef4121192fab' ,
          'Content-Type' : 'application/json',
          'Accept' : 'application/json' 
        } 
      }
      const req = await axios.get('https://gorest.co.in/public/v2/users', config ).then(result => result.data)
        return req
    }

    
    
    const {data, isLoading, isSuccess} = useQuery('get',getList)
    
    const navigation =   useNavigation()
    const renderItem = (item, index) =>{
      return(
            <DataTable.Row key={index}>
               <DataTable.Cell> {item.id}</DataTable.Cell>
               <DataTable.Cell>  {item.name}</DataTable.Cell>
               <DataTable.Cell>  {item.gender}</DataTable.Cell>
               <DataTable.Cell> <Button title='Alterar' color='#ffcb00' onPress={() => navigation.navigate('UpdateUser',{user : item})}  /> </DataTable.Cell>
            </DataTable.Row>
        )
    }

    const press = () => {

      navigation.navigate('AddUser')
    }
if(isLoading){
  return(

    <View style={styles.container}>
        <Text>Loading...</Text>
    </View>
  )
}
      return (
      <SafeAreaView >
            <View style={styles.container}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>id</DataTable.Title>
                        <DataTable.Title>name</DataTable.Title>
                        <DataTable.Title>gender</DataTable.Title>
                        <DataTable.Title>
                            <TouchableOpacity style={styles.button}  onPress={press}> 
                                <Text style={{ color : 'white'}}> +</Text>
                            </TouchableOpacity>
                        </DataTable.Title>
                    </DataTable.Header>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View>
                         {data.map(renderItem)}
                      </View>
                    </ScrollView>
                </DataTable>
            </View>
      </SafeAreaView>
     
    )

}
export default ListUser
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   button : {
     height : 20,
     width : 33 ,
     backgroundColor : 'green',
     borderRadius : 5,
     alignItems : 'center',
     justifyContent : 'center'
  
     
   }
  });
