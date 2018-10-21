const router = require('express').Router();
const axios = require('axios');

const githubUrl = 'https://api.github.com';

router.get('/:user/repos', async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(`${githubUrl}/users/${user}/repos`);
    const repos = response.data;

    return res.json({ repos });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

router.get('/:user/events', async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(`${githubUrl}/users/${user}/events`);
    const acceptedEvents = ['WatchEvent', 'ForkEvent', 'PushEvent'];
    const events = response.data.filter(event => acceptedEvents.includes(event.type));
    
    return res.json({ events });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

router.get('/search/users', async (req, res) => {
  try {
    const query = req.query.q;

    const response = await axios.get(`${githubUrl}/search/users?q=${query}`);
    const results = response.data.items;

    return res.json({ results });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

module.exports = router;
