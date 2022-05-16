import React, { Component } from 'react';
import { useState } from 'react';
class Demo extends Component {
	state = { name:"Paula" } 
	render() { 
		return (
			<p>
				{this.state.name}
			</p>
		);
	}
}
 
export default Demo;

const Demo = () => {
	const [name, setName]=useState("Paula")
	return ( 
		<p>
			{name}
		</p>
	 );
}
 
export default Demo;
