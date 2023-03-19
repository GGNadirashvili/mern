//functions
const asyncHandler = require("express-async-handler");

// @description  get goal
// @route POST /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "get goal" });
});
// @description  Set goal
// @route GET /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
});
// @description  update  goal
// @route PUT /api/goals:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get goal  ${req.params.id}` });
});
// @description  delete  goal
// @route DELETE /api/goals:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get goal  ${req.params.id}` });
});

// for export  that func
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
