import { useState } from "react";

export default function AddToList({ handleAddTodo }) {
	const [todoString, setTodoString] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!todoString) return;

		const newTodo = { todoString, id: Date.now() };
		handleAddTodo(newTodo);
		setTodoString("");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="" id="" value={todoString} onChange={(e) => setTodoString(e.target.value)} />
				<button>Add</button>
			</form>
		</div>
	);
}
