const router = require('express').Router();
const axios = require('axios');
const parse = require('parse-link-header');

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

router.get('/:user/statistics', async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(`https://github-contributions-api.now.sh/v1/${user}`);
    const contributions = response.data.contributions;
    return res.json({ contributions });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

router.get('/users/:user', async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(`${githubUrl}/users/${user}`);
    const profile = response.data;
    return res.json({ profile });
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

router.get('/:user/received_events', async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(`${githubUrl}/users/${user}/received_events`);
    const events = response.data;

    const aggregatedEvents = {};

    events.forEach((event) => {
      const actor = event.actor.login;

      if (aggregatedEvents[actor]) {
        aggregatedEvents[actor] = aggregatedEvents[actor] + 1;
      } else {
        aggregatedEvents[actor] = 1;
      }
    });

    const sortedEvents = Object.keys(aggregatedEvents)
      .sort((a, b) => aggregatedEvents[b] - aggregatedEvents[a])
      .map(key => ({ [key]: aggregatedEvents[key] }));

    const topTenUsers = sortedEvents.slice(0, 10);
    return res.json({ top10: topTenUsers });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

router.get('/search/users', async (req, res) => {
  try {
    const { q, page } = req.query;

    const response = await axios.get(`${githubUrl}/search/users?q=${q}&page=${page}`);

    const results = response.data.items;
    const pagination = parse(response.headers.link);
    return res.json({ results, pagination });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ error: err.message });
  }
});

module.exports = router;
