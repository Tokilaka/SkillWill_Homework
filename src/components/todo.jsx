export default function Todo({ todo, handleDelete, handleDone}) {
	return (
		<li>
			<span>{todo.todoString}</span>
			<button onClick={() => handleDelete(todo.id)}>❌</button>
			<button onClick={() => handleDone(todo)}>✔️</button>
			<button onClick={() => handleDelete(todo.id)}>📝</button>
		</li>
	);
}
