const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  id: { type: String, required: true },
  foodId: { type: String, required: true },
  foodName: { type: String, required: true },
  meal: { type: String, default: 'snacks' },
  servings: { type: Number, default: 1 },
  calories: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  protein: { type: Number, default: 0 },
  fat: { type: Number, default: 0 },
  date: { type: String, required: true },
});

const logSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, lowercase: true, unique: true },
    calorieTarget: { type: Number, default: 2000 },
    entries: [entrySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Log', logSchema);
