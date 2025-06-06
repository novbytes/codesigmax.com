const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/exec', (req, res) => {
  const cmd = req.query.cmd;

  if (!cmd) {
    return res.status(400).json({ error: 'Query parameter "cmd" is required.' });
  }

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      return res.status(400).json({ stderr });
    }
    res.json({ output: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
