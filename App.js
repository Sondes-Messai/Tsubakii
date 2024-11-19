import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles/styles"; // Import des styles

function App() {
  const handleButtonPress = () => {
    Alert.alert("Recherche", "Votre recherche de plante a commencé ! 🌱");
  };

  return (
    <ImageBackground
      source={require("./assets/tsubaki.jpg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Comme le tsubaki qui fleurit sous la neige, la beauté naît dans la
          simplicité et la résilience.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>
            Démarrez votre recherche de plante
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default App;
