import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onButtonSubmit, onInputChange}) => {
	return(
		<div>
			<div className='f3 pa3'>
			This is a magic brain that detects faces. Try it out!
			</div>
				<div className='Center'>
					<div className='Center Honey pa4 br3 shadow-5'>
						<input onChange={onInputChange} className= 'f4 pa2 w-70'/>
						<button onClick={onButtonSubmit} className='f4 w-30 link white bg-light-red grow ph3 pv2 dib'>Identify</button>
					</div>
				</div>
		</div>
	);
}

export default ImageLinkForm;