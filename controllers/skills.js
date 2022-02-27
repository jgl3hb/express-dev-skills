import * as skillsDb from "../data/skills-db.js"

function index(req, res) {
  skillsDb.find({}, function (error, ) {
    res.render('skills/index', {skills
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  console.log(req.params.id)
  skillsDb.findById(req.params.id, function (error, skills) {
    res.render('skills/show', {
      skills: skills,
      error: error
    })
  })
}

function newSkills(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  skillsDb.create(req.body, function (error, skills) {
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkills as new,
  create
}