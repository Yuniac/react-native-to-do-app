import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: { flexDirection: "row", justifyContent: "space-around", marginTop: "4rem" },
	textinput: {
		borderColor: "black",
		borderWidth: "2px",
		paddingRight: "5px",
		paddingLeft: "5px",
	},
});

function AddTask({ setTasks }) {
	const taskInput = React.useRef(null);

	const saveTask = () => {
		const newTask = taskInput.current.value;
		taskInput.current.value = "";
		setTasks((tasks) => [...tasks, newTask]);
	};

	return (
		<View style={styles.container}>
			<TextInput style={styles.textinput} placeholder="Add a task..." ref={taskInput}></TextInput>
			<Button title="Save" onPress={saveTask} />
		</View>
	);
}

export default AddTask;
