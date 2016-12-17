var Pool = require('pg').Pool;

// No need to set other configuration properties because they come from configured standard environment variables - e.g. PGUSER and PGHOST
var config = {
  max: process.env.DB_MAX_CLIENTS
}

module.exports = new Pool(config);