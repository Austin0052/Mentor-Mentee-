const express = require('express');
const router = express.Router();
const db = require('../database'); // Database connection

// Insert user and related details
router.post('/users', (req, res) => {
  const { name, position, company, city, overview, skills, languages, experience, education } = req.body;

  const userQuery = 'INSERT INTO users (name, position, company, city, overview) VALUES (?, ?, ?, ?, ?)';
  db.query(userQuery, [name, position, company, city, overview], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    const userId = result.insertId;

    const insertDetails = (query, values, errorMessage) => {
      db.query(query, values, (err) => {
        if (err) {
          console.error(errorMessage, err.message);
        }
      });
    };

    skills.forEach(skill => {
      insertDetails('INSERT INTO skills (user_id, skill) VALUES (?, ?)', [userId, skill], 'Error inserting skill');
    });

    languages.forEach(language => {
      insertDetails('INSERT INTO languages (user_id, language) VALUES (?, ?)', [userId, language], 'Error inserting language');
    });

    experience.forEach(exp => {
      insertDetails(
        'INSERT INTO experience (user_id, position, company, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, exp.position, exp.company, exp.startDate, exp.endDate, exp.description],
        'Error inserting experience'
      );
    });

    education.forEach(edu => {
      insertDetails(
        'INSERT INTO education (user_id, school, course, startDate, endDate) VALUES (?, ?, ?, ?, ?)',
        [userId, edu.school, edu.course, edu.startDate, edu.endDate],
        'Error inserting education'
      );
    });

    res.status(200).json({ message: 'User created successfully' });
  });
});

// Fetch user data by ID
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  const fetchUser = (query, params, errorMessage, callback) => {
    db.query(query, params, (err, results) => {
      if (err) {
        console.error(errorMessage, err.message);
        return res.status(500).json({ error: 'Database error' });
      }
      callback(results);
    });
  };

  fetchUser('SELECT * FROM users WHERE id = ?', [userId], 'Error fetching user', (userResult) => {
    if (userResult.length === 0) return res.status(404).json({ error: 'User not found' });

    const user = userResult[0];

    fetchUser('SELECT skill FROM skills WHERE user_id = ?', [userId], 'Error fetching skills', (skillsResult) => {
      user.skills = skillsResult.map(skill => skill.skill);

      fetchUser('SELECT language FROM languages WHERE user_id = ?', [userId], 'Error fetching languages', (languagesResult) => {
        user.languages = languagesResult.map(language => language.language);

        fetchUser('SELECT * FROM experience WHERE user_id = ?', [userId], 'Error fetching experience', (experienceResult) => {
          user.experience = experienceResult;

          fetchUser('SELECT * FROM education WHERE user_id = ?', [userId], 'Error fetching education', (educationResult) => {
            user.education = educationResult;

            res.status(200).json(user);
          });
        });
      });
    });
  });
});

module.exports = router;