import Todo from "./todo";

export default function TodoList({ todos, handleDelete, handleDone }) {
	return (
		<div>
			<h2>To dos</h2>
			<ul>
				{todos.map((todo) => (
					<Todo todo={todo} key={todo.id} handleDelete={handleDelete} handleDone={handleDone} />
				))}
			</ul>
		</div>
	);
}
