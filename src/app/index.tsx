import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header index */}
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>index</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Username / Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Link href={{ pathname: "./dashboard", params: { username } }} asChild>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Floating Menu Button */}
      <TouchableOpacity style={styles.floatingMenu}>
        <Text style={styles.menuIcon}>≡</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  topHeader: {
    paddingTop: 50, // For status bar space
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    backgroundColor: "#ffffff",
  },
  topHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e3a8a", // Dark blue
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#3b82f6", // Blue bottom border
    fontSize: 16,
    color: "#1f2937",
    paddingVertical: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  floatingMenu: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuIcon: {
    fontSize: 30,
    color: '#333',
  }
});