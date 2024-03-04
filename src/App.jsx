import { useState } from "react";
import AddToList from "./components/addToList";
import DoneList from "./components/doneList";
import TodoList from "./components/todoList";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [done, setDone] = useState([]);

	function handleAdd(todo) {
		setTodos((todos) => [...todos, todo]);
	}

	function handleDeleteToDo(id) {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}

	function handleDeleteDone(id) {
		setDone((todos) => todos.filter((todo) => todo.id !== id));
	}

	function handleDone(todo) {
		setDone((done) => [...done, todo]);
		handleDeleteToDo(todo.id);
	}

	function handleUnDone(done) {
		setTodos((todos) => [...todos, done]);
		handleDeleteDone(done.id);
	}

	return (
		<div>
			<AddToList handleAddTodo={handleAdd} />
			<TodoList todos={todos} handleDelete={handleDeleteToDo} handleDone={handleDone} />
			<DoneList done={done} handleDelete={handleDeleteDone} handleUnDone={handleUnDone} />
		</div>
	);
}
