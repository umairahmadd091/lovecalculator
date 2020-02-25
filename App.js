import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Appbar,TextInput   } from 'react-native-paper';

const Displaydata = (prop)=> {

    if(prop.data==""){

      return( <Text> </Text> )
    
    }else{

      return(  
        <View>
          <Text style={{fontSize:30,textAlign:"center",color:"white"}}>{prop.data.percentage}%</Text>
          <Text style={{fontSize:30,textAlign:"center",color:"white"}}> {prop.data.result} </Text>
        </View>
      )      
    }
}
 
                    
export default class App extends Component {

  state = {
    name: '',
    lover: '',
    result: ''

  }
  submit = () =>{
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.name}
      &sname=${this.state.lover}`,{ 
      headers:{
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "f190201b49mshfc349d8a12cb573p1dbc55jsnd7962dab81de"

    }
  })
    .then(data=>data.json())
    .then(data2=>{
      console.log(data2);
      this.setState({
        result: data2
      })
    })
  }
  
  
  render() {

    return (
      
      <View style={{backgroundColor:"black",flex:1}}>
        <Appbar.Header style={{backgroundColor:"red",padding:40}}>
        
        <Appbar.Content
          title="Love Percentage Calculator" style={{alignItems:"center"}}
        />
        </Appbar.Header>

        <TextInput
        label='Your Name'
        style={{margin:10, marginTop:50}}
        value={this.state.name}
        onChangeText={text=> this.setState({name:text})}
        />

        <TextInput
        label='Lover Name'
        value={this.state.lover}
        onChangeText={text=> this.setState({lover:text})}
        style={{margin:10}}
        />

      <Button style={{margin:20, height:60 , justifyContent:"center",backgroundColor:"red"}} 
        mode="contained" onPress={this.submit}>  Calculate
      </Button>

      <Displaydata data={this.state.result}  />

      <Text style={{marginTop:225, marginLeft:230,color:"white"}}>Developed by Umair Ahmad</Text>

      </View>

    );
  }
}
