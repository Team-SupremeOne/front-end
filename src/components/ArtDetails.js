import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ArtDetails() {
	let { id } = useParams();
	const [art, setArt] = useState([]);
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://radiant-headland-48846.herokuapp.com/artworks/${id}`)
			.then((response) => response.json())
			.then((data) => setArt(data));
	}, []);

	const handleChange = (event) => {
		setArt({ ...art, [event.target.id]: event.target.value });
	};

	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios.patch(
			`https://radiant-headland-48846.herokuapp.com/artworks/${id}`,
			art
		);
		navigate('/');
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios.delete(
			`https://radiant-headland-48846.herokuapp.com/artworks/${id}`,
			art
		);
		navigate('/');
	};

	if (!art) {
		return <h2 className='loading'>Loading...</h2>;
	}

	return (
		<>
			{modal ? (
				<div>
					<h2 className='edit'>Edit Mode</h2>
					<div className='modal'>
						<h3>{art.name}</h3>
						<img src={art.image} alt={art.name} />
						<form onSubmit={handleSubmit}>
							<label className='description' htmlFor='description'>
								Current Description
							</label>
							<textarea
								onChange={handleChange}
								id='description'
								value={art.description}
								placeholder='Edit Description'
							/>
							<button type='submit'>Submit</button>
							<button type='button' onClick={closeModal}>
								Close
							</button>
						</form>
					</div>
				</div>
			) : (
				<div className='details-container'>
					<img src={art.image} alt={art.name} />
					<div className='details'>
						<h2>{art.name}</h2>
						<h4>Description</h4>
						<p>{art.description}</p>
						<h3>More ArtWork from this Artist</h3>
						<h4>{art.artistInfo}</h4>
						<div className='modal-btns'>
							<button className='btn' onClick={editShowPage}>
								Edit
							</button>
							<button className='btn' onClick={handleDelete}>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ArtDetails;
