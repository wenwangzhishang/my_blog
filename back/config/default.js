module.exports = {
    port: 3000,
    session: {
      secret: 'dbtest',
      key: 'dbtest',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/dbtest'
}