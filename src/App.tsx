import React from 'react';
import AddNote from './components/AddNote';
import List from './components/List';
import './App.css';
import { StoreProvider } from './reducer/reducer';

const App = () => {
	return (
		<StoreProvider>
			<div className='App'>
				<AddNote/>
				<List/>
			</div>
		</StoreProvider>
	)
}

export default App;
