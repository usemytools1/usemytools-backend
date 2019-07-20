const router = require("express").Router();
const knex = require("knex");

const restricted = require("../auth/restrictedMiddleware.js");
const crudAccess = require("../auth/crudAccess.js"); // restricts Put and Delete to matching usernames

const db = require("../data/dbConfig.js");

// create tool (restricted to users)
router.post("/", restricted, async (req, res) => {
  try {
    const [id] = await db("tools").insert(req.body);

    const tool = await db("tools")
      .where({
        id
      })
      .first();

    res.status(201).json(tool);
  } catch (error) {
    // const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({
      // message,
      error
    });
  }
});

// list all tools
router.get("/", async (req, res) => {
  // get the tools from the database
  try {
    const tools = await db("tools"); // all the records from the table
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a tool by id
router.get("/:id", async (req, res) => {
  // get the tools from the database
  try {
    const tool = await db("tools")
      .where({
        id: req.params.id
      })
      .first();
    res.status(200).json(tool);
  } catch (error) {
    res.status(500).json(error);
  }
});
// const errors = {
//     '19': 'Another record with that value exists',
// };

// update tools (restricted to users but not authored user)
router.put("/:id", restricted, crudAccess, async (req, res) => {
  try {
    const count = await db("tools")
      .where({
        id: req.params.id
      })
      .update(req.body);

    if (count > 0) {
      const tool = await db("tools")
        .where({
          id: req.params.id
        })
        .first();

      res.status(200).json(tool);
    } else {
      res.status(404).json({
        message: "Records not found"
      });
    }
  } catch (error) {}
});

// remove tools (inactivate the tool, restricted to users but not authored user)
router.delete("/:id", restricted, crudAccess, async (req, res) => {
  try {
    const count = await db("tools")
      .where({
        id: req.params.id
      })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: "Records not found"
      });
    }
  } catch (error) {}
});

module.exports = router;
