import { View, Text, StyleSheet, Image } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}> 20 caracteres</Text>
        
      <View style={styles.area}>
        {/* Aqui é onde ficará o slider da quatidade de caracteres */}      
        <Image 
          source={require("./assets/slider_screenshot.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8

  }

})

