import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

/* GET users listing. */
// GET - localhost:3000/todos
router.get('/', skillsCtrl.index)
// GET - localhost:3000/todos/new
router.get("/new", skillsCtrl.new)
// GET - localhost:3000/todos/:id
router.get("/:id", skillsCtrl.show)

// POST - localhost:3000/todos
router.post("/", skillsCtrl.create)

export {
  router
}
