const users = [

]

const noAllergen = "Free from Does Not Contain Declaration Obligatory Allergens"
const products = [
    {
        name: "Russet Potato",
        category: "vegetable",
        description: "",
        price: 0.97,
        nutritionalInfo:
            {
                caloriesPerServing: 60,
                servingsPerContainer: 1,
                servingSize: "1 medium potato",
                totalFat: ["1.5g", "2%"],
                cholesterol: ["25mg", "3%"],
                sodium: ["450mg", "19%"],
                totalCarb: ["1g", "0%"],
                protein: ["11g", "0%"],
                nutritionRating: 66,
                ingredients: "1 medium potato 2-1/4 to 3 inches across, raw",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Red Onion",
        category: "vegetable",
        description: "",
        price: 0.75,
        nutritionalInfo:
            {
                caloriesPerServing: "44",
                servingsPerContainer: 1,
                servingSize: "1 medium onion",
                totalFat: ["0.11g", "0.14%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["4.4mg", "0.19%"],
                totalCarb: ["10g", "3.64%"],
                protein: ["1.21g", "0%"],
                nutritionRating: 96,
                ingredients: "1 medium onion",
                allergenInfo: noAllergen
            },
        quantity: 100,
        image: []
    },
    {
        name: "Roma Tomato",
        category: "vegetable",
        description: "",
        price: 0.39,
        nutritionalInfo:
            {
                caloriesPerServing: 32,
                servingsPerContainer: 1,
                servingSize: "1 medium tomato",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["9mg", "6%"],
                totalCarb: ["7g", "5%"],
                protein: ["2g", "3%"],
                nutritionRating: 96,
                ingredients: "1 medium tomato",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Romain Lettuce",
        category: "vegetable",
        description: "",
        price: 2.19,
        nutritionalInfo:
            {
                caloriesPerServing: 6,
                servingsPerContainer: "100g",
                servingSize: "Approx. 3",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["8mg", "0%"],
                totalCarb: ["1g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: 95,
                ingredients: "1 medium lettuce head",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Carrots",
        category: "vegetable",
        description: "",
        price: 0.22,
        nutritionalInfo:
            {
                caloriesPerServing: 25,
                servingsPerContainer: 1,
                servingSize: "1 medium carrot",
                totalFat: ["0.15g", "0.19%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["42.09mg", "1.83%"],
                totalCarb: ["5.84g", "2.12%"],
                protein: ["0.57g", "0%"],
                nutritionRating: 97,
                ingredients: "1 medium carrot",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Bell Pepper",
        category: "vegetable",
        description: "",
        price: 1.59,
        nutritionalInfo:
            {
                caloriesPerServing: 9,
                servingsPerContainer: "Approx. 3",
                servingSize: "1 cup, sliced (92 g)",
                totalFat: ["0.16g", "0.21%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["2.8mg", "0.12%"],
                totalCarb: ["4.3g", "1.56%"],
                protein: ["0.791g", "0%"],
                nutritionRating: 96,
                ingredients: "1 medium sweet bell pepper",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "English Cucumber",
        category: "vegetable",
        description: "",
        price: 1.79,
        nutritionalInfo:
            {
                caloriesPerServing: 14,
                servingsPerContainer: 2,
                servingSize: "1 half medium cucumber",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["2mg", "5%"],
                totalCarb: ["3g", "0%"],
                protein: ["1g", "0%"],
                nutritionRating: 99,
                ingredients: "1 medium cucumber",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Celery",
        category: "vegetable",
        description: "",
        price: 2.99,
        nutritionalInfo:
            {
                caloriesPerServing: 14,
                servingsPerContainer: "Approx. 3",
                servingSize: "3oz (85 g)",
                totalFat: ["0.145g", "0.19%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["68mg", "2.96%"],
                totalCarb: ["2.525g", "0.92%"],
                protein: ["0.586g", "0%"],
                nutritionRating: 98,
                ingredients: "1 medium celery",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Broccoli Crowns",
        category: "vegetable",
        description: "",
        price: 1.37,
        nutritionalInfo:
            {
                caloriesPerServing: 35,
                servingsPerContainer: 1,
                servingSize: "1 crown",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["30mg", "1%"],
                totalCarb: ["6g", "2%"],
                protein: ["2g", "0%"],
                nutritionRating: 90,
                ingredients: "1 broccoli crown",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Whole Baby Bell Mushrooms",
        category: "vegetable",
        description: "",
        price: 3.19,
        nutritionalInfo:
            {
                caloriesPerServing: 20,
                servingsPerContainer: "Approx. 5",
                servingSize: "1 cup (86 g)",
                totalFat: ["0.301g", "0.39%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["7.74mg", "0.34%"],
                totalCarb: ["3.328g", "1.21%"],
                protein: ["1.815g", "0%"],
                nutritionRating: 97,
                ingredients: "Portobello mushrooms",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Organic Spinach",
        category: "vegetable",
        description: "",
        price: 2.50,
        nutritionalInfo:
            {
                caloriesPerServing: 107,
                servingsPerContainer: "Approx. 6",
                servingSize: "2 cups (85 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["65mg", "2.83%"],
                totalCarb: ["3g", "1.09%"],
                protein: ["2g", "0%"],
                nutritionRating: 99,
                ingredients: "Baby Spinach",
                allergenInfo: noAllergen
            },
            quantity: 20,
        image: []
    },
    {
        name: "Corn on the Cob",
        category: "vegetable",
        description: "",
        price: 0.50,
        nutritionalInfo:
            {
                caloriesPerServing: 90,
                servingsPerContainer: "1 ear (medium) (102 g)",
                servingSize: "1 ear",
                totalFat: ["1.377g", "1.77%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["15.3mg", "0.67%"],
                totalCarb: ["19.074g", "6.94%"],
                protein: ["3.335g", "0%"],
                nutritionRating: 90,
                ingredients: "Corn",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Garden Salad Mix",
        category: "vegetable",
        description: "",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 15,
                servingsPerContainer: "Approx. 3",
                servingSize: "1.5 cups (85 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["15mg", "0.65%"],
                totalCarb: ["3g", "1.09%"],
                protein: ["1g", "0%"],
                nutritionRating: 94,
                ingredients: "Iceburg Lettuce, Carrots, Red Cabbage",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Cabbage",
        category: "vegetable",
        description: "",
        price: 2.50,
        nutritionalInfo:
            {
                caloriesPerServing: 1,
                servingsPerContainer: 4,
                servingSize: "1 quarter head",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: 89,
                ingredients: "Cabbage",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Green Beans",
        category: "vegetable",
        description: "",
        price: 2.99,
        nutritionalInfo:
            {
                caloriesPerServing: 30,
                servingsPerContainer: "",
                servingSize: "1 cup",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["5mg", "0%"],
                totalCarb: ["6g", "2%"],
                protein: ["2g", "0%"],
                nutritionRating: 92,
                ingredients: "Green beans",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Cauliflower",
        category: "vegetable",
        description: "",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 30,
                servingsPerContainer: "",
                servingSize: "1 medium cauliflower head",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["30mg", "5%"],
                totalCarb: ["5g", "4%"],
                protein: ["2g", "4%"],
                nutritionRating: 90,
                ingredients: "Cauliflower",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Garlic",
        category: "vegetable",
        description: "",
        price: 0.50,
        nutritionalInfo:
            {
                caloriesPerServing: 45,
                servingsPerContainer: "Approx. 6",
                servingSize: "2 cloves",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1mg", "0%"],
                totalCarb: ["1g", "1%"],
                protein: ["0g", "0%"],
                nutritionRating: 86,
                ingredients: "Garlic",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Organic Asparagus Bundle",
        category: "vegetable",
        description: "",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 20,
                servingsPerContainer: 3,
                servingSize: "5 medium spears",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["3g", "1%"],
                protein: ["0g", "0%"],
                nutritionRating: 84,
                ingredients: "Asparagus",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Brussel Sprouts",
        category: "vegetable",
        description: "",
        price: 2.99,
        nutritionalInfo:
            {
                caloriesPerServing: 40,
                servingsPerContainer: "Approx. 5",
                servingSize: "1 cup (88 g)",
                totalFat: ["0.264g", "0.34%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["22mg", "0.96%"],
                totalCarb: ["7.876g", "2.86%"],
                protein: ["2.974g", "0%"],
                nutritionRating: 98,
                ingredients: "Brussel Sprouts",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Kale",
        category: "vegetable",
        description: "",
        price: 2.99,
        nutritionalInfo:
            {
                caloriesPerServing: 8,
                servingsPerContainer: "Approx. 4",
                servingSize: "1 cup (16 g)",
                totalFat: ["0.15g", "0.19%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["6mg", "0.26%"],
                totalCarb: ["1.4g", "0.51%"],
                protein: ["0.685g", "0%"],
                nutritionRating: 97,
                ingredients: "Kale",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Banana",
        category: "fruit",
        description: "",
        price: 0.28,
        nutritionalInfo:
            {
                caloriesPerServing: 105,
                servingsPerContainer: "1 banana (118 g)",
                servingSize: "1 medium banana",
                totalFat: ["0g", "1%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["27g", "9%"],
                protein: ["1g", "0%"],
                nutritionRating: 91,
                ingredients: "Banana",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Fuji Apple",
        category: "fruit",
        description: "",
        price: 0.99,
        nutritionalInfo:
            {
                caloriesPerServing: 95,
                servingsPerContainer: 1,
                servingSize: "1 medium apple",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["2mg", "0%"],
                totalCarb: ["25g", "8%"],
                protein: ["0g", "0%"],
                nutritionRating: 92,
                ingredients: "Fuji apple",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Grapes",
        category: "fruit",
        description: "",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 35,
                servingsPerContainer: "Approx. 3",
                servingSize: "0.33 oz (10 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["5mg", "0%"],
                totalCarb: ["9g", "3%"],
                protein: ["0g", "0%"],
                nutritionRating: 89,
                ingredients: "Grapes",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Strawberries",
        category: "fruit",
        description: "",
        price: 3.50,
        nutritionalInfo:
            {
                caloriesPerServing: 24,
                servingsPerContainer: "Approx. 3",
                servingSize: "1 cup (whole) (72 g)",
                totalFat: ["0.16g", "0.28%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0.72mg", "0.03%"],
                totalCarb: ["5.53g", "2.01%"],
                protein: ["0.482g", "0%"],
                nutritionRating: 96,
                ingredients: "Strawberry",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Watermelon",
        category: "fruit",
        description: "50% water, 50% melon. It's in the name.",
        price: 4.99,
        nutritionalInfo:
            {
                caloriesPerServing: 30,
                servingsPerContainer: "Approx. 100",
                servingSize: "100g",
                totalFat: ["0.2g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1mg", "0%"],
                totalCarb: ["7.6g", "3%"],
                protein: ["0.6g", "1%"],
                nutritionRating: 95,
                ingredients: "Watermelon",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Avocado",
        category: "fruit",
        description: "Some say millenials would go extinct without them.",
        price: 0.99,
        nutritionalInfo:
            {
                caloriesPerServing: 80,
                servingsPerContainer: "4",
                servingSize: "0.25 avocado (50 g)",
                totalFat: ["7.33g", "9.4%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["3.5mg", "0.15%"],
                totalCarb: ["4.265g", "1.55%"],
                protein: ["1g", "0%"],
                nutritionRating: 97,
                ingredients: "Hass Avocado",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Blueberries",
        category: "fruit",
        description: "I can't eat these after what happened to that girl in Willy Wonka and the Chocolate Factory, but I suppose they have their place.",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 95,
                servingsPerContainer: "Approx. 2",
                servingSize: "1 cup (147 g)",
                totalFat: ["0.488g", "0.63%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1.48mg", "0.06%"],
                totalCarb: ["21.445g", "7.8%"],
                protein: ["1.095g", "0%"],
                nutritionRating: 95,
                ingredients: "Blueberries",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Plum",
        category: "fruit",
        description: "Never in my life have I witnessed another human being eat one of these. These fruits are 100% part of the matrix.",
        price: "0.75",
        nutritionalInfo:
            {
                caloriesPerServing: 80,
                servingsPerContainer: 1,
                servingSize: "1 medium plum",
                totalFat: ["0.462g", "0.59%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["18.843g", "6.85%"],
                protein: ["01.155g", "0%"],
                nutritionRating: 95,
                ingredients: "Plum",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Navel Orange",
        category: "fruit",
        description: "How my father managed to tear these suckers open with his bare hands will forever remain a mystery to me.",
        price: 1.50,
        nutritionalInfo:
            {
                caloriesPerServing: 70,
                servingsPerContainer: 1,
                servingSize: "1 medium orange",
                totalFat: ["0.21gg", "0.32%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1.4mg", "0.06%"],
                totalCarb: ["18g", "6%"],
                protein: ["1.27g", "0%"],
                nutritionRating: 95,
                ingredients: "Organic Navel Orange",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Pineapple",
        category: "fruit",
        description: "The domicile of everyone's favorite yellow square that inspired an entire generation.",
        price: 2.50,
        nutritionalInfo:
            {
                caloriesPerServing: 82,
                servingsPerContainer: "Approx. 5",
                servingSize: "1 cup, chunks (165 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["2mg", "0%"],
                totalCarb: ["22g", "7%"],
                protein: ["1g", "0%"],
                nutritionRating: "94",
                ingredients: "Pineapple",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Fresh Raspberries",
        category: "fruit",
        description: "Everybody says it RAZZberries. Do raspberries have raspy voices? What gives.",
        price: 3.59,
        nutritionalInfo:
            {
                caloriesPerServing: 32,
                servingsPerContainer: "Approx. 3",
                servingSize: "0.5 cup (61.5 g)",
                totalFat: ["0.4g", "0.51%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0.62mg", "0.03%"],
                totalCarb: ["7g", "2.55%"],
                protein: ["0.738g", "0%"],
                nutritionRating: 96,
                ingredients: "Raspberries",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Cherries",
        category: "fruit",
        description: "I am told by others that cherries are sweet like other fruit, and are NOT supposed to taste kind of spicy and make your throat feel funky. What a world.",
        price: 4.99,
        nutritionalInfo:
            {
                caloriesPerServing: 100,
                servingsPerContainer: "Approx. 3",
                servingSize: "0.75 cup (140 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["24g", "8.73%"],
                protein: ["1g", "0%"],
                nutritionRating: 89,
                ingredients: "Cherries",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Blackberries",
        category: "fruit",
        description: "These are like 99% crunchy seed, 1% actual berry.",
        price: 3.99,
        nutritionalInfo:
            {
                caloriesPerServing: 62,
                servingsPerContainer: "Approx. 3",
                servingSize: "1 cup (144 g)",
                totalFat: ["0.71g", "0.91%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1.44mg", "0.06%"],
                totalCarb: ["14g", "5.09%"],
                protein: ["2g", "0%"],
                nutritionRating: 97,
                ingredients: "Blackberries",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Bartlett Pear",
        category: "fruit",
        description: "The shape of this fruit makes me inexplicably nervous, therefore, I have avoided them my entire life.",
        price: 1.50,
        nutritionalInfo:
            {
                caloriesPerServing: 112,
                servingsPerContainer: 1,
                servingSize: "1 medium pear",
                totalFat: ["0.28g", "0.36%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1.77mg", "0.08%"],
                totalCarb: ["26.57g", "9.66%"],
                protein: ["0.69g", "0%"],
                nutritionRating: 95,
                ingredients: "Bartlett pear",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Lemon",
        category: "fruit",
        description: "If these fall into the hands of Cave Johnson, we are doomed!",
        price: 0.79,
        nutritionalInfo:
            {
                caloriesPerServing: 17,
                servingsPerContainer: "4 slices",
                servingSize: "1 slice (58 g)",
                totalFat: ["0.17g", "0.22%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["1.16mg", "0.05%"],
                totalCarb: ["5g", "1.82%"],
                protein: ["0.64g", "0%"],
                nutritionRating: 96,
                ingredients: "Lemon",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Lime",
        category: "fruit",
        description: "The lime is an underdog compared to the lemon, which is already the underdog of all other fruits.",
        price: 0.59,
        nutritionalInfo:
            {
                caloriesPerServing: 20,
                servingsPerContainer: 1,
                servingSize: "1 medium (67 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["7g", "2%"],
                protein: ["0g", "0%"],
                nutritionRating: 93,
                ingredients: "Lime",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Fresh Kiwi",
        category: "fruit",
        description: "Not only is it tasty, but it's easy on the eyes (figuratively and literally).",
        price: 1.50,
        nutritionalInfo:
            {
                caloriesPerServing: 50,
                servingsPerContainer: 1,
                servingSize: "1 medium kiwi",
                totalFat: ["0g", "0%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["26g", "9.45%"],
                protein: ["2g", "0%"],
                nutritionRating: 94,
                ingredients: "Kiwi",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Grapefruit",
        category: "fruit",
        description: 'Chandler Bing: "Could the name of this fruit BE more confusing?"',
        price: 1.35,
        nutritionalInfo:
            {
                caloriesPerServing: 52,
                servingsPerContainer: 1,
                servingSize: "0.5 fruit (123 g)",
                totalFat: ["0.17g", "0.22%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["13g", "4.73%"],
                protein: ["0.947g", "0%"],
                nutritionRating: 95,
                ingredients: "Grapefruit",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Mango",
        category: "fruit",
        description: "I used to think Crash Bandicoot ate these, but they are actually wampa fruits.",
        price: 0.99,
        nutritionalInfo:
            {
                caloriesPerServing: 35,
                servingsPerContainer: 1,
                servingSize: "0.33 oz (10 g)",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0mg", "0%"],
                totalCarb: ["9g", "3%"],
                protein: ["1g", "1%"],
                nutritionRating: 91,
                ingredients: "Mango",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Chicken Breast",
        category: "protein",
        description: "Something tasty to peck at.",
        price: 13.20,
        nutritionalInfo:
            {
                caloriesPerServing: 110,
                servingsPerContainer: 20,
                servingSize: "100g",
                totalFat: ["2.5g", "3.85%"],
                cholesterol: ["55mg", "18.33%"],
                sodium: ["230mg", "9.58%"],
                totalCarb: ["0g", "0%"],
                protein: ["23g", "0%"],
                nutritionRating: 79,
                ingredients: "Chicken Breasts, 15% Solution That Contains Chicken Broth, Carrageenan and Salt",
                allergenInfo: "Free from Crustaceans and their derivates,Sesame Seeds and their derivates,Wheat and Their Derivatives,Eggs and their derivates,Fish and their derivates,Soybean and its Derivatives,Milk and its derivates,Tree Nuts and Their Derivatives,Peanuts and their derivates."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Eggs",
        category: "protein",
        description: "Unforunately, we do not currently have eggs in stock of the green variety, only the standard color. Check back again later!",
        price: 1.99,
        nutritionalInfo:
            {
                caloriesPerServing: 70,
                servingsPerContainer: 12,
                servingSize: "1 egg (50 g)",
                totalFat: ["5g", "6.41%"],
                cholesterol: ["185mg", "61.67%"],
                sodium: ["70mg", "3.04%"],
                totalCarb: ["0g", "0%"],
                protein: ["6g", "0%"],
                nutritionRating: 84,
                ingredients: "Egg",
                allergenInfo: "Contains Eggs and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Steak",
        category: "protein",
        description: "Laypeople call it steak, Fresh Shopper calls it the Signature Ron Swanson.",
        price: 15.75,
        nutritionalInfo:
            {
                caloriesPerServing: 280,
                servingsPerContainer: "Approx. 2.5",
                servingSize: "4 oz (112 g)",
                totalFat: ["22g", "33.85%"],
                cholesterol: ["75mg", "25%"],
                sodium: ["55mg", "2.29%"],
                totalCarb: ["0g", "0%"],
                protein: ["21g", "0%"],
                nutritionRating: 64,
                ingredients: "Beef",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Pork Chops",
        category: "protein",
        description: "",
        price: 5.99,
        nutritionalInfo:
            {
                caloriesPerServing: 180,
                servingsPerContainer: 6,
                servingSize: "4 oz (113 g)",
                totalFat: ["8g", "10%"],
                cholesterol: ["75mg", "25%"],
                sodium: ["55mg", "2%"],
                totalCarb: ["0g", "0%"],
                protein: ["24g", "0%"],
                nutritionRating: 76,
                ingredients: "Pork",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Ground Beef",
        category: "protein",
        description: "Just be sure nobody at the party gets the ground chuck confused with your friend Chuck!!",
        price: 15.99,
        nutritionalInfo:
            {
                caloriesPerServing: 290,
                servingsPerContainer: 12,
                servingSize: "1/4 lb",
                totalFat: ["23g", "35%"],
                cholesterol: ["80mg", "27%"],
                sodium: ["075mg", "3%"],
                totalCarb: ["0g", "0%"],
                protein: ["19g", "0%"],
                nutritionRating: 63,
                ingredients: "Ground Beef",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Ground Turkey",
        category: "protein",
        description: "An alternative way to enjoy the Thanksgiving staple!",
        price: 4.99,
        nutritionalInfo:
            {
                caloriesPerServing: 230,
                servingsPerContainer: 4,
                servingSize: "4 oz (112 g)",
                totalFat: ["17g", "26.15%"],
                cholesterol: ["80mg", "26.67%"],
                sodium: ["100mg", "4.17%"],
                totalCarb: ["0g", "0%"],
                protein: ["19g", "0%"],
                nutritionRating: 75,
                ingredients: "Turkey, Natural flavoring",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Ham",
        category: "protein",
        description: "It may not be green, but it sure is lean!",
        price: 7.99,
        nutritionalInfo:
            {
                caloriesPerServing: 60,
                servingsPerContainer: 4,
                servingSize: "2 oz (56 g)",
                totalFat: ["1g", "1.54%"],
                cholesterol: ["30mg", "10%"],
                sodium: ["580mg", "24.17%"],
                totalCarb: ["2g", "0.67%"],
                protein: ["0g", "0%"],
                nutritionRating: 54,
                ingredients: "Smoked Ham With Natural Juices, Cured With: Water, Salt, Sugar, Dextrose, Contains Less Than 2% Sodium Phosphate, Sodium Erythorbate, Sodium Nitrite",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Bacon",
        category: "protein",
        description: "50% of the Ron Swanson Signature Breakfast. The other half is eggs.",
        price: 4.49,
        nutritionalInfo:
            {
                caloriesPerServing: 80,
                servingsPerContainer: 6,
                servingSize: "2 oz",
                totalFat: ["7g", "11%"],
                cholesterol: ["15mg", "5%"],
                sodium: ["270mg", "11%"],
                totalCarb: ["0g", "0%"],
                protein: ["5g", "0%"],
                nutritionRating: 38,
                ingredients: "CURED WITH: WATER, SALT, SUGAR, SODIUM PHOSPHATE, SODIUM ERYTHORBATE, SODIUM NITRITE.",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Sausage Links",
        category: "protein",
        description: "I've never seen sausage stringed together in a chain in real life like I always see in the cartoons...",
        price: 4.99,
        nutritionalInfo:
            {
                caloriesPerServing: 170,
                servingsPerContainer: 4,
                servingSize: "3 cooked links",
                totalFat: ["19g", "20%"],
                cholesterol: ["40mg", "13.33%"],
                sodium: ["490mg", "20.42%"],
                totalCarb: ["2g", "0.67%"],
                protein: ["10g", "0%"],
                nutritionRating: 38,
                ingredients: "Pork, Water, Corn Syrup, and Less Than 2% of the Following: Salt, Pork Broth With Natural Flavorings, Dextrose, Lemon Juice Powder (Corn Syrup Solids, Lemon Juice Solids, and Natural Flavors), Natural Flavors, BHA, Propyl Gallate, Citric Acid, Collagen Casing.",
                allergenInfo: "Contains Corn and Its Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Salami",
        category: "protein",
        description: "Pro-tip: do NOT code a fake grocery store website when you are hungry.",
        price: 5.99,
        nutritionalInfo:
            {
                caloriesPerServing: 110,
                servingsPerContainer: 6,
                servingSize: "5 slices (28 g)",
                totalFat: ["9g", "13.85%"],
                cholesterol: ["30mg", "10%"],
                sodium: ["430mg", "17.92%"],
                totalCarb: ["1g", "0.33%"],
                protein: ["6g", "0%"],
                nutritionRating: 41,
                ingredients: "Pork, Beef, Salt, Dextrose, Lactic Acid Starter Culture, Flavorings, Natural Smoked Flavoring, Spice, Sodium Nitrite, BHA, BHT, Citric Acid",
                allergenInfo: noAllergen
            },
            quantity: 20,
        image: []
    },
    {
        name: "Lamb Chops",
        category: "protein",
        description: "Why say chicken leg or turkey leg, but make the switch for ~*~ Leg of Lamb ~*~ ?",
        price: 15.99,
        nutritionalInfo:
            {
                caloriesPerServing: 320,
                servingsPerContainer: 4,
                servingSize: "4 oz (112 g)",
                totalFat: ["26g", "40%"],
                cholesterol: ["80mg", "26.67%"],
                sodium: ["65mg", "2.71%"],
                totalCarb: ["0g", "0%"],
                protein: ["19g", "0%"],
                nutritionRating: 62,
                ingredients: "Natural lamb",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Shrimp",
        category: "protein",
        description: "Stay tuned for the Fresh Shopper and Bubba-Gump Shrimp Extravaganza next summer!",
        price: 8.99,
        nutritionalInfo:
            {
                caloriesPerServing: 60,
                servingsPerContainer: 5,
                servingSize: "3 oz (85 g)",
                totalFat: ["1g", "1%"],
                cholesterol: ["105g", "35%"],
                sodium: ["480mg", "21%"],
                totalCarb: ["1g", "0%"],
                protein: ["12g", "0%"],
                nutritionRating: 67,
                ingredients: "Shrimp, Salt, Sodium Tripolyphosphate (To Retain Moisture)",
                allergenInfo: "Contains Shrimp and its Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Ground Bison",
        category: "protein",
        description: "",
        price: 10.99,
        nutritionalInfo:
            {
                caloriesPerServing: 190,
                servingsPerContainer: 4,
                servingSize: "4 oz (112 g)",
                totalFat: ["11g", "16.92%"],
                cholesterol: ["50mg", "16.67%"],
                sodium: ["60mg", "2.5%"],
                totalCarb: ["0g", "0%"],
                protein: ["20g", "0%"],
                nutritionRating: 75,
                ingredients: "Bison",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Salmon",
        category: "protein",
        description: "Tastes great, but smells fishy...",
        price: 10.99,
        nutritionalInfo:
            {
                caloriesPerServing: 140,
                servingsPerContainer: 8,
                servingSize: "4 oz (112 g)",
                totalFat: ["5g", "6.41%"],
                cholesterol: ["50mg", "16.67%"],
                sodium: ["85mg", "3.7%"],
                totalCarb: ["0g", "0%"],
                protein: ["23g", "0%"],
                nutritionRating: 82,
                ingredients: "Pink Salmon, Water, Sodium Tripolyphosphate (To Retain Moisture).",
                allergenInfo: "Contains Fish and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Whole Frozen Duck",
        category: "protein",
        description: "Eh, what's up, Duck?",
        price: 15.19,
        nutritionalInfo:
            {
                caloriesPerServing: 250,
                servingsPerContainer: 4,
                servingSize: "1.5 lbs",
                totalFat: ["17g", "26.15%"],
                cholesterol: ["70mg", "23.33%"],
                sodium: ["320mg", "13.33%"],
                totalCarb: ["7g", "2.33%"],
                protein: ["17g", "0%"],
                nutritionRating: 69,
                ingredients: "Duck, Orange Sauce Ingredients: Orange Juice from Concentrate, Water, Sugar, Modified Corn Starch, Dextrose, Citric Acid, Salt, Natural Flavor, Torula Yeast, Xanthan Gum, Sodium Benzoate Added To Retard Spoilage, Caramel Color, Spice, Extractives of Paprika, Onion Powder",
                allergenInfo: "Contains Corn and its derivates"
            },
        quantity: 20,
        image: []
    },
    {
        name: "Goose",
        category: "protein",
        description: "Humanely raised in a free-range environment",
        price: 250.99,
        nutritionalInfo:
            {
                caloriesPerServing: 300,
                servingsPerContainer: 6,
                servingSize: "(405 g)",
                totalFat: ["9g", "12%"],
                cholesterol: ["180mg", "60%"],
                sodium: ["115g", "5%"],
                totalCarb: ["0g", "0%"],
                protein: ["55g", "0%"],
                nutritionRating: 65,
                ingredients: "Goose",
                allergenInfo: "Contains Corn and its derivates"
            },
        quantity: 20,
        image: []
    },
    {
        name: "Lobster Tail",
        category: "protein",
        description: "Arguably the fanciest of all seafood.",
        price: 6.50,
        nutritionalInfo:
            {
                caloriesPerServing: 70,
                servingsPerContainer: 1,
                servingSize: "3 oz (85g)",
                totalFat: ["1g", "1%"],
                cholesterol: ["110mg", "37%"],
                sodium: ["360mg", "16%"],
                totalCarb: ["0g", "0%"],
                protein: ["14g", "0%"],
                nutritionRating: 74,
                ingredients: "Lobster",
                allergenInfo: "Contains Shellfish and its derivates"
            },
        quantity: 20,
        image: []
    },
    {
        name: "Whole Oysters Boiled in Water",
        category: "protein",
        description: "We'll even let you keep the pearl if you find one.",
        price: 3.69,
        nutritionalInfo:
            {
                caloriesPerServing: 160,
                servingsPerContainer: "Approx. 2.5",
                servingSize: "3 oz (85 g)",
                totalFat: ["7g", "8.97%"],
                cholesterol: ["135mg", "45%"],
                sodium: ["650g", "28.26%"],
                totalCarb: ["2g", "0.73%"],
                protein: ["25g", "0%"],
                nutritionRating: 59,
                ingredients: "Whole Oysters, Water, Salt.",
                allergenInfo: noAllergen
            },
        quantity: 20,
        image: []
    },
    {
        name: "Crab",
        category: "protein",
        description: "All the krab with none of the krust.",
        price: 12.99,
        nutritionalInfo:
            {
                caloriesPerServing: 70,
                servingsPerContainer: 3,
                servingSize: "1/3 container",
                totalFat: ["0.5g", "1%"],
                cholesterol: ["80mg", "27%"],
                sodium: ["120mg", "5%"],
                totalCarb: ["0g", "0%"],
                protein: ["16g", "0%"],
                nutritionRating: 82,
                ingredients: "Blue Swimming Crab Meat, Sodium Acid Pyrophosphate (to Retain Color).",
                allergenInfo: "Contains Crustaceans and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Frozen Sea Scallops",
        category: "protein",
        description: "Just look at these little guys. Irresistable.",
        price: 19.95,
        nutritionalInfo:
            {
                caloriesPerServing: 80,
                servingsPerContainer: 3,
                servingSize: "4 oz (112 g)",
                totalFat: ["0.5g", "0.64%"],
                cholesterol: ["25mg", "8.33%"],
                sodium: ["240mg", "10.43%"],
                totalCarb: ["4g", "1.45%"],
                protein: ["14g", "0%"],
                nutritionRating: 80,
                ingredients: "Sea Scallops, Water, Sodium Tripolyphosphate (To Retain Moisture).",
                allergenInfo: "Contains Molluscs and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Everything Bagels",
        category: "grain",
        description: "It's everything you've ever wanted.",
        price: 4.79,
        nutritionalInfo:
            {
                caloriesPerServing: 290,
                servingsPerContainer: 6,
                servingSize: "1 bagel (95 g)",
                totalFat: ["3.5g", "4%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["410mg", "18%"],
                totalCarb: ["53g", "19%"],
                protein: ["9g", "0%"],
                nutritionRating: 52,
                ingredients: "Enriched Wheat Flour (Flour, Malted Barley Flour, Reduced Iron, Niacin, Thamin Mononitrate (Vitamin B1), Riboflavin (Vitamin B2 Folic Acid], Water, Sugar, Sunflower Seeds, Yeast, Wheat Gluten, Sesame Seeds, Onion, Salt, Cornmeal Calcium Propionate and Sorbic Acid (to Preserve Freshness), Poppy Seeds, Mono- and Diglycerides Garlic, Citric Acid, Guar Gum, Maltodextrin Vegetable Oil (Soybean), Cellulose Gum, Cornstarch Algin, Soy Lecithin.",
                allergenInfo: "Contains Sesame Seeds and their derivates,Wheat and Their Derivatives,Cereals and Their Derivatives,Soybean and its Derivatives. May contain Eggs and their derivates,Milk and its derivates,Tree Nuts and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Pita chips",
        category: "grain",
        description: "A more delicious snack has never been made.",
        price: 4.99,
        nutritionalInfo:
            {
                caloriesPerServing: 130,
                servingsPerContainer: "Approz. 7",
                servingSize: "About 10 chips (28 g)",
                totalFat: ["5g", "6%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["270mg", "12%"],
                totalCarb: ["19g", "7%"],
                protein: ["3g", "0%"],
                nutritionRating: 52,
                ingredients: "Enriched Wheat Flour (Wheat Flour, Niacin, Reduced Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Sunflower Oil and/or Canola Oil, Sea Salt, Whole Wheat Flour, and Less than 2% of the Following: Organic Cane Sugar, Oat Fiber, Yeast, Malted Barley Flour, Rosemary Extract (Antioxidant), and Ascorbic Acid (Antioxidant).",
                allergenInfo: "Contains Wheat and Their Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Buttermilk Biscuit Dough",
        category: "grain",
        description: "Almost as good as granny's...",
        price: 3.79,
        nutritionalInfo:
            {
                caloriesPerServing: 180,
                servingsPerContainer: 8,
                servingSize: "1 biscuit",
                totalFat: ["7g", "9%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["470mg", "21%"],
                totalCarb: ["26g", "10%"],
                protein: ["3g", "0%"],
                nutritionRating: 32,
                ingredients: "Enriched Flour Bleached (Wheat Flour, Niacin, Ferrous Sulfate, Thiamin Mononitrate, Riboflavin, Folic Acid), Water, Palm and Soybean Oil, Sugar, Palm Kernel Oil, Baking Powder (Sodium Acid Pyrophosphate, Baking Soda, Sodium Aluminum Phosphate), Contains 2% or Less of: Dextrose, Salt, Potassium Chloride, Xanthan Gum, Natural and Artificial Flavor.",
                allergenInfo: "Contains Wheat and Their Derivatives,Soybean and its Derivatives. May contain Milk and its Derivatives."
            },
        quantity: 20,
        image: []
    },
    {
        name: "Wheat Bread",
        category: "grain",
        description: "Absolutely timeless.",
        price: 5.79,
        nutritionalInfo:
            {
                caloriesPerServing: 50,
                servingsPerContainer: 21,
                servingSize: "1 slice (27 g)",
                totalFat: ["1g", "1%"],
                cholesterol: ["0mg", "0%"],
                sodium: ["130mg", "6%"],
                totalCarb: ["9g", "3%"],
                protein: ["4g", "8%"],
                nutritionRating: 71,
                ingredients: "Whole wheat flour, water, modified wheat starch, wheat gluten, yeast, wheat protein isolate, oat fiber, inulin, pea protein, palm oil. Contains 2% or less of: vinegar, salt, soybean oil, oligofructose, natural and artificial flavors, sucralose, calcium propionate (preservative), sodium stearoyl lactylate, sodium metabisulfite, ammonium sulfate, ascorbic acid . CONTAINS: WHEAT.",
                allergenInfo: "Contains Wheat and Their Derivatives. Free from Sesame Seeds and their derivates,Crustaceans and their derivates,Eggs and their derivates,Fish and their derivates,Soybean and its Derivatives,Milk and its derivates,Tree Nuts and Their Derivatives,Peanuts and their derivates."
            },
        quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },
    {
        name: "",
        category: "",
        description: "",
        price: "",
        nutritionalInfo:
            {
                caloriesPerServing: "",
                servingsPerContainer: "",
                servingSize: "",
                totalFat: ["0g", "0%"],
                cholesterol: ["0g", "0%"],
                sodium: ["0g", "0%"],
                totalCarb: ["0g", "0%"],
                protein: ["0g", "0%"],
                nutritionRating: "",
                ingredients: [],
                allergenInfo: ""
            },
            quantity: 20,
        image: []
    },

]

const orders = [
    {
        user_id: 1,
        fulfilled: false
    },
    {
        user_id: 2,
        fulfilled: true
    },
    {
        user_id: 3,
        fulfilled: true
    },
    {
        user_id: 3,
        fulfilled: true
    },
    {
        user_id: 3,
        fulfilled: false
    },
    {
        user_id: 4,
        fulfilled: false
    },
    {
        user_id: 5,
        fulfilled: true
    }
]

const order_products = [

]