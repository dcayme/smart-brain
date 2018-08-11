import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import FaceBox from './components/FaceBox/FaceBox';
import Rank from './components/Rank/Rank';
import Register from './components/Register/Register'
 



const ParticlesParams= {
	particles: {
		 "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
		}
	}
}


const initialState = {
	imageUrl: '',
	imageDisplay:'',
	box:{},
	route: 'signIn',
	isSignedIn: false,
	user: {
		id:'',
		name:'',
		email: '',
		entries: 0,
		joined:'',
	}

}
class App extends Component {

	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = (data) => {
		this.setState({
			user:{
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		})
		//console.log(this.state.user)
	}
	
	CalculateFaceBox = (data) =>{
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box 
		const width = document.getElementById('imageFace').width;
		const height= document.getElementById('imageFace').height;
		//console.log('width', width, height)
		return({
			topRow: height * clarifaiFace.top_row,
			leftCol: width * clarifaiFace.left_col,
			bottomRow: height-(height * clarifaiFace.bottom_row),
			rightCol: width-(width * clarifaiFace.right_col),
		})
	}

	onInputChange= (event) =>{
		this.setState({
			imageUrl: event.target.value 
		})
		//console.log(this.state.imageUrl)
	}

	onButtonSubmit= () => {
		this.setState({
			imageDisplay:this.state.imageUrl
		})
			fetch('http://localhost:4000/imageUrl',{
				method: 'post',
				headers: {'Content-Type' : 'application/json'},
				body: JSON.stringify({
					input: this.state.imageUrl
				})
			})
			.then(response => response.json())
			.catch(err => console.log(err))
			.then(response => {
				if (response) {
					fetch('http://localhost:4000/image', {
	    			method:'put',
	    			headers:{'Content-Type' : 'application/json'},
	    			body: JSON.stringify({
	    				id: this.state.user.id
	    			})
	    		})
						.then(response =>response.json())
						.then(count=> {
			    		this.setState(Object.assign(this.state.user, {entries: count}))
			    	})
			    	.catch(err =>console.log(err))
				}
	    	
	    	this.setState({
	    		box: this.CalculateFaceBox(response)
	    	})
	    })
	    .catch(err => console.log(err));
	    //console.log(this.state.user.entries)
	}


	onRouteChange = (route) => {		
		///??? why doesn't ternary work with this.State.
		// route ==='home'
		// ? console.log('home')
		// 	this.setState({isSignedIn:true})

		// : console.log('other')
		// 	this.setState({isSignedIn:false})
		if (route === 'signMeOut') {
		  	this.setState(initialState)
		}
		else if (route==='home') {
		 	this.setState({isSignedIn: true})
		}	
		this.setState({
			route: route
		})
		//console.log(route)
		//console.log(this.state)
	}







  render() {
    return (
      <div className="App">
      	<Particles 
      		className='Particles'
          params={ParticlesParams}
        />
      	<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
				{  this.state.route === 'home'
					?<div>
		      	<Logo/>
		      	<Rank 
		      		name={this.state.user.name}
		      		entries={this.state.user.entries}
		      	/>
		      	<ImageLinkForm 
		      		onButtonSubmit= {this.onButtonSubmit}
		      		onInputChange= {this.onInputChange}
		    		/>
		    		<FaceBox box= {this.state.box} imageDisplay={this.state.imageDisplay}/>
	     		</div>
	      	:	this.state.route=== 'register'
	      		?<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
	      		:<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>

				}     
      </div>
    ); 
  }
}

export default App;


// navigation
// Logo

// imageLinkForm
// rank
