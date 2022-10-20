import { Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import ArtWork from './components/ArtWork';
import ArtDetails from './components/ArtDetails';

function App() {
	return (
		<>
			<header>
				<Link to='/'>
					<h1 className='title'>Supreme Art Gallery</h1>
				</Link>
				<Nav />
			</header> 
      <h2 className='title'>Welcome to Supreme Art Gallery</h2>
			<main>
				<Routes>
					<Route path='/' element={<ArtWork />} />
					<Route path='details/:id' element={<ArtDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
