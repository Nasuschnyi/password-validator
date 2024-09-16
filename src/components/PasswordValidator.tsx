import React, { useState } from 'react';
import { Password } from '../types/Password';
import { validatePassword } from '../utils/passwordValidator';

interface Props {
	passwords: Password[];
}

const PasswordValidator: React.FC<Props> = ({ passwords }) => {
	const [validPasswordsCount, setValidPasswordsCount] = useState(0);

	const handleValidate = () =>
		setValidPasswordsCount(passwords.filter(validatePassword).length);

	return (
		<section style={{ textAlign: 'center', padding: '24px' }}>
			<button
				onClick={handleValidate}
				style={{
					backgroundColor: '#4CAF50',
					color: '#fff',
					padding: '12px 24px',
					border: 'none',
					borderRadius: '6px',
					fontSize: '16px',
				}}
			>
				Валідувати паролі
			</button>
			<p style={{ fontSize: '18px', fontWeight: 'bold' }}>
				Кількість валідних паролів: {validPasswordsCount}
			</p>
		</section>
	);
};

export default PasswordValidator;
