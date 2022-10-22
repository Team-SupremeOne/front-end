import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArtDetails() {
	let { id } = useParams();
	const [art, setArt] = useState([]);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:6060/artworks/${id}`)
			.then((response) => response.json())
			.then((data) => setArt(data));
	}, []);

	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios.put(`http://localhost:6060/artworks/${id}`, art);
		// navigate('/');
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios.delete(`http://localhost:6060/artworks/${id}`, art);
		// navigate('/');
	};

	if (!art) {
		return <h2 className='loading'>Loading...</h2>;
	}

	return (
		<div className='details-container'>
			<img src={art.image} alt={art.name} />
			<div className='details'>
				<h2>{art.name}</h2>
				<h4>Description</h4>
				<p>{art.description}</p>
				<h3>More ArtWork from this Artist</h3>
				<h4>{art.artistInfo}</h4>
				<button onClick={editShowPage}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}

export default ArtDetails;
