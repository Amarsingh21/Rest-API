import { useState, useEffect } from 'react';
import Header from './components/Header';
// import Searchfilter from './components/search-filter';
import Search from './components/Search';

function App() {


	return (
		<div className="App">
			<Header />
			{/* <Searchfilter /> */}
			<Search />
		</div>
	);
}

export default App;
