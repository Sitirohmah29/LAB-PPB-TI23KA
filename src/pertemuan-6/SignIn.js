import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState("");

  // Kredensial yang valid
  const validCredentials = {
    email: "npm@student.ibik.ac.id",
    password: "password123",
  };

  const handlerValidMail = (value) => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setValidEmail("");
    } else {
      setValidEmail("Email tidak valid");
    }
  };

  const handleSignIn = () => {
    // Validasi email kosong
    if (!email) {
      Alert.alert("Error", "Email tidak boleh kosong");
      return;
    }

    // Validasi password kosong
    if (!password) {
      Alert.alert("Error", "Password tidak boleh kosong");
      return;
    }

    // Validasi format email
    if (validEmail) {
      Alert.alert("Error", "Format email tidak valid");
      return;
    }

    // Validasi kredensial
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      // Login berhasil, langsung navigasi ke Home
      console.log("Navigation object:", navigation); // Debug log
      if (navigation) {
        navigation.replace("Home"); // Gunakan replace agar tidak bisa back ke login
      } else {
        Alert.alert("Error", "Navigation tidak tersedia");
      }
    } else {
      // Login gagal
      Alert.alert("Error", "Email atau password salah");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/icons/LOGO_IBIK.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>IBI Kesatuan</Text>
        <Text style={styles.subtitle}>Bogor Indonesia</Text>
      </View>

      {/* Background image with students */}
      <Image
        source={require("../../assets/icons/images.jpeg")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="npm@student.ibik.ac.id"
          value={email}
          onChangeText={handlerValidMail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {validEmail ? <Text style={styles.errorText}>{validEmail}</Text> : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Info kredensial untuk testing */}
        {/* <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Kredensial untuk testing:</Text>
          <Text style={styles.infoText}>Email: npm@student.ibik.ac.id</Text>
          <Text style={styles.infoText}>Password: password123</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800080",
  },
  subtitle: {
    fontSize: 14,
    color: "#800080",
  },
  banner: {
    width: "100%",
    height: 180,
    marginTop: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -35,
    marginRight: 10,
    bottom: 10,
  },
  signInButton: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 12,
  },
  infoContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  infoText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
});

export default SignIn;
