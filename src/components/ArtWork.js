import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ArtWork() {
	const [artWork, setArtWork] = useState([]);
	const url = 'https://radiant-headland-48846.herokuapp.com/artworks';

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setArtWork(data));
	}, []);

	return (
		<div className='art-container'>
			{artWork.map((art) => {
				return (
					<Link to={`artworks/${art._id}`} key={art._id}>
						<div className='card'>
							<img className='card-image' src={art.image} alt={art.name} />
							<div className='card-title'>
								<h3>{art.name}</h3>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default ArtWork;
