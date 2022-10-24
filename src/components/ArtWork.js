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
		<div id='artWorkParentDiv'>
			<div id='welcomeDiv'>
				<div className='welcomeImages' id='image1'>
					<img
						src='https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='1'
					/>
				</div>
				<div className='welcomeImages' id='image2'>
					<img
						src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='2'
					/>
				</div>
				<div className='welcomeImages' id='image3'>
					<img
						src='https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='3'
					/>
				</div>
			</div>
			<div className='art-container'>
				{artWork.map((art) => {
					return (
						<Link to={`artworks/${art._id}`} key={art._id}>
							<div className='card'>
								<img className='card-image' src={art.image} alt={art.name} />
								<div className='card-title'>
									{/* <h3>{art.name}</h3> */}
								</div>
							</div>
						</Link>
					);
				})}
			</div>{' '}
		</div>
	);
}

export default ArtWork;
