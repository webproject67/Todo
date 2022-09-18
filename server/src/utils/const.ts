enum Role {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin',
}

enum TypeTextField {
  Email = 'email',
  Password = 'password',
}

enum TypeToken {
  Refresh = 'refresh',
  Access = 'access',
}

export { Role, TypeTextField, TypeToken };
