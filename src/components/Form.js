import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
	const navigate = useNavigate();
	const [art, setArt] = useState({
		name: '',
		image: '',
		description: '',
		artistInfo: '',
	});

	const handleChange = (e) => {
		setArt({ ...art, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:6060/artwork')
			.then((res) => res.json())
			.then((data) => console.log(data));

		navigate('/');
	};

	return (
		<>
			<div className='form-page'>
				<h1 className='add-title'>Add Artwork!</h1>
				<form onSubmit={handleSubmit} className='create-form'>
					<label htmlFor='artwork'>Art Name </label>
					<input
						onChange={handleChange}
						id='art'
						value={art.name}
						placeholder='Enter Art'
					/>
					<label htmlFor='image'>Art Image </label>
					<input
						onChange={handleChange}
						id='image'
						value={art.image}
						placeholder='Enter Image'
					/>
					<label htmlFor='description'>Art Description </label>
					<input
						onChange={handleChange}
						id='description'
						value={art.description}
						placeholder='Enter Description'
					/>
					<label htmlFor='artist-info'>Artist Info </label>
					<input
						onChange={handleChange}
						id='artist-info'
						value={art.name}
						placeholder='Enter Artist-Info'
					/>
					<button className='submitBtn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Form;
