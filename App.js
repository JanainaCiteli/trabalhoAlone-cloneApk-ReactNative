import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      //imagem background
      <ImageBackground
        source={{ uri: 'https://www.c6bank.com.br/static/e370a163932b1ac3470c6b47d8d31a8f/18e3d/hero-bg-xs.jpg' }}
        style={styles.backgroundImage}
      />
      <Image
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2020/11/c6-bank-logo-4.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewMargin}>
        <TouchableOpacity style={styles.btnContainer1}>
        <Text style={styles.textStyle}>
            ABRIR SUA CONTA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer2}>
          <Text style={styles.textStyle1}>
            JÁ TENHO CONTA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //comment
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-between',

  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 220,
    height: 45,
    marginTop: 50,
  },
  btnContainer1: {
    marginTop:'117%',
    width: 350,
    padding: 10,
    backgroundColor: "#ffd700",
    borderRadius: 50,
  },
  btnContainer2: {
    marginTop:15,
    width: 350,
    padding: 10,
    backgroundColor: "transparent",
    color:'white',
    borderWidth: 1,
    borderColor:'white',
    borderRadius: 50,

  },
  textStyle:{
    textAlign: 'center',

  },
  textStyle1:{

    color: 'white',
    textAlign: 'center' ,
  },
  viewMargin:{
    flex:1,
    flexDirection:'column',
    marginBottom:10,  
  }
});
