export const environment = {
  production: false,
  lang: 'vn',
  server: 'local',
  api: {
    urlLocal: 'http://pm-system.hp/api',
    urlProd: 'https://pm-api.vietmasch.com/api',
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
      project: {
        listing: "/project/listing",
        crud: "/project",
        workRoute: {
          listing: "/project/work/listing",
          crud: "/project/work",
        },
        collaborator: {
          add: '/project/collaborator/add',
          remove: '/project/collaborator/remove'
        }
      }
    },
  },
};
