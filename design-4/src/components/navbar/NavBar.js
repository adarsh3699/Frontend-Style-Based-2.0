import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="max-width">
				<div className="logo">
					<a href="#home">
						Patil<span>Kaki</span>
					</a>
				</div>
				<ul className="menu">
					<li>
						<a href="#home" className="menu-btn">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="menu-btn active">
							About
						</a>
					</li>
					<li>
						<a href="#creativity" className="menu-btn active">
							Creativity
						</a>
					</li>
					<li>
						<a href="#resigter" className="menu-btn active">
							Register
						</a>
					</li>
				</ul>
				<div className="menu-btn">
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
