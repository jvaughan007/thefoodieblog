
import KetoBrekfst2 from './images/KetoBrekfst2.png';

export const recipes = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        author: 'Giuseppi Guanciale',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        image: 'https://cdn.apartmenttherapy.info/image/upload/v1702061337/k/Photo/Recipes/2023-12-carbonara/carbonara-0357.jpg',
        ingredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan', 'Pepper'],
        steps: [
            'Boil the pasta until al dente.',
            'Cook the pancetta in a pan until crispy.',
            'In a bowl, mix eggs and cheese.',
            'Combine the pasta and pancetta, then add the egg mixture off the heat.',
            'Serve with freshly ground black pepper and grated Parmesan cheese.'
        ],
      },
    {
      id: 2,
      title: 'Chicken Alfredo',
      author: 'Ezio Auditore',
      description: 'A rich and creamy pasta dish with grilled chicken and Alfredo sauce.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg?crop=0.9994472084024323xw:1xh;center,top&resize=1200:*',
      ingredients: ['Pasta', 'Chicken', 'Cream', 'Garlic', 'Parmesan'],
      steps: [
            'Cook the pasta.',
            'Grill the chicken.', 
            'Prepare the Alfredo sauce.',
            'Combine everything together.'
        ],
    },
    {
        id: 3,
        title: 'Perfect Keto Breakfast',
        author: 'Josh Vaughan',
        description: 'A hearty, filling, and satisfying ketogenic kickstart to your day!',
        image: KetoBrekfst2,
        ingredients: ['3 large, organic, free-range eggs', '1oz room temp grass fed Irish butter (Kerrygold), separated ', '1 large hass avocado', '4-6 strips of thick cut bacon', 'dill, salt, pepper, and garlic powder to taste'],
        steps: [
            'Heat a non-stick skillet on medium to medium-high heat and add bacon strips.',
            'Once the bacon is cooked to desired doneness, remove from heat anbd place on a rack or paper-towel lined plate to drain.',
            'If preferred, transfer bacon grease to storage vessel, clean pan and then return to heat.',
            'Add Irish butter to the pan and allow to melt and coat the bottom.',
            'While butter is melting, to a bowl add three whole eggs and whisk together. Once done, add eggs to pan and immediately start pushing cooked egg to center.',
            'Once the eggs reach a semi-cooked consistency, add in your seasonings. I recommend dill, with a touch of garlic powder.',
            'To finish the cook, sprinkle in about a teaspoons worth of water and cover to steam and turn heat down to low. While the eggs finish, cut and slice your avocado.',
            'Transfer all ingredients to plate and sprinkle salt and pepper to taste. Enjoy!'
        ]
    },
    // Add more mock recipes here
  ];
  