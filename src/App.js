import { Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import ArtWork from './components/ArtWork';
import ArtDetails from './components/ArtDetails';
import Form from './components/Form';
import AboutUs from './components/AboutUs';

function App() {
	return (
		<>
			<header>
				<Link to='/'>
					<h1 className='title'>Supreme Art Gallery</h1>
				</Link>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<ArtWork />} />
					<Route path='artworks/:id' element={<ArtDetails />} />
					<Route path='/addArtwork' element={<Form />} />
					<Route path='/aboutUs' element={<AboutUs />} />

				</Routes>
			</main>
		</>
	);
}

export default App;
