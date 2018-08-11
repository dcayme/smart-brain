import React from 'react';

const Rank = ({name, entries}) =>{
	return(
		<div className="f3 pa3 white">
		<p> {`${name}, the number of requests you've made is...`}</p>
		<p> {entries} </p>
		</div>
	);
}

export default Rank;


//think i can just use user.name and user.entries still...try it again