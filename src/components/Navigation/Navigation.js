import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	return(
	 isSignedIn === true
			?<nav style={{ display:'flex', justifyContent: 'flex-end'}}>
				<p onClick={()=> onRouteChange('signMeOut')} className='f3 pa4 link hover pointer underline dim black'>
					Sign Out
				</p>
			</nav>
			:<nav style={{ display:'flex', justifyContent: 'flex-end'}}>
				<p onClick={()=> onRouteChange('register')} className='f3 pa4 link hover pointer underline dim black'>
					Register
				</p>
				<p onClick={()=> onRouteChange('signIn')} className='f3 pa4 link hover pointer underline dim black'>
					Sign In
				</p>
			</nav>
	)
};

export default Navigation;