import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage1 from './pages/MainPage1';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename='/khirokom/demo'>
				 <div>
					<Switch>
						<Route path='/' exact component={MainPage1} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Markup;