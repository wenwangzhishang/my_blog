module.exports = {
    port: 3000,
    session: {
      secret: 'vueblog',
      key: 'vueblog',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/vueblog'
}