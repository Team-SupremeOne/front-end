import { Route, Routes, Link, } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import ArtWork from './components/ArtWork';
import ArtDetails from './components/ArtDetails';
import Form from './components/Form';

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
					<Route path='artworks/:id' element={<ArtDetails />} />
					<Route path='/addArtwork' element={<Form />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
