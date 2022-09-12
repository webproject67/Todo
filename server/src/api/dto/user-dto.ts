import { Optional } from 'sequelize';
import { Role } from '../../utils/const';

type CreateUserDTO = {
  email: string;
  password: string;
  role: Role.Admin | Role.User;
};

type SignInUserDTO = Optional<CreateUserDTO, 'role'>;

export { CreateUserDTO, SignInUserDTO };
