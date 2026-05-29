// Curated Indian foods with approximate calorie and macro values per standard serving.
// Values are approximations based on common recipes — actual values vary by cook and region.

export const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'breads', label: 'Breads', emoji: '🫓' },
  { id: 'rice', label: 'Rice & Biryani', emoji: '🍚' },
  { id: 'dal', label: 'Dal & Curry', emoji: '🥣' },
  { id: 'sabzi', label: 'Sabzi', emoji: '🥗' },
  { id: 'nonveg', label: 'Non-Veg', emoji: '🍗' },
  { id: 'south', label: 'South Indian', emoji: '🥞' },
  { id: 'snacks', label: 'Snacks & Chaat', emoji: '🥙' },
  { id: 'breakfast', label: 'Breakfast', emoji: '🍳' },
  { id: 'sweets', label: 'Sweets', emoji: '🍮' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
];

export const MEALS = [
  { id: 'breakfast', label: 'Breakfast', emoji: '🌅' },
  { id: 'lunch', label: 'Lunch', emoji: '☀️' },
  { id: 'snacks', label: 'Snacks', emoji: '🫖' },
  { id: 'dinner', label: 'Dinner', emoji: '🌙' },
];

// Values: calories (kcal), carbs (g), protein (g), fat (g)
export const FOODS = [
  // Breads
  { id: 'f1',  name: 'Roti / Chapati',        category: 'breads',    serving: '1 piece (40g)',  emoji: '🫓', calories: 120, carbs: 24, protein: 3,  fat: 3 },
  { id: 'f2',  name: 'Phulka',                category: 'breads',    serving: '1 piece (30g)',  emoji: '🫓', calories: 80,  carbs: 17, protein: 2,  fat: 1 },
  { id: 'f3',  name: 'Plain Paratha',         category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 180, carbs: 26, protein: 4,  fat: 7 },
  { id: 'f4',  name: 'Aloo Paratha',          category: 'breads',    serving: '1 piece',        emoji: '🥔', calories: 260, carbs: 34, protein: 6,  fat: 11 },
  { id: 'f5',  name: 'Paneer Paratha',        category: 'breads',    serving: '1 piece',        emoji: '🧀', calories: 290, carbs: 28, protein: 12, fat: 15 },
  { id: 'f6',  name: 'Naan',                  category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 260, carbs: 45, protein: 8,  fat: 6 },
  { id: 'f7',  name: 'Butter Naan',           category: 'breads',    serving: '1 piece',        emoji: '🧈', calories: 320, carbs: 45, protein: 8,  fat: 12 },
  { id: 'f8',  name: 'Kulcha',                category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 250, carbs: 42, protein: 7,  fat: 6 },
  { id: 'f9',  name: 'Missi Roti',            category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 160, carbs: 26, protein: 6,  fat: 4 },
  { id: 'f10', name: 'Thepla',                category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 140, carbs: 20, protein: 4,  fat: 5 },
  { id: 'f11', name: 'Puri',                  category: 'breads',    serving: '1 piece',        emoji: '🫓', calories: 100, carbs: 13, protein: 2,  fat: 5 },

  // Rice
  { id: 'f12', name: 'Steamed Rice',          category: 'rice',      serving: '1 cup (150g)',   emoji: '🍚', calories: 200, carbs: 44, protein: 4,  fat: 0 },
  { id: 'f13', name: 'Jeera Rice',            category: 'rice',      serving: '1 cup',          emoji: '🍚', calories: 230, carbs: 42, protein: 4,  fat: 5 },
  { id: 'f14', name: 'Veg Pulao',             category: 'rice',      serving: '1 cup',          emoji: '🥘', calories: 270, carbs: 42, protein: 6,  fat: 8 },
  { id: 'f15', name: 'Veg Biryani',           category: 'rice',      serving: '1 cup',          emoji: '🥘', calories: 290, carbs: 45, protein: 7,  fat: 9 },
  { id: 'f16', name: 'Chicken Biryani',       category: 'rice',      serving: '1 cup',          emoji: '🍗', calories: 340, carbs: 40, protein: 18, fat: 12 },
  { id: 'f17', name: 'Mutton Biryani',        category: 'rice',      serving: '1 cup',          emoji: '🍖', calories: 380, carbs: 40, protein: 20, fat: 15 },
  { id: 'f18', name: 'Curd Rice',             category: 'rice',      serving: '1 cup',          emoji: '🥛', calories: 190, carbs: 30, protein: 6,  fat: 4 },
  { id: 'f19', name: 'Lemon Rice',            category: 'rice',      serving: '1 cup',          emoji: '🍋', calories: 230, carbs: 40, protein: 4,  fat: 6 },
  { id: 'f20', name: 'Bisi Bele Bath',        category: 'rice',      serving: '1 cup',          emoji: '🥘', calories: 270, carbs: 42, protein: 9,  fat: 7 },

  // Dal & curry
  { id: 'f21', name: 'Dal Tadka',             category: 'dal',       serving: '1 bowl (200g)',  emoji: '🥣', calories: 180, carbs: 24, protein: 10, fat: 5 },
  { id: 'f22', name: 'Dal Makhani',           category: 'dal',       serving: '1 bowl',         emoji: '🥣', calories: 290, carbs: 30, protein: 12, fat: 14 },
  { id: 'f23', name: 'Yellow Dal',            category: 'dal',       serving: '1 bowl',         emoji: '🥣', calories: 170, carbs: 24, protein: 10, fat: 4 },
  { id: 'f24', name: 'Rajma',                 category: 'dal',       serving: '1 bowl',         emoji: '🫘', calories: 230, carbs: 32, protein: 11, fat: 6 },
  { id: 'f25', name: 'Chole',                 category: 'dal',       serving: '1 bowl',         emoji: '🫛', calories: 260, carbs: 36, protein: 12, fat: 7 },
  { id: 'f26', name: 'Sambar',                category: 'dal',       serving: '1 bowl',         emoji: '🥣', calories: 130, carbs: 20, protein: 7,  fat: 3 },
  { id: 'f27', name: 'Kadhi',                 category: 'dal',       serving: '1 bowl',         emoji: '🥣', calories: 170, carbs: 16, protein: 6,  fat: 9 },

  // Sabzi
  { id: 'f28', name: 'Aloo Gobi',             category: 'sabzi',     serving: '1 bowl',         emoji: '🥔', calories: 160, carbs: 20, protein: 4,  fat: 7 },
  { id: 'f29', name: 'Palak Paneer',          category: 'sabzi',     serving: '1 bowl',         emoji: '🥬', calories: 280, carbs: 12, protein: 14, fat: 20 },
  { id: 'f30', name: 'Paneer Butter Masala',  category: 'sabzi',     serving: '1 bowl',         emoji: '🧀', calories: 350, carbs: 16, protein: 14, fat: 26 },
  { id: 'f31', name: 'Matar Paneer',          category: 'sabzi',     serving: '1 bowl',         emoji: '🧀', calories: 290, carbs: 18, protein: 13, fat: 19 },
  { id: 'f32', name: 'Bhindi Masala',         category: 'sabzi',     serving: '1 bowl',         emoji: '🥗', calories: 170, carbs: 16, protein: 4,  fat: 10 },
  { id: 'f33', name: 'Baingan Bharta',        category: 'sabzi',     serving: '1 bowl',         emoji: '🍆', calories: 150, carbs: 16, protein: 4,  fat: 8 },
  { id: 'f34', name: 'Mix Veg',               category: 'sabzi',     serving: '1 bowl',         emoji: '🥗', calories: 150, carbs: 18, protein: 5,  fat: 6 },
  { id: 'f35', name: 'Aloo Matar',            category: 'sabzi',     serving: '1 bowl',         emoji: '🥔', calories: 180, carbs: 24, protein: 6,  fat: 6 },
  { id: 'f36', name: 'Kadhai Paneer',         category: 'sabzi',     serving: '1 bowl',         emoji: '🧀', calories: 320, carbs: 14, protein: 15, fat: 22 },
  { id: 'f37', name: 'Shahi Paneer',          category: 'sabzi',     serving: '1 bowl',         emoji: '🧀', calories: 370, carbs: 14, protein: 14, fat: 28 },
  { id: 'f38', name: 'Methi Malai Matar',     category: 'sabzi',     serving: '1 bowl',         emoji: '🌿', calories: 280, carbs: 16, protein: 8,  fat: 20 },

  // Non-veg
  { id: 'f39', name: 'Butter Chicken',        category: 'nonveg',    serving: '1 bowl',         emoji: '🍗', calories: 430, carbs: 12, protein: 26, fat: 30 },
  { id: 'f40', name: 'Chicken Curry',         category: 'nonveg',    serving: '1 bowl',         emoji: '🍗', calories: 290, carbs: 10, protein: 28, fat: 15 },
  { id: 'f41', name: 'Chicken Tikka',         category: 'nonveg',    serving: '4 pieces',       emoji: '🍢', calories: 230, carbs: 4,  protein: 30, fat: 10 },
  { id: 'f42', name: 'Chicken Korma',         category: 'nonveg',    serving: '1 bowl',         emoji: '🍗', calories: 350, carbs: 12, protein: 24, fat: 22 },
  { id: 'f43', name: 'Fish Curry',            category: 'nonveg',    serving: '1 bowl',         emoji: '🐟', calories: 260, carbs: 8,  protein: 28, fat: 12 },
  { id: 'f44', name: 'Mutton Curry',          category: 'nonveg',    serving: '1 bowl',         emoji: '🍖', calories: 380, carbs: 8,  protein: 28, fat: 26 },
  { id: 'f45', name: 'Egg Curry',             category: 'nonveg',    serving: '1 bowl (2 eggs)', emoji: '🥚', calories: 240, carbs: 8,  protein: 14, fat: 17 },

  // South Indian
  { id: 'f46', name: 'Idli',                  category: 'south',     serving: '2 pieces',       emoji: '🥟', calories: 120, carbs: 24, protein: 4,  fat: 1 },
  { id: 'f47', name: 'Plain Dosa',            category: 'south',     serving: '1 piece',        emoji: '🥞', calories: 170, carbs: 28, protein: 4,  fat: 5 },
  { id: 'f48', name: 'Masala Dosa',           category: 'south',     serving: '1 piece',        emoji: '🥞', calories: 270, carbs: 42, protein: 6,  fat: 9 },
  { id: 'f49', name: 'Uttapam',               category: 'south',     serving: '1 piece',        emoji: '🥞', calories: 190, carbs: 30, protein: 5,  fat: 6 },
  { id: 'f50', name: 'Medu Vada',             category: 'south',     serving: '1 piece',        emoji: '🍩', calories: 140, carbs: 14, protein: 4,  fat: 8 },
  { id: 'f51', name: 'Upma',                  category: 'south',     serving: '1 cup',          emoji: '🥣', calories: 230, carbs: 36, protein: 6,  fat: 7 },
  { id: 'f52', name: 'Pongal',                category: 'south',     serving: '1 cup',          emoji: '🍚', calories: 260, carbs: 40, protein: 7,  fat: 8 },

  // Snacks & chaat
  { id: 'f53', name: 'Samosa',                category: 'snacks',    serving: '1 piece',        emoji: '🥟', calories: 250, carbs: 28, protein: 5,  fat: 13 },
  { id: 'f54', name: 'Aloo Tikki',            category: 'snacks',    serving: '1 piece',        emoji: '🥔', calories: 150, carbs: 20, protein: 3,  fat: 7 },
  { id: 'f55', name: 'Dhokla',                category: 'snacks',    serving: '2 pieces',       emoji: '🧽', calories: 100, carbs: 18, protein: 4,  fat: 2 },
  { id: 'f56', name: 'Pakora',                category: 'snacks',    serving: '5 pieces',       emoji: '🥘', calories: 230, carbs: 22, protein: 6,  fat: 13 },
  { id: 'f57', name: 'Pav Bhaji',             category: 'snacks',    serving: '1 plate',        emoji: '🍞', calories: 400, carbs: 52, protein: 10, fat: 16 },
  { id: 'f58', name: 'Bhel Puri',             category: 'snacks',    serving: '1 plate',        emoji: '🍿', calories: 180, carbs: 34, protein: 4,  fat: 3 },
  { id: 'f59', name: 'Sev Puri',              category: 'snacks',    serving: '1 plate (6 pc)', emoji: '🥙', calories: 220, carbs: 32, protein: 5,  fat: 8 },
  { id: 'f60', name: 'Pani Puri',             category: 'snacks',    serving: '6 pieces',       emoji: '💦', calories: 150, carbs: 24, protein: 3,  fat: 5 },
  { id: 'f61', name: 'Vada Pav',              category: 'snacks',    serving: '1 piece',        emoji: '🍔', calories: 290, carbs: 38, protein: 7,  fat: 12 },
  { id: 'f62', name: 'Dahi Puri',             category: 'snacks',    serving: '1 plate',        emoji: '🥙', calories: 180, carbs: 26, protein: 5,  fat: 6 },
  { id: 'f63', name: 'Khandvi',               category: 'snacks',    serving: '1 plate',        emoji: '🌯', calories: 120, carbs: 18, protein: 5,  fat: 3 },
  { id: 'f64', name: 'Poha',                  category: 'breakfast', serving: '1 cup',          emoji: '🥣', calories: 180, carbs: 30, protein: 4,  fat: 5 },

  // Breakfast
  { id: 'f65', name: 'Besan Chilla',          category: 'breakfast', serving: '1 piece',        emoji: '🥞', calories: 150, carbs: 16, protein: 8,  fat: 6 },
  { id: 'f66', name: 'Chole Bhature',         category: 'breakfast', serving: '1 plate',        emoji: '🍞', calories: 480, carbs: 56, protein: 15, fat: 22 },
  { id: 'f67', name: 'Puri Bhaji',            category: 'breakfast', serving: '1 plate (3 pc)', emoji: '🫓', calories: 410, carbs: 48, protein: 8,  fat: 20 },
  { id: 'f68', name: 'Boiled Egg',            category: 'breakfast', serving: '1 egg',          emoji: '🥚', calories: 78,  carbs: 1,  protein: 6,  fat: 5 },
  { id: 'f69', name: 'Masala Omelette',       category: 'breakfast', serving: '2 eggs',         emoji: '🍳', calories: 210, carbs: 4,  protein: 13, fat: 16 },

  // Sweets
  { id: 'f70', name: 'Gulab Jamun',           category: 'sweets',    serving: '1 piece',        emoji: '🍮', calories: 150, carbs: 22, protein: 2,  fat: 6 },
  { id: 'f71', name: 'Jalebi',                category: 'sweets',    serving: '2 pieces',       emoji: '🍥', calories: 200, carbs: 35, protein: 2,  fat: 6 },
  { id: 'f72', name: 'Rasgulla',              category: 'sweets',    serving: '1 piece',        emoji: '🍬', calories: 90,  carbs: 18, protein: 2,  fat: 1 },
  { id: 'f73', name: 'Kheer',                 category: 'sweets',    serving: '1 bowl',         emoji: '🍚', calories: 270, carbs: 40, protein: 7,  fat: 9 },
  { id: 'f74', name: 'Gajar Halwa',           category: 'sweets',    serving: '1 bowl',         emoji: '🥕', calories: 320, carbs: 40, protein: 6,  fat: 15 },
  { id: 'f75', name: 'Besan Laddoo',          category: 'sweets',    serving: '1 piece',        emoji: '🟡', calories: 140, carbs: 18, protein: 3,  fat: 7 },
  { id: 'f76', name: 'Kaju Barfi',            category: 'sweets',    serving: '1 piece',        emoji: '◻️', calories: 160, carbs: 18, protein: 3,  fat: 8 },
  { id: 'f77', name: 'Kulfi',                 category: 'sweets',    serving: '1 stick',        emoji: '🍦', calories: 200, carbs: 22, protein: 5,  fat: 11 },

  // Drinks
  { id: 'f78', name: 'Masala Chai',           category: 'drinks',    serving: '1 cup',          emoji: '🫖', calories: 100, carbs: 14, protein: 3,  fat: 4 },
  { id: 'f79', name: 'Filter Coffee',         category: 'drinks',    serving: '1 cup',          emoji: '☕', calories: 70,  carbs: 10, protein: 2,  fat: 3 },
  { id: 'f80', name: 'Sweet Lassi',           category: 'drinks',    serving: '1 glass',        emoji: '🥛', calories: 240, carbs: 38, protein: 8,  fat: 6 },
  { id: 'f81', name: 'Salted Lassi',          category: 'drinks',    serving: '1 glass',        emoji: '🥛', calories: 130, carbs: 12, protein: 7,  fat: 5 },
  { id: 'f82', name: 'Buttermilk',            category: 'drinks',    serving: '1 glass',        emoji: '🥛', calories: 80,  carbs: 8,  protein: 5,  fat: 3 },
  { id: 'f83', name: 'Nimbu Pani',            category: 'drinks',    serving: '1 glass',        emoji: '🍋', calories: 80,  carbs: 20, protein: 0,  fat: 0 },
  { id: 'f84', name: 'Mango Lassi',           category: 'drinks',    serving: '1 glass',        emoji: '🥭', calories: 280, carbs: 46, protein: 8,  fat: 7 },

  // More breads (regional)
  { id: 'f85',  name: 'Bhatura',                category: 'breads',    serving: '1 piece',       emoji: '🫓', calories: 280, carbs: 40, protein: 6,  fat: 11 },
  { id: 'f86',  name: 'Makki di Roti',          category: 'breads',    serving: '1 piece',       emoji: '🫓', calories: 160, carbs: 28, protein: 4,  fat: 4 },
  { id: 'f87',  name: 'Gobi Paratha',           category: 'breads',    serving: '1 piece',       emoji: '🥬', calories: 240, carbs: 30, protein: 6,  fat: 10 },
  { id: 'f88',  name: 'Mooli Paratha',          category: 'breads',    serving: '1 piece',       emoji: '🫓', calories: 220, carbs: 30, protein: 5,  fat: 9 },
  { id: 'f89',  name: 'Methi Paratha',          category: 'breads',    serving: '1 piece',       emoji: '🌿', calories: 200, carbs: 28, protein: 5,  fat: 8 },
  { id: 'f90',  name: 'Pyaaz Paratha',          category: 'breads',    serving: '1 piece',       emoji: '🧅', calories: 230, carbs: 32, protein: 5,  fat: 9 },
  { id: 'f91',  name: 'Luchi',                  category: 'breads',    serving: '1 piece',       emoji: '🫓', calories: 110, carbs: 14, protein: 2,  fat: 5 },
  { id: 'f92',  name: 'Appam',                  category: 'south',     serving: '1 piece',       emoji: '🥞', calories: 140, carbs: 26, protein: 3,  fat: 3 },
  { id: 'f93',  name: 'Puttu',                  category: 'south',     serving: '1 cup',         emoji: '🍚', calories: 180, carbs: 36, protein: 4,  fat: 2 },

  // More rice dishes
  { id: 'f94',  name: 'Plain Khichdi',          category: 'rice',      serving: '1 bowl',        emoji: '🥣', calories: 210, carbs: 38, protein: 8,  fat: 4 },
  { id: 'f95',  name: 'Masala Khichdi',         category: 'rice',      serving: '1 bowl',        emoji: '🥣', calories: 260, carbs: 40, protein: 9,  fat: 7 },
  { id: 'f96',  name: 'Tamarind Rice (Pulihora)', category: 'rice',    serving: '1 cup',         emoji: '🍚', calories: 240, carbs: 42, protein: 5,  fat: 6 },
  { id: 'f97',  name: 'Coconut Rice',           category: 'rice',      serving: '1 cup',         emoji: '🥥', calories: 260, carbs: 40, protein: 4,  fat: 9 },
  { id: 'f98',  name: 'Tomato Rice',            category: 'rice',      serving: '1 cup',         emoji: '🍅', calories: 230, carbs: 42, protein: 4,  fat: 6 },
  { id: 'f99',  name: 'Veg Fried Rice',         category: 'rice',      serving: '1 cup',         emoji: '🍚', calories: 280, carbs: 44, protein: 6,  fat: 9 },
  { id: 'f100', name: 'Hyderabadi Dum Biryani', category: 'rice',      serving: '1 cup',         emoji: '🥘', calories: 320, carbs: 44, protein: 8,  fat: 12 },
  { id: 'f101', name: 'Prawn Biryani',          category: 'rice',      serving: '1 cup',         emoji: '🍤', calories: 340, carbs: 42, protein: 18, fat: 12 },

  // More dal & curries (regional)
  { id: 'f102', name: 'Moong Dal',              category: 'dal',       serving: '1 bowl',        emoji: '🥣', calories: 150, carbs: 22, protein: 10, fat: 3 },
  { id: 'f103', name: 'Masoor Dal',             category: 'dal',       serving: '1 bowl',        emoji: '🥣', calories: 170, carbs: 24, protein: 11, fat: 4 },
  { id: 'f104', name: 'Chana Dal',              category: 'dal',       serving: '1 bowl',        emoji: '🥣', calories: 200, carbs: 28, protein: 11, fat: 5 },
  { id: 'f105', name: 'Dal Palak',              category: 'dal',       serving: '1 bowl',        emoji: '🥬', calories: 190, carbs: 22, protein: 12, fat: 6 },
  { id: 'f106', name: 'Rasam',                  category: 'dal',       serving: '1 bowl',        emoji: '🍲', calories: 80,  carbs: 14, protein: 4,  fat: 2 },
  { id: 'f107', name: 'Pindi Chana',            category: 'dal',       serving: '1 bowl',        emoji: '🫛', calories: 280, carbs: 36, protein: 13, fat: 9 },
  { id: 'f108', name: 'Cholar Dal',             category: 'dal',       serving: '1 bowl',        emoji: '🥣', calories: 230, carbs: 30, protein: 11, fat: 7 },

  // More sabzi (regional)
  { id: 'f109', name: 'Sarson da Saag',         category: 'sabzi',     serving: '1 bowl',        emoji: '🥬', calories: 200, carbs: 14, protein: 7,  fat: 12 },
  { id: 'f110', name: 'Baingan Masala',         category: 'sabzi',     serving: '1 bowl',        emoji: '🍆', calories: 170, carbs: 16, protein: 4,  fat: 10 },
  { id: 'f111', name: 'Karela Fry',             category: 'sabzi',     serving: '1 bowl',        emoji: '🥒', calories: 140, carbs: 12, protein: 3,  fat: 9 },
  { id: 'f112', name: 'Lauki Ki Sabzi',         category: 'sabzi',     serving: '1 bowl',        emoji: '🥒', calories: 110, carbs: 12, protein: 3,  fat: 6 },
  { id: 'f113', name: 'Mushroom Masala',        category: 'sabzi',     serving: '1 bowl',        emoji: '🍄', calories: 210, carbs: 14, protein: 7,  fat: 14 },
  { id: 'f114', name: 'Cabbage Thoran',         category: 'sabzi',     serving: '1 bowl',        emoji: '🥬', calories: 120, carbs: 14, protein: 3,  fat: 6 },
  { id: 'f115', name: 'Avial',                  category: 'sabzi',     serving: '1 bowl',        emoji: '🥘', calories: 180, carbs: 16, protein: 4,  fat: 11 },
  { id: 'f116', name: 'Gatte ki Sabzi',         category: 'sabzi',     serving: '1 bowl',        emoji: '🥘', calories: 260, carbs: 24, protein: 9,  fat: 14 },
  { id: 'f117', name: 'Dum Aloo',               category: 'sabzi',     serving: '1 bowl',        emoji: '🥔', calories: 230, carbs: 28, protein: 5,  fat: 11 },
  { id: 'f118', name: 'Undhiyu',                category: 'sabzi',     serving: '1 bowl',        emoji: '🥗', calories: 280, carbs: 32, protein: 7,  fat: 14 },

  // More non-veg
  { id: 'f119', name: 'Tandoori Chicken',       category: 'nonveg',    serving: '2 pieces',      emoji: '🍗', calories: 280, carbs: 5,  protein: 36, fat: 13 },
  { id: 'f120', name: 'Chicken Seekh Kebab',    category: 'nonveg',    serving: '2 pieces',      emoji: '🍢', calories: 240, carbs: 4,  protein: 28, fat: 12 },
  { id: 'f121', name: 'Chicken 65',             category: 'nonveg',    serving: '1 plate',       emoji: '🍗', calories: 340, carbs: 14, protein: 30, fat: 18 },
  { id: 'f122', name: 'Chilli Chicken',         category: 'nonveg',    serving: '1 plate',       emoji: '🌶️', calories: 380, carbs: 18, protein: 28, fat: 22 },
  { id: 'f123', name: 'Chicken Manchurian',     category: 'nonveg',    serving: '1 plate',       emoji: '🍗', calories: 360, carbs: 22, protein: 26, fat: 20 },
  { id: 'f124', name: 'Rogan Josh',             category: 'nonveg',    serving: '1 bowl',        emoji: '🍖', calories: 400, carbs: 8,  protein: 30, fat: 28 },
  { id: 'f125', name: 'Prawn Curry',            category: 'nonveg',    serving: '1 bowl',        emoji: '🍤', calories: 280, carbs: 10, protein: 26, fat: 14 },
  { id: 'f126', name: 'Fish Fry',               category: 'nonveg',    serving: '2 pieces',      emoji: '🐟', calories: 260, carbs: 8,  protein: 28, fat: 13 },
  { id: 'f127', name: 'Paneer Tikka',           category: 'snacks',    serving: '4 pieces',      emoji: '🧀', calories: 310, carbs: 8,  protein: 18, fat: 22 },

  // More snacks & chaat & street food
  { id: 'f128', name: 'Misal Pav',              category: 'snacks',    serving: '1 plate',       emoji: '🍞', calories: 420, carbs: 52, protein: 14, fat: 16 },
  { id: 'f129', name: 'Kachori',                category: 'snacks',    serving: '1 piece',       emoji: '🥟', calories: 260, carbs: 28, protein: 6,  fat: 14 },
  { id: 'f130', name: 'Ragda Pattice',          category: 'snacks',    serving: '1 plate',       emoji: '🥙', calories: 340, carbs: 44, protein: 11, fat: 13 },
  { id: 'f131', name: 'Papdi Chaat',            category: 'snacks',    serving: '1 plate',       emoji: '🥙', calories: 240, carbs: 32, protein: 6,  fat: 10 },
  { id: 'f132', name: 'Dahi Vada',              category: 'snacks',    serving: '2 pieces',      emoji: '🥣', calories: 260, carbs: 28, protein: 10, fat: 12 },
  { id: 'f133', name: 'Veg Kathi Roll',         category: 'snacks',    serving: '1 roll',        emoji: '🌯', calories: 320, carbs: 42, protein: 9,  fat: 13 },
  { id: 'f134', name: 'Chicken Kathi Roll',     category: 'snacks',    serving: '1 roll',        emoji: '🌯', calories: 410, carbs: 40, protein: 22, fat: 18 },
  { id: 'f135', name: 'Hakka Noodles',          category: 'snacks',    serving: '1 plate',       emoji: '🍜', calories: 340, carbs: 52, protein: 8,  fat: 11 },
  { id: 'f136', name: 'Gobi Manchurian',        category: 'snacks',    serving: '1 plate',       emoji: '🥦', calories: 310, carbs: 34, protein: 7,  fat: 16 },
  { id: 'f137', name: 'Momos (Veg)',            category: 'snacks',    serving: '6 pieces',      emoji: '🥟', calories: 260, carbs: 36, protein: 7,  fat: 9 },
  { id: 'f138', name: 'Momos (Chicken)',        category: 'snacks',    serving: '6 pieces',      emoji: '🥟', calories: 300, carbs: 32, protein: 16, fat: 11 },
  { id: 'f139', name: 'Kanda Bhaji',            category: 'snacks',    serving: '1 plate',       emoji: '🧅', calories: 260, carbs: 26, protein: 6,  fat: 14 },

  // More breakfast
  { id: 'f140', name: 'Sabudana Khichdi',       category: 'breakfast', serving: '1 bowl',        emoji: '🥣', calories: 260, carbs: 40, protein: 5,  fat: 9 },
  { id: 'f141', name: 'Egg Bhurji',             category: 'breakfast', serving: '2 eggs',        emoji: '🍳', calories: 220, carbs: 6,  protein: 13, fat: 16 },
  { id: 'f142', name: 'Anda Paratha',           category: 'breakfast', serving: '1 piece',       emoji: '🥚', calories: 300, carbs: 28, protein: 11, fat: 17 },
  { id: 'f143', name: 'Aloo Puri',              category: 'breakfast', serving: '1 plate',       emoji: '🫓', calories: 450, carbs: 56, protein: 9,  fat: 21 },
  { id: 'f144', name: 'Idli Sambar (combo)',    category: 'breakfast', serving: '3 idli + sambar', emoji: '🥟', calories: 310, carbs: 52, protein: 12, fat: 5 },

  // More sweets (regional)
  { id: 'f145', name: 'Rasmalai',               category: 'sweets',    serving: '1 piece',       emoji: '🍮', calories: 170, carbs: 22, protein: 5,  fat: 7 },
  { id: 'f146', name: 'Motichoor Laddoo',       category: 'sweets',    serving: '1 piece',       emoji: '🟡', calories: 160, carbs: 24, protein: 2,  fat: 6 },
  { id: 'f147', name: 'Soan Papdi',             category: 'sweets',    serving: '1 piece',       emoji: '🍬', calories: 140, carbs: 18, protein: 2,  fat: 7 },
  { id: 'f148', name: 'Malpua',                 category: 'sweets',    serving: '1 piece',       emoji: '🥞', calories: 200, carbs: 28, protein: 3,  fat: 9 },
  { id: 'f149', name: 'Rabri',                  category: 'sweets',    serving: '1 bowl',        emoji: '🍶', calories: 280, carbs: 30, protein: 8,  fat: 14 },
  { id: 'f150', name: 'Puran Poli',             category: 'sweets',    serving: '1 piece',       emoji: '🫓', calories: 260, carbs: 42, protein: 6,  fat: 8 },
  { id: 'f151', name: 'Modak',                  category: 'sweets',    serving: '2 pieces',      emoji: '🍡', calories: 220, carbs: 32, protein: 4,  fat: 9 },
  { id: 'f152', name: 'Mishti Doi',             category: 'sweets',    serving: '1 bowl',        emoji: '🍶', calories: 210, carbs: 34, protein: 6,  fat: 6 },
  { id: 'f153', name: 'Mysore Pak',             category: 'sweets',    serving: '1 piece',       emoji: '🍬', calories: 180, carbs: 20, protein: 2,  fat: 11 },
  { id: 'f154', name: 'Payasam',                category: 'sweets',    serving: '1 bowl',        emoji: '🍮', calories: 240, carbs: 36, protein: 6,  fat: 9 },

  // More drinks
  { id: 'f155', name: 'Ginger Chai',            category: 'drinks',    serving: '1 cup',         emoji: '🫖', calories: 90,  carbs: 13, protein: 3,  fat: 4 },
  { id: 'f156', name: 'Masala Chaas',           category: 'drinks',    serving: '1 glass',       emoji: '🥛', calories: 70,  carbs: 6,  protein: 5,  fat: 3 },
  { id: 'f157', name: 'Jaljeera',               category: 'drinks',    serving: '1 glass',       emoji: '🧋', calories: 50,  carbs: 12, protein: 1,  fat: 0 },
  { id: 'f158', name: 'Aam Panna',              category: 'drinks',    serving: '1 glass',       emoji: '🥭', calories: 130, carbs: 32, protein: 1,  fat: 0 },
  { id: 'f159', name: 'Thandai',                category: 'drinks',    serving: '1 glass',       emoji: '🥛', calories: 280, carbs: 34, protein: 8,  fat: 11 },
  { id: 'f160', name: 'Badam Milk',             category: 'drinks',    serving: '1 glass',       emoji: '🥛', calories: 260, carbs: 30, protein: 9,  fat: 11 },
  { id: 'f161', name: 'Rose Milk',              category: 'drinks',    serving: '1 glass',       emoji: '🌹', calories: 220, carbs: 36, protein: 7,  fat: 5 },
  { id: 'f162', name: 'Coconut Water',          category: 'drinks',    serving: '1 glass',       emoji: '🥥', calories: 45,  carbs: 9,  protein: 2,  fat: 0 },
  { id: 'f163', name: 'Kokum Sherbet',          category: 'drinks',    serving: '1 glass',       emoji: '🧃', calories: 90,  carbs: 22, protein: 0,  fat: 0 },
  { id: 'f164', name: 'Filter Kaapi',           category: 'drinks',    serving: '1 cup',         emoji: '☕', calories: 110, carbs: 14, protein: 4,  fat: 5 },
];
