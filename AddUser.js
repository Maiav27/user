 import { Text, View, TextInput, StyleSheet , Button} from "react-native"
 import { RadioButton } from "react-native-paper"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useMutation} from "react-query"
import axios from "axios"
const AddUser = () =>{

    const [user, setUser] = useState({
      name : '',
      gender : '',
      email : '',
      status : ''
    })
    const post = async (data) =>{
    const res = await  axios.post( url ,data, config)
    console.log(res.data)
     return res.data
    }
    const {mutate} = useMutation(
       post  , {}
    )
   const navigation = useNavigation()
    const config = {
      headers : {
        'Authorization' : 'Bearer cbc4667d57d8ade57c30a069804260557d0d7a1d5394a40653c0ef4121192fab' ,
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      } 
    }

    
  const url = 'https://gorest.co.in/public/v2/users'
    const cadastrar = async ()  =>{
  

      await mutate(user)

      
       
    }

    console.log(user)
    return(
      <View>


           

        <Text> Name</Text>
        <TextInput  onChangeText={(value) => setUser({...user, name : value})} value={user.name}/>
         <Text> Email</Text>
        <TextInput onChangeText={(value) =>setUser({ ...user, email : value })}  value={user.email}/>
         <Text>Gender</Text>
         <RadioButton.Group onValueChange={(value) => setUser({...user, gender : value})} value={user.gender} >
            <View style={{flexDirection : 'row'}}>
            <RadioButton value="female" />
                <Text>Female</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <RadioButton value="male" />
                <Text>Male</Text>
            </View>
         </RadioButton.Group>
         <RadioButton.Group onValueChange={(value) => setUser({...user, status : value})} value={user.status} >
            <View style={{flexDirection : 'row'}}>
            <RadioButton value="active" />
                <Text>active</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <RadioButton value="inactive" />
                <Text>inactive</Text>
            </View>
         </RadioButton.Group>
         <Button   title="Cadastrar" onPress={cadastrar}/>
         <Button   title="Voltar" onPress={() =>navigation.navigate('ListUser')}/>

      </View>
    )
}

export default AddUser