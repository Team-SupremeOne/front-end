import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtDetails() {
	let { id } = useParams();
	const [art, setArt] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:6060/artworks/${id}`)
			.then((response) => response.json())
			.then((data) => setArt(data));
	}, []);

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
			</div>
		</div>
	);
}

export default ArtDetails;
