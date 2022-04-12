import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Button } from "react-native";

/* Alunos: Guilherme De Jesus Costa, Gabriel Deoclides*/

const image = source=require("./assets/background.png")

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image source={require("./assets/unifasipe.png")} style={styles.borderLimit}/>
      <Text style={styles.text}>Análise e Desenvolvimento de Sistemas - ADS</Text>

    </ImageBackground>
    <View style={styles.entrar}>

<Button

  title="FAZER LOGIN"

  color="#1ABC9C">
  box-shadow: 10px 10px 5px #ccc;
</Button>
         </View >
    <View style={styles.cadastro}>

<Button

  title="CADASTRE-SE"

  color="#2C3E50"
  >
  box-shadow: 10px 10px 5px #ccc;

</Button>
         </View >
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    width: "100%",
    color: "white",
    fontSize: 13,
    lineHeight: 34,
    textAlign: "center",
    top: "19%",
    color: "#000000"
    
  },


 /* para fazer a logo não sair para fora da tela e ficar no centro */
  borderLimit: {

    width: "80%",

    resizeMode: "contain",

    height: "18%",

    position: "absolute",

    top: "4%",

    left: "7%",

    marginLeft:0

  },
});

export default App;