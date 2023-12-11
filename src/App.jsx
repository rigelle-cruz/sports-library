import SportsList from './components/SportsList';

function App() {
	return (
		<div className="App">
			<div className="main">
				<h1>Sports Library</h1>
				<div className="list-container">
					<SportsList />
				</div>
			</div>
			<div className="instructions">
				<p>drag cards to change order</p>
				<img src="public/arrow.png" alt="arrow"></img>
			</div>
		</div>
	);
}

export default App;
