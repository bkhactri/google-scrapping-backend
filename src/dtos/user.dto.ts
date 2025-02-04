import { UserAttributes } from '@src/interfaces/user.interface';

export class UserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
  accessToken?: string;

  constructor(user: UserAttributes) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.accessToken = user?.accessToken;
  }
}
