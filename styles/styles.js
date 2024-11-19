import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Assure que l'image couvre tout l'écran
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Couche semi-transparente pour améliorer la lisibilité
    padding: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff", // Texte en blanc pour contraster avec l'image
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#F08080", // Couleur rouge clair pour le bouton
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Couleur blanche pour le texte du bouton
    textAlign: "center",
  },
});
