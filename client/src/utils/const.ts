const TOKEN_NAME = 'todo-token';

enum AppRoute {
  Root = '/',
  SignUp = '/signup',
  SignIn = '/signin',
  Profile = '/profile',
  Dashboard = '/dashboard',
}

enum ComponentStyles {
  Main = 'main',
  Centre = 'centre',
  FullHeight = 'fullHeight',
  Frame = 'frame',
  Modal = 'modal',
}

enum NameTextField {
  Email = 'email',
  Password = 'password',
  Task = 'task',
  Priority = 'priority',
}

enum TypeTextField {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}

enum VariantTextField {
  Standard = 'standard',
}

enum TypeButton {
  Button = 'button',
  Submit = 'submit',
}

enum VariantButton {
  Outlined = 'outlined',
  Contained = 'contained',
}

enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum NameSpace {
  UserData = 'USER_DATA',
  TaskData = 'TASK_DATA',
}

export {
  TOKEN_NAME,
  AppRoute,
  ComponentStyles,
  NameTextField,
  TypeTextField,
  VariantTextField,
  TypeButton,
  VariantButton,
  Role,
  AuthorizationStatus,
  NameSpace,
};
