import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtWork() {
	const [artWork, setArtWork] = useState([]);
	const url = 'http://localhost:6060';

	useEffect(() => {
		fetch(``)
			.then((response) => response.json())
			.then((data) => setArtWork(data));
	}, []);

	return (
		<div className='art-container'>
			{artWork.map((art) => {
				return (
					<Link to={`details/${art.id}`} key={art.id}>
						<div className='card'>
							<div className='card-image'>
								<img src={art.image} alt={art.name} />
							</div>
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
