import React from 'react';

function Nav(props) {
    return (
			<div>
				<h1 className='title'>Supreme Art Gallery</h1>
				<ul className='nav-bar'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>About Us</a>
					</li>
					<li>
						<a href=''>Categories</a>
					</li>
					<li>
						<a href=''>Add Artwork</a>
					</li>

					<li>
						<a href=''>Favorites</a>
					</li>
				</ul>
			</div>
		);
}

export default Nav;