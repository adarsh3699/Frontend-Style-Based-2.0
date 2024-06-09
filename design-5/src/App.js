import React from 'react';

import Navbar from './components/Navbar';
import PageAddress from './components/PageAddress';
import Content from './components/Content';
import FAQ from './components/FAQ';

function App() {
	return (
		<>
			<Navbar />
			<div className="my-16 md:mx-20 mx-5">
				<PageAddress />
				<Content />
				<FAQ />
			</div>
		</>
	);
}

export default App;
