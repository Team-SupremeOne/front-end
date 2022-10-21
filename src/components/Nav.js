import React from 'react';

function Nav(props) {
	return (
		<div>
			<ul className='nav-bar'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='addArtwork'>Add Artwork</a>
				</li>
				<li>
					<a href=''>Categories</a>
				</li>
				<li>
					<a href=''>Favorites</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
