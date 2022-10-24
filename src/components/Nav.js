import React from 'react';

function Nav(props) {
	return (
		<div>
			<ul className='nav-bar'>
				<li>
					<a href='/'>Home |</a>
				</li>
				<li>
					<a href='addArtwork'>Add Artwork |</a>
				</li>
				<li>
					<a href='aboutUs'>About Us </a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
