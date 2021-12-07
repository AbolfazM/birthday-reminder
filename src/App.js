import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from './List';
import data from './data';

const App = () => {
	const [people, setPeople] = useState(data);
	const remove = () => toast.success('people removed!');
	const restore = () => toast.success('people restored!');

	const removePeople = () => {
		setPeople([]);
		remove();
	}
	const restorePeople = () => {
		setPeople(data);
		restore();
	}

	return(
		<main>
			<section className="container">
				<h3>{people.length} birthday reminded!</h3>
				<List people={people} />
				<button onClick={removePeople}>remove all!</button>
				<button onClick={restorePeople}>restore all!</button>
				<ToastContainer closeButton={false} autoClose={2000} />
			</section>
		</main>
	);
}

export default App;