export default function Done({ dn, handleDelete, handleUnDone }) {
	return (
		<li>
			<span>{dn.todoString}</span>
			<button onClick={() => handleDelete(dn.id)}>❌</button>
			<button onClick={() => handleUnDone(dn)}>⬆️</button>
			<button onClick={() => handleDelete(dn.id)}>📝</button>
		</li>
	);
}
