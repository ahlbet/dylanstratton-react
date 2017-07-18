import React from 'react';
import { render } from 'react-dom';
// import { Match, Miss } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				{ /* <Match exactly pattern="/" component={App} /> */}
				<App />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
