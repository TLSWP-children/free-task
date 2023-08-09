import { type UserDto } from '../api';
import { type User } from '../model/types';

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id,
    email: dto.email,
    login: dto.login,
  };
}
