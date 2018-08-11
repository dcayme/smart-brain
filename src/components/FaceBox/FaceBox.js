import React from 'react';
import './FaceBox.css';

const FaceBox = ({imageDisplay, box}) =>{
	return(
		<div className= 'Center ma'>
			<div className='absolute mt2'>
				<img  id="imageFace" style= {{ width: '500px', height:'auto'}}  alt='' src={imageDisplay} />
				<div className='bounding-box' style= {{top: box.topRow,  right:box.rightCol, bottom: box.bottomRow, left:box.leftCol }}></div>
			</div>
		</div>

	);
}

export default FaceBox;