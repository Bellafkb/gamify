const mysql = require("mysql");

const connectMysql = () => {
  try {
    const conn = mysql.createConnection(
      {
        host: process.env.HOST,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      },
      { multipleStatements: true }
    );
    conn.connect(err => {
      if (err) throw err;
      global.conn = conn;
      console.log(`db connected to port ${process.env.HOST}`);
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { connectMysql };
