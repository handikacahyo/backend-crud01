var express = require("express");
var router = express.Router();
var models = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Create Food */
router.post("/createfood", (req, res) => {
  try {
    let obj = req.body;
    models.foodcrud
      .create(obj)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* Read Food */
router.get("/readfood", async (req, res) => {
  let foods = await models.foodcrud.findAll({});
  res.json(foods);
});

/* Update Food */
router.patch("/readfood/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    let obj = req.body;
    const updateFood = await models.foodcrud.update(obj, {
      where: { id: foodId },
    });
    if (updateFood) {
      res.json({
        status: "OK",
        messages: "Food Updated!",
        data: updateFood,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "ERROR",
      messages: error.messages,
      data: {},
    });
  }
});

/* Delete Food */
router.delete("/readfood/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    const delFood = await models.foodcrud.destroy({ where: { id: foodId } });
    if (delFood) {
      res.json({
        status: "OK",
        messages: "Food Deleted !",
        data: delFood,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      messages: error.messages,
      data: {},
    });
  }
});

module.exports = router;
