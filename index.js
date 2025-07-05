const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🚀 Deployed via GitHub Actions changes i have done !');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

