const server = require('./api/server');

const port = process.env.PORT || 5000;
server.listen(port, () => {`\n*** Running on port ${port} ***\n`});