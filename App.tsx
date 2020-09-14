import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import { generatePaymentUrl } from "./src/libs/metamask";
const TEST_ADDRESS = "0x9096a7DC484FC7Ca900214510d07858639e9d161";

export default function App() {
  const [quantity, setQuantity] = useState("0.0");

  async function handleSubmit() {
    const paymentUrl = generatePaymentUrl(TEST_ADDRESS, quantity);

    console.log(paymentUrl);
    const hasOpen = await Linking.openURL(paymentUrl);
    console.log(paymentUrl, hasOpen);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.label}>Cantidad a enviar</Text>
      <Text style={styles.address}>
        Destino:{`\n`}
        {TEST_ADDRESS}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="2.0 ETH"
        onChangeText={setQuantity}
        value={quantity}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonLabel}>Enviar con Metamask</Text>
      </TouchableOpacity>
    </View>
  );
}
const colors = {
  primary: "#AD2BAD",
  white: "#fff",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  address: {
    width: "80%",
    opacity: 0.5,
  },
  label: {
    width: "80%",
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.primary,
    padding: 8,
    textAlign: "center",
    marginTop: 8,
    width: "80%",
  },
  button: {
    backgroundColor: colors.primary,
    width: "80%",
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonLabel: {
    color: colors.white,
  },
});
