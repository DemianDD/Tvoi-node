module.exports = {
  development: {
    url: 'postgres://root:0T4VDHyVkrjW9dXCltrBTfezfvjmybmz@dpg-ckoduns1tcps73f7snm0-a.frankfurt-postgres.render.com/tvoidb',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
};