import SportsList from './components/SportsList';

function App() {
	return (
		<div className="App">
			<div className="main">
				<div className="list-container">
					<h1>Sports Library</h1>
					<SportsList />
				</div>
			</div>
			<div className="instructions">
				<p>drag cards to change order</p>
			</div>
		</div>
	);
}

export default App;
