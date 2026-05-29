// Full content for every resource-page article.
// Each article has: slug, title, subtitle, category, tag, readTime, hero (image url),
// intro (lead paragraph), sections: [{ heading, paragraphs: [], list? }], takeaway.

export const ARTICLES = [
  {
    slug: 'calorie-calc',
    category: 'calc',
    tag: 'Calculator',
    readTime: '8 min read',
    icon: '🧮',
    title: 'Figure out your real daily calorie need',
    subtitle: 'BMR, TDEE, and the honest truth about that "2,000 kcal" number on every package.',
    hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80&auto=format&fit=crop',
    intro:
      'Every food package you\'ve ever read references 2,000 kcal per day. That number is a reasonable average — and almost certainly wrong for you specifically. This guide walks through how to calculate a target that actually matches your body, your activity level, and your goals.',
    sections: [
      {
        heading: 'Start with BMR — your bare-minimum fuel',
        paragraphs: [
          'Basal Metabolic Rate (BMR) is the energy your body burns at complete rest: heart beating, lungs breathing, brain thinking, temperature regulating. It accounts for 60-70% of most people\'s daily calorie burn.',
          'The Mifflin-St Jeor equation is the modern standard. For men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5. For women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161.',
          'A 32-year-old woman, 65 kg, 165 cm tall, has a BMR of roughly 1,371 kcal. That\'s the energy she\'d burn lying in bed all day. Not what she actually needs.',
        ],
      },
      {
        heading: 'Multiply by your activity level to get TDEE',
        paragraphs: [
          'Total Daily Energy Expenditure (TDEE) adds your movement on top of BMR. Pick the multiplier that best matches your life:',
        ],
        list: [
          'Sedentary (desk job, little exercise): BMR × 1.2',
          'Lightly active (walks, light workout 1-3×/week): BMR × 1.375',
          'Moderately active (gym 3-5×/week, daily walks): BMR × 1.55',
          'Very active (hard training 6-7×/week): BMR × 1.725',
          'Athlete or heavy physical job: BMR × 1.9',
        ],
        paragraphsAfter: [
          'Our 32-year-old with a desk job lands at about 1,645 kcal. If she does yoga three times a week and walks daily, she\'s closer to 1,885. These are her maintenance numbers — the calories that keep her weight stable.',
        ],
      },
      {
        heading: 'Adjust for your goal',
        paragraphs: [
          'Want to lose weight? Subtract 300-500 kcal from TDEE. A 500 kcal deficit produces roughly 0.45 kg (1 lb) of fat loss per week — aggressive but sustainable. Bigger deficits backfire: you lose muscle, sleep worse, and binge on Friday.',
          'Want to build muscle? Add 200-400 kcal over TDEE and eat enough protein (we\'ll get to that). Anything more is just added fat.',
          'Maintenance — you\'re happy where you are and just want to stay there — is exactly TDEE. ThaliTrack defaults to 2,000 kcal, but you should set yours based on the math above.',
        ],
      },
      {
        heading: 'Why "2,000 kcal" is everywhere but often wrong',
        paragraphs: [
          'That number was fixed by regulators decades ago to give food labels a reference point. It\'s based on a moderately active adult male. A 55 kg, 60-year-old mother of two and a 22-year-old male runner have vastly different needs, but both see "2,000 kcal" on their dal packets.',
          'Don\'t use the label as your target. Use it as context: "this roti is 5% of my daily energy" becomes more or less true depending on your real target.',
        ],
      },
      {
        heading: 'Honest truths about calorie math',
        paragraphs: [
          'Every calculator produces an estimate, not a verdict. Real variance is ±10-15% between individuals with the same height/weight/age, thanks to differences in muscle mass, gut bacteria, and how hard your body fidgets all day.',
          'Track for two weeks at your calculated TDEE. If your weight doesn\'t move and you feel normal, the number is right. If you\'re slowly gaining or losing, adjust by 100 kcal and try again.',
        ],
      },
    ],
    takeaway:
      'Calculate your BMR, multiply by your activity level for TDEE, and set ThaliTrack to your goal-adjusted target. Re-check every 10-12 weeks — your body, and your needs, change.',
  },

  {
    slug: 'macros',
    category: 'macros',
    tag: 'Macros',
    readTime: '12 min read',
    icon: '💪',
    title: 'Carbs, protein, and fat — Indian edition',
    subtitle: 'Why Indian meals are often protein-light and the ten easiest ways to fix that without a single tub of whey.',
    hero: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1400&q=80&auto=format&fit=crop',
    intro:
      'Calories tell you how much you ate. Macros tell you what kind of fuel you gave your body. If you only track one thing, track calories. If you want to feel strong, lean, and satisfied, start paying attention to macros too — especially protein.',
    sections: [
      {
        heading: 'The three macros, explained simply',
        paragraphs: [
          'Carbohydrates (4 kcal/g) are your body\'s preferred fuel. Rice, roti, aloo, fruits, sugar — all carbs. They spike blood sugar and are rapidly converted to energy.',
          'Protein (4 kcal/g) builds and maintains muscle, hair, skin, enzymes, hormones — basically every tissue you own. Your body can\'t store it long-term, so you need it regularly.',
          'Fat (9 kcal/g) insulates, cushions organs, and absorbs vitamins. Ghee, oil, butter, paneer, nuts, egg yolks. More than twice as calorie-dense as carbs or protein, gram for gram.',
        ],
      },
      {
        heading: 'The "Indian protein problem"',
        paragraphs: [
          'A typical homemade North Indian meal — 3 rotis, a bowl of dal, a bowl of aloo sabzi, and raita — comes in around 500 kcal with only 18-22g of protein. That\'s 15-18% protein by calories.',
          'For an active adult, the sweet spot is 20-30% protein (1.2-1.8g per kg of bodyweight per day). Many Indian diets land at 10-14%, which is why people feel hungry 90 minutes after lunch even though they ate a full plate.',
          'This isn\'t a character flaw — it\'s structural. Rotis and rice are carb-heavy. Dal is the main plant protein, but it\'s often a supporting character, not the lead.',
        ],
      },
      {
        heading: 'Ten protein upgrades (no whey required)',
        paragraphs: ['Easy swaps and additions that each add 8-15g of protein to a meal:'],
        list: [
          'Add 50g paneer to your sabzi — +10g protein',
          'Swap one roti for two mini chillas (besan pancakes) — +8g',
          'Crack an egg into your poha or upma — +6g',
          'Eat a bowl of curd with lunch instead of water — +8g',
          'Switch from aloo paratha to paneer paratha — +6g',
          'Add a handful of peanuts or moong sprouts to salads — +6-8g',
          'Make your dal thicker (less water, more dal) — +4-5g per serving',
          'Include soya chunks or tofu once a week — +15-20g per serving',
          'Drink milk or lassi (not sugary sweet lassi) with breakfast — +8g',
          'Add hummus or black chana to your dinner plate once a week — +12-15g',
        ],
      },
      {
        heading: 'Carbs aren\'t the enemy — but watch portions',
        paragraphs: [
          'Indian meals are naturally carb-rich, and that\'s fine for most people. The issue is portion creep: "one small bowl" of rice can easily become 1.5-2 cups, which doubles the carb count.',
          'A practical rule: let carbs fill a quarter of your plate, not half. Half should be sabzi and dal; a quarter protein (paneer, eggs, chicken); a quarter rice/roti.',
        ],
      },
      {
        heading: 'Fats: not the villain — but the hidden calorie',
        paragraphs: [
          'Indian cooking uses ghee, mustard oil, refined oil, and cream generously. One tablespoon of ghee is 120 kcal. A paneer butter masala has 3-4 tablespoons of dairy fat in a single bowl.',
          'You don\'t need to cut fat. You need to notice it. Cook with less ghee at home (you\'ll barely taste the difference after a week) and save restaurant-rich dishes for when you actually want them.',
        ],
      },
      {
        heading: 'A reasonable macro split for Indian eaters',
        paragraphs: [
          'For maintenance and general health: 50% carbs, 25% protein, 25% fat. For fat loss: 40% carbs, 30% protein, 30% fat. For muscle gain: 45% carbs, 30% protein, 25% fat.',
          'Don\'t get obsessive about hitting exact percentages. Aim, measure, adjust. ThaliTrack\'s macro bar shows your daily split at a glance — use it directionally, not as a pass/fail.',
        ],
      },
    ],
    takeaway:
      'If you change one thing, add protein. Most Indian diets are carb-heavy and protein-light — flip that ratio by 10-15% and you\'ll feel stronger, more satisfied, and less snacky within two weeks.',
  },

  {
    slug: 'meal-plan-veg',
    category: 'meal-plans',
    tag: 'Meal plan',
    readTime: '15 min',
    icon: '📋',
    title: 'Sample vegetarian weekly meal plan (1,800 kcal)',
    subtitle: 'Seven days, four meals, balanced macros, rotating across regions. Built for ThaliTrack.',
    hero: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=1400&q=80&auto=format&fit=crop',
    intro:
      'This is a maintenance-ish meal plan for a moderately active vegetarian adult — roughly 1,800 kcal, ~85g protein, balanced across carbs and fats. Each day reflects real Indian cooking, not lab-flavored health food. Log every meal into ThaliTrack and you\'ll see macros land close to target without micromanaging.',
    sections: [
      {
        heading: 'Monday — light north Indian',
        paragraphs: ['Breakfast: 2 methi paratha + curd (400 kcal).', 'Lunch: 2 roti + dal tadka + bhindi masala + salad (520 kcal).', 'Snack: masala chai + 2 dhokla pieces (200 kcal).', 'Dinner: veg pulao + raita + 1 roti (680 kcal).'],
      },
      {
        heading: 'Tuesday — South Indian day',
        paragraphs: ['Breakfast: 3 idlis + sambar + coconut chutney (320 kcal).', 'Lunch: curd rice + avial + pickle (500 kcal).', 'Snack: masala chaas + handful of roasted peanuts (240 kcal).', 'Dinner: 2 dosas + sambar + mixed veg (560 kcal).'],
      },
      {
        heading: 'Wednesday — Gujarati-inspired',
        paragraphs: ['Breakfast: 2 thepla + curd + pickle (340 kcal).', 'Lunch: 2 bajra roti + dal + aloo gobi + kachumber (520 kcal).', 'Snack: 1 small poha bowl (180 kcal).', 'Dinner: undhiyu + 1 roti + buttermilk (680 kcal).'],
      },
      {
        heading: 'Thursday — protein push',
        paragraphs: ['Breakfast: besan chilla + mint chutney + 1 cup milk (420 kcal).', 'Lunch: rajma + 1 cup rice + cucumber salad (560 kcal).', 'Snack: ginger chai + 2 khakhra with peanut butter (220 kcal).', 'Dinner: palak paneer + 2 roti (590 kcal).'],
      },
      {
        heading: 'Friday — comfort food',
        paragraphs: ['Breakfast: upma + coconut chutney + filter coffee (380 kcal).', 'Lunch: 2 aloo paratha + curd + pickle (580 kcal).', 'Snack: lassi + 1 small samosa (280 kcal).', 'Dinner: mix veg + dal + 2 roti (560 kcal).'],
      },
      {
        heading: 'Saturday — celebration',
        paragraphs: ['Breakfast: 2 masala dosa + sambar + filter coffee (460 kcal).', 'Lunch: veg biryani + raita (540 kcal).', 'Snack: masala chai + 1 gulab jamun (240 kcal).', 'Dinner: 2 roti + paneer butter masala + salad (560 kcal).'],
      },
      {
        heading: 'Sunday — reset',
        paragraphs: ['Breakfast: 3 idli + sambar + chutney (310 kcal).', 'Lunch: kadhi + jeera rice + bhindi (560 kcal).', 'Snack: chaas + handful of almonds (220 kcal).', 'Dinner: moong dal khichdi + curd + pickle + salad (610 kcal).'],
      },
    ],
    takeaway:
      'Seven days, zero boring days. Rotate regions, keep protein sources varied (paneer, dal, curd, legumes), and use ThaliTrack to notice patterns — not hit precise numbers. Most weeks, your daily average lands within 150 kcal of the target.',
  },

  {
    slug: 'meal-plan-nonveg',
    category: 'meal-plans',
    tag: 'Meal plan',
    readTime: '15 min',
    icon: '🍗',
    title: 'Non-veg muscle-building plan (2,400 kcal)',
    subtitle: 'Lifter, runner, or just done with undereating — here\'s a week that respects the Indian kitchen.',
    hero: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1400&q=80&auto=format&fit=crop',
    intro:
      'Built for active adults in a slight caloric surplus. Roughly 2,400 kcal/day with 140-160g of protein — enough to support muscle growth on a 4-5 day training split. Emphasis on eggs, chicken, fish, paneer, and dal, with generous carbs around training time.',
    sections: [
      {
        heading: 'Monday — heavy training day',
        paragraphs: ['Breakfast: 4-egg masala omelette + 2 toast + glass of milk (540 kcal).', 'Lunch: 1.5 cup rice + chicken curry + salad (720 kcal).', 'Snack: peanut chikki + banana + black coffee (340 kcal).', 'Dinner: 3 roti + chana dal + palak paneer + raita (820 kcal).'],
      },
      {
        heading: 'Tuesday — active recovery',
        paragraphs: ['Breakfast: besan chilla + egg bhurji + chai (520 kcal).', 'Lunch: curd rice + 2 pieces fish fry + salad (680 kcal).', 'Snack: thandai (moderate sugar) + handful of nuts (380 kcal).', 'Dinner: chicken biryani (1.5 cup) + raita (820 kcal).'],
      },
      {
        heading: 'Wednesday — endurance day',
        paragraphs: ['Breakfast: 3 idli + sambar + 2 boiled eggs (420 kcal).', 'Lunch: 2 roti + dal makhani + chicken tikka + salad (760 kcal).', 'Snack: lassi + 2 dhokla (320 kcal).', 'Dinner: pulao + palak paneer + kachumber (900 kcal).'],
      },
      {
        heading: 'Thursday — big lifting day',
        paragraphs: ['Breakfast: 4 scrambled eggs + 2 paratha + milk (620 kcal).', 'Lunch: 1.5 cup rice + butter chicken + salad (780 kcal).', 'Snack: peanut butter toast + milk (380 kcal).', 'Dinner: 3 roti + moong dal + aloo gobi + curd (620 kcal).'],
      },
      {
        heading: 'Friday — moderate day',
        paragraphs: ['Breakfast: poha with extra peanuts + 2 boiled eggs + chai (520 kcal).', 'Lunch: 2 roti + rajma + rice + salad (740 kcal).', 'Snack: mango lassi + roasted chana (400 kcal).', 'Dinner: tandoori chicken + 2 naan + raita + salad (740 kcal).'],
      },
      {
        heading: 'Saturday — flex day',
        paragraphs: ['Breakfast: masala omelette + 2 paratha + chai (620 kcal).', 'Lunch: chole + 2 bhature (slightly smaller) + salad (780 kcal).', 'Snack: milk + 3 dates (320 kcal).', 'Dinner: mutton biryani (1.5 cup) + raita (680 kcal).'],
      },
      {
        heading: 'Sunday — reset',
        paragraphs: ['Breakfast: 3 idli + sambar + 2 egg omelette (480 kcal).', 'Lunch: curd rice + fish curry + salad (680 kcal).', 'Snack: milk + soan papdi (360 kcal).', 'Dinner: moong dal khichdi (large) + ghee + curd + kachumber (880 kcal).'],
      },
    ],
    takeaway:
      'For muscle gain, protein is the hill you defend. Eggs at breakfast, chicken or paneer at lunch, dal + curd at dinner — every day. Log it in ThaliTrack and make sure your protein macro lands 140g+ without exception.',
  },

  {
    slug: 'chai',
    category: 'education',
    tag: 'Deep dive',
    readTime: '6 min read',
    icon: '🫖',
    title: 'How bad is chai, really?',
    subtitle: 'Three cups a day with sugar and milk — the full calorie math, plus smarter ways to drink the national beverage.',
    hero: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=1400&q=80&auto=format&fit=crop',
    intro:
      'India runs on chai. Nobody\'s giving it up — and we\'re not asking you to. But if you\'re drinking three or four cups a day, it might be a quieter part of your calorie math than you realize.',
    sections: [
      {
        heading: 'The chai calorie ladder',
        paragraphs: [
          'A plain cup of black tea is 5-10 kcal. The calories come from three things: sugar, whole milk, and (in some recipes) ghee/cream.',
          'Standard masala chai recipe: 100 ml whole milk (65 kcal), 2 tsp sugar (32 kcal), tea, spices, ginger — total roughly 100 kcal per cup.',
          'Karak chai (double milk, extra sugar): 150 ml whole milk (95 kcal) + 3 tsp sugar (48 kcal) = closer to 145 kcal per cup.',
          'Tandoori chai or chai with malai on top: 180-220 kcal per cup.',
        ],
      },
      {
        heading: 'Three cups a day adds up',
        paragraphs: [
          'Standard chai × 3 = 300 kcal/day. That\'s 15% of an 1,800 kcal target — just from drinks.',
          'Over a year, those three cups = 110,000 kcal, or roughly 14 kg of body fat at maintenance. This is why slow, quiet sugar intake often matters more than the one samosa you feel guilty about.',
        ],
      },
      {
        heading: 'Smarter chai swaps (that still taste like chai)',
        paragraphs: ['Each swap saves 30-50 kcal per cup with minimal loss of enjoyment:'],
        list: [
          'Half toned milk + half water (instead of full whole milk) — save 25-30 kcal',
          '1 tsp sugar instead of 2 — save 16 kcal',
          'Use jaggery for flavor and a slower blood sugar rise — save ~10 kcal, feel more satisfied',
          'Try green tea with ginger and cardamom as an afternoon swap — save 90 kcal vs. milk chai',
          'Save the full-fat, full-sugar chai for your first cup of the morning, when you actually savor it',
        ],
      },
      {
        heading: 'What about caffeine?',
        paragraphs: [
          'A typical cup of chai has 40-60 mg of caffeine. Three cups is 120-180 mg — about a moderate coffee dose.',
          'Healthy adults tolerate up to 400 mg/day without issue. The catch: don\'t drink chai after 4pm if you want to sleep well. The caffeine has an 8-hour half-life; that 5pm cup is still active at 11pm.',
        ],
      },
      {
        heading: 'When chai actually helps',
        paragraphs: [
          'Pre-workout (30-45 minutes before), a cup of chai is a free performance boost — caffeine + small dose of simple sugar = focused, energized training.',
          'As a post-lunch ritual, a small cup of chai signals the end of the meal and curbs the sweet-craving that hits 20 minutes after a starchy lunch. Swap a gulab jamun for a cup of chai with half-sugar, save 120 kcal.',
        ],
      },
    ],
    takeaway:
      'Chai isn\'t the villain — three-cups-a-day with full milk and full sugar is. Track your cups in ThaliTrack for a week and then decide which ones you\'d actually trade. Most people can easily knock 150-200 kcal off their daily total without giving up the ritual.',
  },

  {
    slug: 'tiffin',
    category: 'lifestyle',
    tag: 'Lifestyle',
    readTime: '9 min read',
    icon: '🍱',
    title: 'Tiffin-box portion control — without dieting',
    subtitle: 'The classic three-compartment dabba, re-engineered. Veg/dal/roti ratios that keep you energized through a full workday.',
    hero: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&q=80&auto=format&fit=crop',
    intro:
      'Your tiffin box is accidentally the best portion-control tool you own. Three compartments, fixed volumes, no scale required. Use the ratios below and your mid-afternoon energy crash basically disappears.',
    sections: [
      {
        heading: 'The 2-1-1 rule',
        paragraphs: [
          'Divide your dabba into four equal parts: 2 parts vegetables/sabzi, 1 part protein (dal, paneer, eggs, chicken), 1 part carbs (rice/roti).',
          'Most people reverse this: 2 parts rice, 1 part sabzi, almost no dal. That\'s a classic "sleepy at 3pm" lunch.',
        ],
      },
      {
        heading: 'What goes in each compartment',
        paragraphs: ['The biggest compartment:'],
        list: [
          'Sabzi (bhindi, mix veg, aloo gobi, cabbage, palak) — 1.5 cups cooked',
          'Or a big salad (cucumber, carrot, tomato, onion, lemon) — 2 cups',
        ],
        paragraphsAfter: ['The protein compartment:'],
        listAfter: [
          'Dal (1 cup) OR paneer bhurji (¾ cup) OR 2 boiled eggs OR grilled chicken pieces (100g)',
          'Rotate proteins so lunch never gets boring',
        ],
      },
      {
        heading: 'The carbs compartment',
        paragraphs: [
          'Two medium rotis OR one cup cooked rice OR one small paratha. That\'s it.',
          'Carbs are not the enemy — but at lunch, they\'re often too much. A 12-2pm carb spike is exactly what kicks off the afternoon slump.',
        ],
      },
      {
        heading: 'A typical ThaliTrack-friendly tiffin',
        paragraphs: ['Monday lunch:'],
        list: [
          '1.5 cups mixed veg sabzi (220 kcal, 7g protein)',
          '1 cup dal tadka (180 kcal, 10g protein)',
          '2 rotis (240 kcal, 6g protein)',
          'Small side salad with curd',
          'Total: ~680 kcal, 28g protein — roughly a third of the day, with strong satiety',
        ],
      },
      {
        heading: 'The 4pm problem, solved',
        paragraphs: [
          'If you\'re always hungry at 4pm, the fix isn\'t a snack — it\'s more protein at 1pm. Add paneer, eggs, or an extra bowl of dal to lunch and watch the afternoon hunger disappear entirely.',
          'If you truly need a snack (and that\'s fine), pair protein with fiber: a handful of roasted chana + an apple beats a samosa every time. ThaliTrack logs both honestly.',
        ],
      },
      {
        heading: 'Batch prep makes this easy',
        paragraphs: [
          'Sunday evening: cook two sabzis, one dal, and one protein (paneer bhurji, boiled eggs, or grilled chicken). That\'s four lunches done.',
          'Tuesday evening: quick refresh — one new sabzi, keep the dal. Mix and match for rest of the week.',
        ],
      },
    ],
    takeaway:
      'A balanced tiffin box is the single biggest lever on daytime energy and long-term weight. Use the 2-1-1 ratio, emphasize protein, and log a week of lunches into ThaliTrack. You\'ll see your afternoon energy — and your numbers — change fast.',
  },

  {
    slug: 'marathon',
    category: 'fitness',
    tag: 'Fitness',
    readTime: '14 min read',
    icon: '🏃',
    title: 'Eating for a half-marathon (fuelled by idli)',
    subtitle: 'Pre-run, during-run, and post-run meals — all from the Indian kitchen. Written by runners, validated by Dr. Kavya.',
    hero: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1400&q=80&auto=format&fit=crop',
    intro:
      'You don\'t need gels, paste, or imported protein bars to train for a half-marathon. Idli, poha, dal rice, and a banana will take you to the finish line — if you time them right.',
    sections: [
      {
        heading: 'Three days before the race',
        paragraphs: [
          'Start carb-loading gently. This doesn\'t mean a thali binge — it means bumping carbs from 50% to 60-65% of total calories over 72 hours.',
          'Good choices: rice, roti, poha, upma, idli, aloo paratha, pasta, rasam-rice, sweet potato. Keep fat moderate (bloated runners don\'t finish well) and protein at 1.2g/kg bodyweight.',
          'Hydrate like your life depends on it. Add pinches of salt to your water; coconut water once a day.',
        ],
      },
      {
        heading: 'The night before',
        paragraphs: [
          'Dinner should be familiar — not the day to try "chicken tetrazzini." Dal rice + kachumber + small bowl of curd is a runner\'s friend.',
          'Avoid: very spicy food, new cuisines, lentils/beans in large quantities (hello, GI distress), alcohol.',
          'Sleep is more important than any last-minute food change. Eat early, stop scrolling, and sleep by 10pm.',
        ],
      },
      {
        heading: 'Race morning (2-3 hours before start)',
        paragraphs: [
          'Eat roughly 500-700 kcal of mostly-carbs: 2 aloo paratha with curd, OR 3 idli with chutney (light on sambar), OR poha with a banana, OR 2 slices of bread with jam and 1 boiled egg.',
          'Coffee or chai is fine — caffeine helps performance. Just drink it with water so you\'re not peeing at km 3.',
        ],
      },
      {
        heading: 'During the run',
        paragraphs: [
          'For runs up to 75 minutes, water is enough. For 90-minute-plus runs, you need 30-60g of carbs per hour.',
          'No-gel options: dates (1 medje date = ~20g carbs), small banana (25g), a packet of peda (1 piece = ~15g), or a tiny zip-lock of dry roasted puffed rice with jaggery.',
          'Sip water every 15 minutes. Electrolytes (nimbu-pani with salt) every 30-45 minutes if the weather is hot.',
        ],
      },
      {
        heading: 'Immediately after the finish',
        paragraphs: [
          'Within 30-45 minutes: get 20-30g of protein + 60-80g of carbs into you. The easiest Indian version: a big bowl of dal-chawal with a boiled egg, or chicken biryani (one cup), or paneer paratha + curd + a banana.',
          'Rehydrate. Aim to drink 1.5× the weight you lost (weigh yourself before and after for the data).',
        ],
      },
      {
        heading: 'The rest of race day',
        paragraphs: [
          'You\'ve earned a celebration meal — and you should have it. But also eat a second proper meal 3-4 hours later: protein + carbs + veggies. Your muscles are still rebuilding.',
          'Skip alcohol until dinner, and hydrate through the evening. Sleep heavy. Walk a bit tomorrow. You\'re a runner.',
        ],
      },
    ],
    takeaway:
      'Indian food is built for endurance athletes, actually — rice, dal, idli, poha, bananas, curd. Time it right, stay hydrated, and log your training meals in ThaliTrack so you know what works on race day before the race.',
  },

  {
    slug: 'diabetes',
    category: 'health',
    tag: 'Health',
    readTime: '10 min read',
    icon: '🩺',
    title: 'Eating with diabetes (Indian diet edition)',
    subtitle: 'Low-GI swaps, the truth about brown vs white rice, and the underrated grain that belongs on every diabetic\'s plate.',
    hero: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1400&q=80&auto=format&fit=crop',
    intro:
      'Diabetes management is mostly about post-meal blood sugar — keeping spikes gentle and recovery quick. Indian food, with its reliance on white rice and refined flour, needs thoughtful tweaks. Good news: the fixes are mostly delicious.',
    disclaimer: 'This guide is educational. Always work with your doctor and a certified dietitian for your personal plan — especially if you\'re on insulin or newer GLP-1 medications.',
    sections: [
      {
        heading: 'Understand glycemic index (GI), briefly',
        paragraphs: [
          'GI is a 0-100 scale of how quickly a food raises blood sugar. White rice is ~73 (high), basmati rice is ~58 (medium), roti is ~62, bajra roti is ~54.',
          'But GI alone can mislead — portion and combination matter more. A small bowl of white rice with dal, veggies, and ghee spikes you less than a big bowl of "healthier" oats with sugar.',
        ],
      },
      {
        heading: 'Five low-GI swaps that actually work',
        paragraphs: [],
        list: [
          'Swap white rice → parboiled (ukda) rice OR hand-pounded rice. GI drops by 10-15 points.',
          'Swap atta roti → bajra / jowar / ragi roti, 3-4×/week. Different nutrient profile, real satiety.',
          'Swap regular potato → sweet potato. Bigger carb dose per gram, but slower rise.',
          'Swap semolina upma → oats upma (steel-cut, not rolled). Longer chewing = lower GI.',
          'Swap white bread → multigrain sourdough. Fermentation lowers GI significantly.',
        ],
      },
      {
        heading: 'The bajra/jowar/ragi advantage',
        paragraphs: [
          'Millets are having a moment, and deservedly so. They\'re naturally lower-GI than wheat, gluten-free, and packed with magnesium and fiber.',
          'Start with 2-3 millet rotis per week and build up. Most people can handle 1 millet meal per day long-term. Full transition isn\'t necessary — moderation is.',
        ],
      },
      {
        heading: 'The "white rice" debate, settled',
        paragraphs: [
          'Brown rice has more fiber (3g vs 0.5g per cup cooked) and a modestly lower GI. But it\'s harder to digest for many Indians, and the palate-adjustment is real.',
          'Moderate path: 60% white rice, 40% brown/red/hand-pounded, cooked with 1 tsp ghee (yes, it lowers the glycemic response). Eat it with dal and sabzi — the fat + fiber + protein combo slows absorption dramatically.',
        ],
      },
      {
        heading: 'Timing matters as much as content',
        paragraphs: [
          'Don\'t skip meals. Big gaps → bigger spikes when you finally eat.',
          'Eat your veggies and dal first, rice last. Literally, the order within the meal. Studies show 20-30% lower post-meal glucose with this simple trick.',
          'Walk for 10-15 minutes after dinner. This single habit can reduce post-dinner glucose peaks by 15-25%. Don\'t run; just walk.',
        ],
      },
      {
        heading: 'What to watch closely',
        paragraphs: [
          'Fruit juices (even "fresh"): spike quickly, no fiber. Eat whole fruit instead.',
          'Sweet lassi and sugared chai: quiet carb bombs. One sweet lassi = 40g sugar.',
          'Packaged "diabetic-friendly" biscuits: often marginal improvements. Log them; don\'t assume.',
          'Rice flour items (bhajia, dosa with sugar batter): behave more like sugar than you\'d expect.',
        ],
      },
    ],
    takeaway:
      'Indian food and diabetes aren\'t incompatible — they just need attention to portions, pairings, and millet-rotation. Track every meal for two weeks to learn your personal spike patterns; you\'ll be surprised at what\'s safe and what isn\'t.',
  },

  {
    slug: 'sabzis',
    category: 'recipes',
    tag: 'Recipes',
    readTime: '11 min',
    icon: '👩‍🍳',
    title: 'Five low-oil sabzis that don\'t taste low-oil',
    subtitle: 'Smart techniques — dry-roasted spices, curd bases, steam-finishing — that deliver big flavor with half the ghee.',
    hero: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1400&q=80&auto=format&fit=crop',
    intro:
      'A classic restaurant sabzi uses 2-3 tablespoons of oil per bowl. That\'s 240-360 kcal from fat alone. The home cook\'s secret: you can halve the oil without halving the flavor, if you know three techniques.',
    sections: [
      {
        heading: 'The three low-oil techniques',
        paragraphs: [
          '1. Dry-roast spices before tempering. Whole cumin, coriander, fennel, and mustard release more flavor when toasted dry, so you need less oil later.',
          '2. Use curd or tomato as a base instead of a cream/coconut base. Same richness at a third of the calories.',
          '3. Steam-finish. Cover and let dishes cook in their own moisture for the last 5 minutes. Softens veggies without needing more oil.',
        ],
      },
      {
        heading: 'Recipe 1: Methi-Aloo (120 kcal/bowl)',
        paragraphs: [
          'Ingredients: 2 potatoes (cubed), 1 bunch methi leaves, 1 tsp oil, ½ tsp cumin, ½ tsp turmeric, salt, 1 green chili.',
          'Method: Heat 1 tsp oil (not 3 — that\'s the whole point). Crackle cumin, add potatoes + turmeric + salt, sauté 2 minutes. Cover and steam 10 minutes. Add methi, green chili, cover for 3 more minutes. Done.',
          'Macros: ~120 kcal, 20g carbs, 4g protein, 3g fat.',
        ],
      },
      {
        heading: 'Recipe 2: Bhindi fry — minus the deep-fry (100 kcal/bowl)',
        paragraphs: [
          'Ingredients: 250g bhindi, 1 tsp oil, amchur, red chili powder, salt, ½ tsp coriander powder.',
          'Method: Wash bhindi very dry (water = slime). Slice. Heat 1 tsp oil in a heavy pan. Add bhindi in a single layer. Do not stir for 3-4 minutes. Flip. Do not stir. Add spices at the end. The stillness + heavy pan = crispness that usually requires deep-frying.',
          'Macros: ~100 kcal, 10g carbs, 3g protein, 5g fat.',
        ],
      },
      {
        heading: 'Recipe 3: Dahi Baingan (145 kcal/bowl)',
        paragraphs: [
          'Ingredients: 1 large baingan (eggplant, cubed), 1 cup curd, 1 tsp oil, mustard seeds, curry leaves, turmeric, salt, 1 chili.',
          'Method: Roast cubed baingan in 1 tsp oil + salt + turmeric until caramelized (a proper non-stick pan is the key). Whisk curd smoothly, season it separately with curry leaves + mustard + chili + tiny pinch of sugar. Fold baingan into curd. Don\'t boil.',
          'Macros: ~145 kcal, 12g carbs, 5g protein, 8g fat.',
        ],
      },
      {
        heading: 'Recipe 4: Cabbage-peas thoran (110 kcal/bowl)',
        paragraphs: [
          'Ingredients: 2 cups shredded cabbage, ½ cup peas, 1 tsp oil (coconut if you have it), mustard, curry leaves, 1 tbsp grated coconut, pinch of turmeric.',
          'Method: Temper mustard + curry leaves in oil. Add cabbage, peas, salt, turmeric. Cover, low flame, 6-8 minutes. Add coconut at the end. High flavor, extremely low calorie.',
          'Macros: ~110 kcal, 12g carbs, 4g protein, 5g fat.',
        ],
      },
      {
        heading: 'Recipe 5: Palak-chana (160 kcal/bowl)',
        paragraphs: [
          'Ingredients: 1 bunch spinach (blanched + pureed), ½ cup boiled chickpeas, 1 tsp oil, garlic, jeera, tomato paste, garam masala, pinch of sugar.',
          'Method: Heat 1 tsp oil, jeera + garlic, add tomato paste + ½ cup water, simmer 2 minutes. Add palak puree + chickpeas + spices. Simmer 5 minutes. Finish with a spoon of lemon.',
          'Macros: ~160 kcal, 18g carbs, 8g protein, 6g fat.',
        ],
      },
      {
        heading: 'Where the kcal savings actually come from',
        paragraphs: [
          'A typical restaurant-style sabzi has 2 tbsp oil (240 kcal) + 2 tbsp cream or ghee (180 kcal) = 420 kcal of fat before you even count the vegetables.',
          'These five recipes land at 100-160 kcal per bowl — a full 250+ kcal savings per serving. Over a week of daily home cooking, that\'s 1,750 kcal / 0.22 kg of pure calorie load, painlessly removed.',
        ],
      },
    ],
    takeaway:
      'You don\'t need tasteless food to eat lighter at home. Learn three techniques — dry-roast, curd base, steam-finish — and rotate five good recipes. Log a week in ThaliTrack and watch your daily fat intake quietly drop by 20%.',
  },
];

export const ARTICLES_BY_SLUG = ARTICLES.reduce((acc, a) => {
  acc[a.slug] = a;
  return acc;
}, {});
