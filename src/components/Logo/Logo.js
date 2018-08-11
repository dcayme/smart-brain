import React from 'react';
import Tilt from 'react-tilt';
import brain from'./brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='pa4'>
			<Tilt className="Tilt shadow-2 pa3 br3" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa2"> <img alt='brain' src={brain}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;