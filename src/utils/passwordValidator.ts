import { Password } from '../types/Password';

export function validatePassword(password: Password): boolean {
	const { symbol, min, max } = password.requirement;
	const count = password.password.split(symbol).length - 1;
	return count >= min && count <= max;
}
