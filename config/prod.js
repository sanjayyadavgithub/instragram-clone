module.exports = {
  MONGOURI:
    process.env.MOGOURI ||
    'mongodb+srv://instragram:instragram@cluster0.jx325.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', //'mongodb://localhost:27017/inster',
  JWT_SECRET: process.env.JWT_SEC || 'SEC_KEY',
  SENDGRID_API: process.env.SENDGRID_API,
  EMAIL: process.env.EMAIL,
};