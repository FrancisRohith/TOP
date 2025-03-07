import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { db } from "../firebaseConfig"; // Firebase setup
import { doc, setDoc } from "firebase/firestore"; // Firebase Firestore methods

const CreatePetProfile = () => {
  const [name, setName] = useState(""); // State for pet name
  const [breed, setBreed] = useState(""); // State for pet breed
  const [age, setAge] = useState(""); // State for pet age
  const [error, setError] = useState(""); // State for error message
  const [success, setSuccess] = useState(false); // State for success message

  // Function to save pet profile to Firebase
  const handleSave = async () => {
    if (!name || !breed || !age) {
      setError("All fields are required.");
      return;
    }

    try {
      // Save the pet profile to Firestore
      await setDoc(doc(db, "pets", name), {
        name,
        breed,
        age,
      });
      setSuccess(true);
      setError(""); // Clear any previous error messages
    } catch (error) {
      setError("Error saving profile. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pet Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {/* Display error message */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Display success message */}
      {success ? <Text style={styles.success}>Profile saved successfully!</Text> : null}

      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

// Styling for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  success: {
    color: "green",
    marginBottom: 10,
  },
});

export default CreatePetProfile;
