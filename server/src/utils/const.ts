const DEVELOPMENT = 'development';

const COOKIE_NAME = 'todoToken';

enum Model {
  User = 'User',
  Task = 'Task',
  Token = 'Token',
}

enum Role {
  User = 'User',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
}

enum TypeTextField {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}

enum TypeToken {
  Access = 'access',
  Refresh = 'refresh',
}

enum ExpiresToken {
  Access = '15m',
  Refresh = '30d',
}

export {
  DEVELOPMENT,
  COOKIE_NAME,
  Model,
  Role,
  TypeTextField,
  TypeToken,
  ExpiresToken,
};
