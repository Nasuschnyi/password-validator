import React from 'react';
import { Password } from './types/Password';
import PasswordValidator from './components/PasswordValidator';

const passwords: Password[] = [
	{ requirement: { symbol: 'a', min: 1, max: 5 }, password: 'abcdj' },
	{ requirement: { symbol: 'z', min: 2, max: 4 }, password: 'asfalseiruqwo' },
	{ requirement: { symbol: 'b', min: 3, max: 6 }, password: 'bhhkkbbjjjb' },
];

const App: React.FC = () => {
	return (
		<>
			<PasswordValidator passwords={passwords} />
		</>
	);
};

export default App;
