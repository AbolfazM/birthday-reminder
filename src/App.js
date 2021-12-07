import React, { useState } from 'react'
import List from './List';
import data from './data';

const App = () => {
	const [people, setPeople] = useState(data);
	return(
		<main>
			<section className="container">
				<h3>{people.length} birthday reminded!</h3>
				<List people={people} />
				<button onClick={() => setPeople([])}>clear all!</button>
				<button onClick={() => setPeople(data)}>restore all!</button>
			</section>
		</main>
	);
}

export default App;