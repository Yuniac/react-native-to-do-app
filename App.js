import React from "react";
import { View } from "react-native";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Brand from "./components/Brand";
export default function App() {
	const [tasks, setTasks] = React.useState([]);
	console.log(tasks);
	return (
		<View style={{ height: "100%", justifyContent: "flex-start" }}>
			<AddTask setTasks={setTasks} />
			<Tasks tasks={tasks} />
			<Brand />
		</View>
	);
}
