import { PasswordRequirement } from './PasswordRequirement';

export interface Password {
	requirement: PasswordRequirement;
	password: string;
}
