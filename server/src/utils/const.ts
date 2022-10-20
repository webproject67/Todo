const DEVELOPMENT = 'development';

const COOKIE_NAME = 'todoToken';

enum ExpiresToken {
  Access = '15m',
  Refresh = '30d',
}

enum TypeToken {
  Access = 'ACCESS',
  Refresh = 'REFRESH',
}

enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
}

enum Model {
  User = 'User',
  Task = 'Task',
  Token = 'Token',
}

enum TypeTextField {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}

export {
  DEVELOPMENT,
  COOKIE_NAME,
  ExpiresToken,
  TypeToken,
  Role,
  Model,
  TypeTextField,
};
