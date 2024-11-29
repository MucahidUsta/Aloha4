// import React from "react";  
// import { View, Text } from "react-native";



// const App = () => {

//     return(
//     <View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
//         <Text>
//             Hello World
//         </Text>
//     </View>)
// }

// export default App
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

const HomeScreen = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [operators, setOperators] = useState("");

  const handleAddition = () => {
    let n1 = parseFloat(number1);
    let n2 = parseFloat(number2);

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert("Lütfen sayısal değer girin");
      return;
    }

    let result = 0;

    switch (operators) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "/":
        if (n2 !== 0) {
          result = n1 / n2;
        } else {
          Alert.alert("Hata, 0 bölemez");
          return;
        }
        break;
      case "%":
        if (n2 !== 0) {
          result = n1 % n2;
        } else {
          Alert.alert("Hata, 0 kabul edilemez bir değerdir");
          return;
        }
        break;
      case "*":
        result = n1 * n2;
        break;
      default:
        Alert.alert("Hata, yanlış operatör girdiniz (/*-+%)");
        return;
    }

    setResult(result.toString());
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Aloha hesaplama ödevi</Text>
          <TextInput
            style={styles.input}
            placeholder="Sayı 1"
            keyboardType="numeric"
            onChangeText={(value) => setNumber1(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Operatör (/*-+%)"
            onChangeText={(value) => setOperators(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Sayı 2"
            keyboardType="numeric"
            onChangeText={(value) => setNumber2(value)}
          />

          <Button title="Hesapla" onPress={handleAddition} />
          <Text style={styles.result}>Sonuç: {result}</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
  },
});











// import React,{useState} from 'react';
// import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';

// const HomeScreen=() => {
//  const [number1, setNumber1] = useState("")
//  const [number2, setNumber2] = useState("")
//  const [result, setResult] = useState("")
//  const [operators, setOperators] = useState("")
// const handleAddition = () => { 
//      let result = 0
//      let n1=parseFloat(number1)
//     let n2=parseFloat(number2)
//     if (operators === "+" ){
//          result=n1 +n2
//       } else if (operators === "-" ){
//          result=n1 - n2
//     } else if (operators === "/" ){
//         if(n2 !== 0 ) {
//             result=n1 / n2
//         }
//     } else if (operators === "%" ){
//         if(n2 !== 0 ) {
//             result=n1 % n2
//         }
      
//     }else if (operators === "*"){
//         result=n1 * n2
//     }
//     setResult(`Result:${result}`)
    
  
//} 






//  return(
//     <View style={styles.container}>
//         <Text style={styles.title}>React Native Toplama İşlemi</Text>
//         <TextInput
//   style={styles.input}
//   placeholder="Birinci sayıyı girin"
//   placeholderTextColor="black"
//   keyboardType="numeric"
//   value={number1}
//   onChangeText={(text) => setNumber1(text)}
// /><TextInput
//   style={styles.input}
  
//   placeholderTextColor="black"
//  value={operators}
//   onChangeText={(text) =>setOperators(text)}
// />
// <TextInput
//   style={styles.input}
//   placeholder="ikinci sayıyı girin"
//   placeholderTextColor="black"
//   keyboardType="numeric"
//   value={number2}
//   onChangeText={(text) => setNumber2(text)}
// />

// <Button title='Sonuc' onPress={handleAddition}/>
// {
// result ? <Text style={styles.result}>{result}</Text> : null}
//     </View>
//  )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//       backgroundColor: '#f5f5f5',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//     },
//     input: {
//       height: 40,
//       width: '80%',
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderRadius: 5,
//       paddingHorizontal: 10,
//       marginBottom: 20,
//     },
//     result: {
//       marginTop: 20,
//       fontSize: 18,
//       color: '#333',
//     },
//   });
// export default HomeScreen

// export default function HomeScreen() {

//   const [name, setName] = useState<string>('');
//   const [greeting, setGreeting] = useState<string>(''); // State for the greeting message
//   const handleGreet = () => {
//       if(name.trim())
//       {
//         setGreeting(`Hello, ${name}!`);
//       }else{
//         Alert.alert('Input Error','Please enter your name');
//       }
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello, World!</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={(text: string) => setName(text)}
//       />
//       <Button title="Greet Me" onPress={handleGreet} />
//       {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 18,
//     color: '#333',
//     marginTop: 20,
//   },
// });




// const App = () => {
//     const [name, setName] = useState ("")
//     const handlePress = () => {
//         alert(`welcome ${name}`)
//     }

//     return(
//         <View style ={{flex:1,justifyContent: 'center', alignItems:"center"}}>
//         <Text>
//            Who is this ?
//         </Text>
//         <TextInput
//         placeholder="Enter Your Name"
//         value={name}
//         onChangeText={text => setName(text)}
//         style={{borderWidth:1, borderColor:"gray",padding:10,margin:10,width:200}}
//         />
//         <Button title="Submit" onPress={handlePress}/>
         
      

//         </View>

//     )

// }

// export default App