import Done from "./done";

export default function DoneList({ done, handleDelete, handleUnDone }) {
	return (
		<div>
			<h2>Done</h2>
			<ul>
				{done.map((dn) => (
					<Done dn={dn} key={dn.id} handleDelete={handleDelete} handleUnDone={handleUnDone} />
				))}
			</ul>
		</div>
	);
}
