export const environment = {
  production: false,
  lang: 'vn',
  api: {
    url: 'http://pm-system.hp/api',
    path: {
      auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        register: '/auth/register',
      },
      user: {
        listing: "/user/list",
        crud: "/user"
      },
    },
  },
};
