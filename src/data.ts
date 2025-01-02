
export interface Menue{
        id: number,
        name: string,
        price: number,
        about: string,
        image: string,
        description: string
    }


export const breakFast:Menue[] = [
    {
        'id': 1,
        'name': 'Fried Eggs',
        'price': 9.99,
        'about': 'Made with eggs, lettuce, salt, oil, and other ingredients.',
        'image': '/image/breakFast/egg.png',
        'description': "A classic breakfast dish of perfectly fried eggs with a golden yolk, served on a bed of fresh lettuce and garnished with a pinch of salt. Prepared with high-quality ingredients and a touch of olive oil to enhance the flavors, it's a healthy and satisfying start to your day!"
    },
    {
        'id': 2,
        'name': 'Classic Waffles',
        'price': 12.99,
        'about': 'Made with eggs, lettuce, salt, oil and other ingredients.',
        'image': '/image/breakFast/Classic Waffles.png',
        'description': "A classic breakfast dish of perfectly fried eggs with a golden yolk, served on a bed of fresh lettuce and garnished with a pinch of salt. Prepared with high-quality ingredients and a touch of olive oil to enhance the flavors, it's a healthy and satisfying start to your day!"
    },
    {
        'id': 3,
        'name': 'Paratha',
        'price': 8.6,
        'about': 'A flaky, golden flatbread made with layers of dough and cooked to crispy perfection.',
        'description': 'Our Paratha is a traditional favorite, featuring soft layers of dough folded and cooked on a hot griddle to achieve a perfectly crispy and golden finish. Whether enjoyed on its own or paired with curries, yogurt, or chutneys, it’s a versatile delight that satisfies any time of day!',
        'image': '/image/breakFast/paratha.png'
    },
    {
        'id': 4,
        'name': 'Halwa Puri',
        'price': 6.7,
        'about': 'A traditional breakfast featuring fluffy puris served with sweet halwa and savory curries.',
        'description': 'Halwa Puri is a beloved South Asian breakfast delight. This dish includes golden, puffed puris paired with sweet semolina halwa and a variety of savory curries like spicy chickpeas or potato stew. It’s a flavorful and satisfying meal, perfect for a festive morning or a weekend treat!',
        'image': '/image/breakFast/halwa-puri.png'
    },

    {
        'id': 5,
        'name': 'Omelette',
        'price': 4.99,
        'about': 'A fluffy and flavorful egg dish, cooked to perfection with herbs and spices.',
        'description': 'Start your day with our delicious Omelette, made with farm-fresh eggs whisked to perfection and seasoned with aromatic herbs and spices. Whether you enjoy it plain or with fillings like cheese, tomatoes, or onions, this classic breakfast dish is a satisfying way to fuel your morning.',
        'image': '/image/breakFast/omelette.png'
    },
    
    {
        'id': 6,
        'name': 'Tea',
        'price': 11.4,
        'about': 'A soothing and aromatic beverage brewed to perfection.',
        'description': 'Our Tea is a comforting blend of high-quality tea leaves, brewed to create a warm and aromatic experience. Whether you enjoy it plain, with milk, or with a hint of sugar, this timeless beverage is perfect for starting your day or enjoying a relaxing break anytime.',
        'image': '/image/breakFast/tea.png'
    },

   
    
    {
        'id': 7,
        'name': 'Coffee',
        'price': 10.4,
        'about': 'A rich and aromatic brewed beverage to energize your day.',
        'description': 'Our Coffee is crafted from premium coffee beans, freshly brewed to perfection. With its bold flavor and invigorating aroma, it’s the ideal companion for early mornings, midday pick-me-ups, or cozy evenings. Enjoy it black, with milk, or your favorite sweetener for a personalized experience.',
        'image': '/image/breakFast/coffee.png'
    },
    
    {
        'id': 8,
        'name': 'Healthy Breakfast',
        'price': 14.4,
        'about': 'A nutritious combination of wholesome ingredients to kickstart your day.',
        'description': 'Our Healthy Breakfast is a perfect blend of nutrition and flavor. Featuring a variety of fresh fruits, whole grains, and protein-rich options, it’s designed to provide a balanced meal that energizes your morning. Ideal for those seeking a delicious start with a focus on wellness and vitality.',
        'image': '/image/breakFast/healthy-breakFast.png'
    }
    
    
];


export const dishes :Menue[]= [
    {
        'id': 9,
        'name': 'Fajita Pizza',
        'price': 15.99,
        'about': 'A perfect blend of sweet and savory flavors with fresh pineapple, ham, and mozzarella cheese.',
        'image': '/image/dishes/pizza.png',
        'description': 'Our Fajita Pizza is a delightful mix of tropical and classic flavors. Featuring juicy pineapple chunks, savory ham slices, and a generous layer of melted mozzarella cheese, all atop a crispy golden crust. Topped with a tangy tomato sauce, it’s a flavorful escape to paradise with every bite!'
    },
    {
        'id': 10,
        'name': 'Beef Burger',
        'price': 12.55,
        'about': 'A juicy beef patty topped with melted cheese, fresh lettuce, and a toasted bun.',
        'image': '/image/dishes/Cheese Burger.png',
        'description': 'Our Cheese Burger is a classic favorite crafted to perfection. It features a juicy, flavorful beef patty, topped with a generous slice of melted cheese, crisp lettuce, and a dollop of tangy sauce. All of this is nestled in a soft, toasted bun, making each bite a perfect harmony of flavors and textures. Perfect for burger lovers seeking a satisfying meal!'
    },
    {
        "id": 11,
        "name": "Spicy Sindi Biryani",
        "price": 13.50,
        "about": "A flavorful rice dish cooked with aromatic spices and tender chicken pieces.",
        "image": "/image/dishes/spicy-sindi-biryani.png",
        "description": "Our Spicy Sindi Biryani is a delightful combination of fragrant basmati rice, succulent chicken, and a blend of traditional spices. Each spoonful bursts with flavors, featuring tender chicken pieces cooked to perfection and mixed with perfectly seasoned rice. Served with raita and salad, this dish is a must-try for biryani enthusiasts!"
    },
    {
        "id": 12,
        "name": "Tikka Boti",
        "price": 14.50,
        "about": "Juicy and flavorful chicken pieces marinated in a spicy blend and grilled to perfection.",
        "image": "/image/dishes/chicken-tikka-boti.png",
        "description": "Our Tikka Boti is a mouthwatering delight featuring tender chicken chunks marinated in a rich and aromatic blend of spices. Grilled to perfection, each piece is juicy, smoky, and packed with flavor. Served with mint chutney and salad, it's a perfect choice for BBQ lovers!"
    },
    {
        "id": 13,
        "name": "Chicken Tikka",
        "price": 13.99,
        "about": "A classic grilled chicken dish marinated with a blend of spices and yogurt for a rich flavor.",
        "image": "/image/dishes/chicken-tikka.png",
        "description": "Our Chicken Tikka is a traditional favorite featuring tender chicken leg pieces marinated in a mixture of yogurt and flavorful spices. Grilled to perfection, it has a smoky aroma and a spicy kick, served with tangy green chutney, fresh onions, and a slice of lemon for a zesty twist. Perfect for BBQ lovers looking for a flavorful experience!"
    },
    {
        "id": 14,
        "name": "Spicy Beef Biryani",
        "price": 15.75,
        "about": "A flavorful rice dish cooked with aromatic spices and tender meat pieces.",
        "image": "/image/dishes/spicy-beef-biryani.png",
        "description": "Our Spicy Beef Biryani is a delightful combination of fragrant basmati rice, succulent chicken, and a blend of traditional spices. Each spoonful bursts with flavors, featuring tender chicken pieces cooked to perfection and mixed with perfectly seasoned rice. Served with raita and salad, this dish is a must-try for biryani enthusiasts!"
    },

    {
        "id": 15,
        "name": "Chicken Anda Shami Burger",
        "price": 11.99,
        "about": "A delicious burger featuring a chicken shami patty, fried egg, and fresh toppings.",
        "image": "/image/dishes/chicken-anda-shami-burger.png",
        "description": "Our Chicken Anda Shami Burger is a delightful combination of flavors and textures. It includes a juicy chicken shami kebab, topped with a perfectly fried egg, fresh lettuce, tomatoes, and a tangy sauce, all layered between soft toasted buns. This burger is a satisfying meal for anyone craving a hearty and flavorful bite!"
    },
    {
        "id": 16,
        "name": "Chicken Karahi",
        "price": 18.99,
        "about": "A traditional Pakistani dish made with tender chicken cooked in a rich and flavorful tomato-based gravy.",
        "image": "/image/dishes/chicken-karahi.png",
        "description": "Our Chicken Karahi is a signature dish that represents the true essence of Pakistani cuisine. Prepared with succulent chicken pieces, fresh tomatoes, and a blend of aromatic spices, this dish is cooked to perfection in a wok (karahi) for an authentic taste. Garnished with fresh coriander, ginger, and green chilies, it's best enjoyed with naan or steamed rice for a hearty and satisfying meal!"
    },
    {
        "id": 17,
        "name": "Salad",
        "price": 7.99,
        "about": "A fresh and healthy mix of vegetables served with a light dressing.",
        "image": "/image/dishes/salad.png",
        "description": "Our Salad is a refreshing blend of crisp lettuce, juicy tomatoes, crunchy cucumbers, and other fresh vegetables, tossed together and drizzled with a light, tangy dressing. Perfect as a side dish or a healthy meal option, this salad offers a burst of flavor and freshness in every bite!"
    },

    {
        "id": 18,
        "name": "Chicken Corn Soup",
        "price": 7.99,
        "about": "Fresh organic Chicken and healthy mix of vegetables served with a light dressing.",
        "image": "/image/dishes/salad.png",
        "description": "Our Soup is a refreshing blend of organic chicken meat and fresh vegetables corns and eggs!"
    }


]

export const drink: Menue[] = [
    {
        "id": 19,
        "name": "Martinez Cocktail",
        "price": 7.25,
        "about": "A classic cocktail crafted with gin, sweet vermouth, maraschino liqueur, and a dash of bitters.",
        "image": "/image/drinks/Martinez Cocktail.png",
        "description": "The Martinez Cocktail is a timeless classic, blending the smooth botanical notes of gin with the rich sweetness of vermouth. Enhanced with maraschino liqueur for a hint of cherry flavor and balanced with a dash of aromatic bitters, this cocktail is served chilled, delivering a perfectly harmonious sip thats both sophisticated and refreshing."
    },
    {
        "id": 20,
        "name": "Mint Lemonade",
        "price": 5.89,
        "about": "A refreshing blend of tangy lemonade and cool mint, perfect for a hot day.",
        "image": "/image/drinks/Mint Lemonade.png",
        "description": "Our Mint Lemonade is the ultimate refreshing drink, combining the tartness of fresh lemon juice with the cool, crisp flavor of mint leaves. Served over ice, this chilled beverage is perfect for cooling down on a hot day or as a refreshing pick-me-up anytime you need a burst of freshness!"
      },
      
    {
        "id": 21,
        "name": "Chocolate Ice Cream",
        "price": 18.05,
        "about": "A creamy, indulgent chocolate ice cream made with rich cocoa and premium ingredients.",
        "image": "/image/drinks/Chocolate Icecream.png",
        "description": "Dive into the velvety richness of our Chocolate Ice Cream, made with the finest cocoa and crafted to perfection. Every scoop offers a decadent, smooth chocolate experience that melts in your mouth. Whether you are craving a sweet treat or indulging in a comforting dessert, this creamy delight will satisfy your chocolate cravings like no other."
    },
    {
        "id": 22,
        "name": "Orange Juice",
        "price": 5.99,
        "about": "A refreshing glass of freshly squeezed orange juice, full of natural goodness.",
        "image": "/image/drinks/orang-juice.png",
        "description": "Our Orange Juice is made from fresh, ripe oranges, delivering a burst of natural sweetness and tangy flavor. Packed with vitamin C and served chilled, it's the perfect drink to quench your thirst and energize your day. Ideal for breakfast or as a refreshing treat anytime!"
    },
    {
        "id": 23,
        "name": "Cold Coffee",
        "price": 6.99,
        "about": "A chilled and creamy coffee beverage, perfect for coffee lovers.",
        "image": "/image/drinks/ice-coffee.png",
        "description": "Our Cold Coffee is a smooth and refreshing treat for coffee enthusiasts. Made with freshly brewed coffee, blended with milk and ice, and lightly sweetened, it's served chilled for the perfect balance of flavor and creaminess. A great way to cool down and energize your day!"
    },
    {
        "id": 24,
        "name": "Pomegranate Juice",
        "price": 7.99,
        "about": "A refreshing and healthy drink made from freshly squeezed pomegranates.",
        "image": "/image/drinks/Pomegranate-Juice.png",
        "description": "Our Pomegranate Juice is a nutrient-packed beverage crafted from fresh, ripe pomegranates. Bursting with natural sweetness and a hint of tanginess, it's rich in antioxidants and vitamins, making it a delicious and healthy choice. Enjoy it chilled for a rejuvenating experience!"
    },

    {
        "id": 25,
        "name": "Pista Ice Cream",
        "price": 8.99,
        "about": "A creamy and rich pistachio-flavored ice cream with a nutty twist.",
        "image": "/image/drinks/pista-ice-cream.png",
        "description": "Our Pista Ice Cream is a delightful treat for dessert lovers, featuring a smooth and creamy texture infused with the rich flavor of pistachios. Topped with crunchy pistachio bits, every scoop offers a perfect blend of sweetness and nuttiness. A must-try for ice cream enthusiasts!"
    },
    
    {
        "id": 26,
        "name": "Zafaran Pista Ice Cream",
        "price": 9.99,
        "about": "A delicious fusion of saffron and pistachio in a creamy ice cream.",
        "image": "/image/drinks/zafran-pista-icecream.png",
        "description": "Our Kesar Pista Ice Cream is a luxurious blend of aromatic saffron (kesar) and crunchy pistachios, creating a rich and flavorful dessert. The creamy texture, combined with the exotic taste of saffron and the nutty pistachios, makes this ice cream a perfect indulgence for any occasion!"
    }
    
    
    
    
    
    
];


export const desserts:Menue[] = [
    {
        'id': 27,
        'name': 'Butterscotch Cake',
        'price': 20.99,
        'about': 'A rich and moist cake infused with creamy butterscotch flavor and topped with caramel drizzle.',
        'image': '/image/desserts/Butterscotch Cake.png',
        'description': 'Indulge in the irresistible charm of our Butterscotch Cake. This decadent dessert features layers of moist sponge infused with buttery butterscotch flavor, topped with a velvety caramel drizzle and a sprinkle of crunchy toffee bits. Perfect for celebrations or simply satisfying your sweet cravings!'
    },
    {
        "id": 28,
        "name": "Tall Cake",
        "price": 12.99,
        "about": "A rich and moist layered cake with a decadent frosting.",
        "image": "/image/desserts/tall-Cake.png",
        "description": "Our Tall Cake is a multi-layered masterpiece, featuring rich, moist cake layers with a smooth, velvety frosting. Each bite delivers a perfect balance of sweetness and texture, making it a delightful treat for cake lovers. Ideal for special occasions or as an indulgent dessert!"
    },
    {
        "id": 29,
        "name": "Rabri",
        "price": 6.99,
        "about": "A rich, creamy, and sweet traditional dessert made with reduced milk.",
        "image": "/image/desserts/rabri.png",
        "description": "Our Rabri is a decadent Indian dessert made by slowly simmering milk until it thickens and forms a creamy, rich consistency. Garnished with slivers of almonds and pistachios, it offers a perfect blend of sweetness and richness, making it an ideal treat for any occasion!"
    },
    {
        "id": 30,
        "name": "Sweets",
        "price": 5.99,
        "about": "A delightful assortment of traditional sweets to satisfy your sweet cravings.",
        "image": "/image/desserts/sweets.png",
        "description": "Our Sweets selection offers a variety of traditional, bite-sized treats perfect for indulging your sweet tooth. Made with premium ingredients and traditional recipes, each piece delivers a rich and flavorful experience, making it the perfect dessert to share with loved ones or enjoy on your own!"
    },
    {
        "id": 31,
        "name": "Cookies",
        "price": 4.99,
        "about": "Freshly baked cookies with a perfect balance of sweetness and crunch.",
        "image": "/image/desserts/cookies.png",
        "description": "Our Cookies are freshly baked to perfection, offering a delightful crunch with every bite. Made with premium ingredients, these cookies are packed with flavor and are perfect for any occasion. Whether you’re a fan of classic chocolate chip or enjoy a variety of flavors, these cookies are sure to satisfy your cravings!"
    },
    {
        "id": 32,
        "name": "Kheer",
        "price": 6.49,
        "about": "A creamy and aromatic rice pudding, a traditional dessert favorite.",
        "image": "/image/desserts/kheer.png",
        "description": "Our Kheer is a classic dessert made with slow-cooked rice, milk, and sugar, flavored with cardamom and garnished with almonds and pistachios. This creamy, aromatic rice pudding is perfect for celebrations or as a sweet treat to end any meal on a delightful note."
    },
    {
        "id": 33,
        "name": "Peshawari Pista Icecream ",
        "price": 8.50,
        "about": "A nutritious and flavorful traditional dessert made with roasted flour, nuts, and  ghee.",
        "image": "/image/desserts/panjiri.png",
        "description": "Our Homemade Panjiri is a wholesome and delicious traditional sweet, crafted from roasted whole wheat flour, mixed with a blend of nuts, seeds, and aromatic spices. Enriched with pure ghee, it’s a nutritious snack or dessert, often enjoyed for its health benefits and comforting taste. Perfect for all seasons, especially winter!"
    },
    {
        "id": 34,
        "name": "Rose Pista Barfi",
        "price": 8.49,
        "about": "A fragrant and rich traditional sweet infused with rose and pistachio flavors.",
        "image": "/image/desserts/rosepista.png",
        "description": "Our Rose Pista Barfi is an exquisite dessert combining the delicate aroma of rose with the nutty crunch of pistachios. Made with premium-quality ingredients, this soft and flavorful sweet melts in your mouth, leaving a delightful aftertaste. Perfect for special occasions or as a luxurious treat!"
    }
    
    

    

    
    
    
    
    
    

    
]
