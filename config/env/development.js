

module.exports = {

  blueprints: {
    shortcuts: true,
  },
  localMysql: {
    adapter: 'sails-mysql',
    url: 'mysql://admin:adminF00b4r@host:3306/rndflo_com_dev_db',
  },
  models: {
    migrate: 'safe',
    connection: 'localMysql',

  },

};

