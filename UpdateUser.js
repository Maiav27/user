import { View, Text, TextInput, Button } from "react-native"
import { RadioButton } from "react-native-paper"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"


const UpdateUser = ({route}) =>{
      const [user, setUser] = useState(route.params?.user)
    
    console.log(user)
     const navigation = useNavigation()
    const config = {
        headers : {
          'Authorization' : 'Bearer cbc4667d57d8ade57c30a069804260557d0d7a1d5394a40653c0ef4121192fab' ,
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
        } 
      }
     const put = async (data) =>{
      const req = await    axios.put(`https://gorest.co.in/public/v2/users/${user.id}`,data)
      console.log(req)
      return req
     }

     const{mutate} = useMutation(put, {})


      const atualizar = () =>{
          mutate(user)
      }
    return(
        <View>
  
         <Text> Name</Text>
          <TextInput  onChangeText={(value) => setUser({...user, name : value})} value={user.name}/>
           <Text> Email</Text>
          <TextInput onChangeText={(value) =>setUser({ ...user, email : value })}  value={user.email}/>
           <Text>Gender</Text>
           <RadioButton.Group onValueChange={(value) => setUser({...user, gender : value})} value={user.gender}  >
              <View style={{flexDirection : 'row'}}>
              <RadioButton value="female"  />
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
           <Button   title="Atualizar" color='orange' onPress={atualizar}  />
           <Button   title="Voltar" onPress={() =>navigation.navigate('ListUser')}/>
  
        </View>
      )
}
export default UpdateUser