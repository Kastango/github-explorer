import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter'

import './styles/globals.scss';

export function App () {
	return (
		<>
			<RepositoryList/>
			<Counter/>
		</>
		);
}