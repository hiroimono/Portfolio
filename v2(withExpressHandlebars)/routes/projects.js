const express = require('express');
const url = require('url');
const router = express.Router();

const readDir = require('../readDir.js');
const readDirProjects =  readDir('/public/projects');
const projects = JSON.parse(readDirProjects);
console.log('inside of project folder: ', projects);

// Listing projects
router.get('/', (req, res) => {
	// console.log(req.url);
	// for (var i in projects){
		res.render('projects', {
			layout: 'main',
			projects : projects
		});
	// }
});


// Display add a new project for future :)
router.get('/add', (req, res) => res.render('add'));

module.exports = router;
