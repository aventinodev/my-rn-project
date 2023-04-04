import { StyleSheet } from "react-native";

export const stylesForm = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  title: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
    // fontFamily: "Roboto-Medium",
  },

  form: {
    position: "relative",
    paddingTop: 92,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // paddingHorizontal: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: 300,
    borderColor: "#FF6C00",
    borderRadius: 25.5,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    marginBottom: 16,
  },
  text: {
    lineHeight: 19,
    textAlign: "center",
    // fontFamily: "Roboto-Medium",
  },
  wrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,

    backgroundColor: "#F6F6F6",
  },
  btnAdd: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
});
