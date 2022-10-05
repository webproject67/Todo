enum AppRoute {
  Root = '/',
  SignUp = '/signup',
  SignIn = '/signin',
  Profile = '/profile',
  Dashboard = '/dashboard',
}

enum Role {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin',
}

enum NameSpace {
  UserProcess = 'userProcess',
  UserData = 'userData',
  TaskData = 'taskData',
}

export { AppRoute, Role, NameSpace };
