import { UserOuput } from '../../../types/user-type';

const mapper = (user: UserOuput): UserOuput => ({
  id: user.id,
  email: user.email,
  password: user.password,
  role: user.role,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

export default mapper;
