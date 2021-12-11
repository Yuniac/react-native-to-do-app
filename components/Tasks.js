import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

function Tasks({ tasks }) {
	function addItem(todo) {
		return (
			<Text style={styles.listItem}>
				{todo.index + 1} | {todo.item}
			</Text>
		);
	}

	return (
		<View>
			<View style={styles.seperator}></View>
			<FlatList data={tasks} renderItem={(todo) => addItem(todo)} contentContainerStyle={styles.list}></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		marginLeft: 10,
		marginTop: 5,
	},
	seperator: { width: "100%", height: 2, backgroundColor: "black", marginTop: 5, marginBottom: 5 },
	listItem: {
		backgroundColor: "lightcyan",
		width: "80%",
		margin: "1rem 0",
		marginRight: "auto",
		marginLeft: "auto",
		padding: 10,
	},
});

export default Tasks;
