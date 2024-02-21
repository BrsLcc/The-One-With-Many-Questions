const questions = [
  {
    id: 1,
    question: "What is the name of Ross's first wife?",
    answers: [
      { answer: "Rachel", correct: false },
      { answer: "Carol", correct: true },
      { answer: "Emily", correct: false },
      { answer: "Susan", correct: false },
    ],
  },
  {
    id: 2,
    question: "How many sisters does Joey have?",
    answers: [
      { answer: "2", correct: false },
      { answer: "7", correct: true },
      { answer: "5", correct: false },
      { answer: "4", correct: false },
    ],
  },

  {
    id: 3,
    question: "What is Chandler Bing's middle name?",
    answers: [
      { answer: "Muriel", correct: true },
      { answer: "Jason", correct: false },
      { answer: "Kim", correct: false },
      { answer: "Zachary", correct: false },
    ],
  },
  {
    id: 4,
    question: "What does Joey never share?",
    answers: [
      { answer: "His books", correct: false },
      { answer: "His food", correct: true },
      { answer: "His clothes", correct: false },
      { answer: "His DVDs", correct: false },
    ],
  },
  {
    id: 5,
    question: "Who was Monica's first kiss?",
    answers: [
      { answer: "Ross", correct: true },
      { answer: "Chandler", correct: false },
      { answer: "Richard", correct: false },
      { answer: "Joey", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the title of the Friends theme song?",
    answers: [
      { answer: "I'll Be There For You", correct: true },
      { answer: "Friends Forever", correct: false },
      { answer: "You've Got a Friend", correct: false },
      { answer: "The One with the Theme Song", correct: false },
    ],
  },
  {
    id: 7,
    question: "Who pees on Monica's leg when she gets stung by a jellyfish?",
    answers: [
      { answer: "Chandler", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Ross", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 8,
    question: "What is Phoebe's sister's name?",
    answers: [
      { answer: "Ursula", correct: true },
      { answer: "Helena", correct: false },
      { answer: "Emily", correct: false },
      { answer: "Linda", correct: false },
    ],
  },
  {
    id: 9,
    question: "Which character famously said, 'We were on a break'?",
    answers: [
      { answer: "Ross", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Monica", correct: false },
    ],
  },
  {
    id: 10,
    question: "What job does Ross have?",
    answers: [
      { answer: "Paleontologist", correct: true },
      { answer: "Chef", correct: false },
      { answer: "Masseur", correct: false },
      { answer: "Data Analyst", correct: false },
    ],
  },
  {
    id: 11,
    question: "What is the name of Joey's stuffed penguin?",
    answers: [
      { answer: "Huggsy", correct: true },
      { answer: "Waddles", correct: false },
      { answer: "Pingu", correct: false },
      { answer: "Mr. Flipper", correct: false },
    ],
  },
  {
    id: 12,
    question: "Which magazine is Joey featured in wearing lipstick for men?",
    answers: [
      { answer: "GQ", correct: false },
      { answer: "Esquire", correct: false },
      { answer: "Soap Opera Digest", correct: false },
      { answer: "Ichiban", correct: true },
    ],
  },
  {
    id: 13,
    question: "Which character famously gets stuck in a pair of leather pants?",
    answers: [
      { answer: "Ross", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Richard", correct: false },
    ],
  },
  {
    id: 14,
    question: "Who is the manager of Central Perk?",
    answers: [
      { answer: "Gunther", correct: true },
      { answer: "Terry", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Monica", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is Janice's most famous catchphrase?",
    answers: [
      { answer: "Oh... My... God!", correct: true },
      { answer: "How you doin'?", correct: false },
      { answer: "We were on a break!", correct: false },
      { answer: "Smelly Cat, Smelly Cat!", correct: false },
    ],
  },
  {
    id: 16,
    question: "Which character has a twin?",
    answers: [
      { answer: "Phoebe", correct: true },
      { answer: "Ross", correct: false },
      { answer: "Monica", correct: false },
      { answer: "Joey", correct: false },
    ],
  },
  {
    id: 17,
    question: "What does Chandler's co-worker Bob think Chandler's name is?",
    answers: [
      { answer: "Toby", correct: true },
      { answer: "Chad", correct: false },
      { answer: "Ross", correct: false },
      { answer: "Mike", correct: false },
    ],
  },
  {
    id: 18,
    question: "What is the name of Ross and Monica's dog when they were kids?",
    answers: [
      { answer: "Chi Chi", correct: true },
      { answer: "Marcel", correct: false },
      { answer: "LaPooh", correct: false },
      { answer: "Bingo", correct: false },
    ],
  },
  {
    id: 19,
    question: "Who accidentally throws a woman's wooden leg into a fire?",
    answers: [
      { answer: "Joey", correct: true },
      { answer: "Chandler", correct: false },
      { answer: "Ross", correct: false },
      { answer: "Richard", correct: false },
    ],
  },
  {
    id: 20,
    question: "What is the name of Chandler and Joey's TV guide addressed to?",
    answers: [
      { answer: "Miss Chanandler Bong", correct: true },
      { answer: "Mr. Joey Tribbiani", correct: false },
      { answer: "Chandler Bing", correct: false },
      { answer: "Joseph Tribbiani", correct: false },
    ],
  },
  {
    id: 21,
    question: "What is the giant poking device made of?",
    answers: [
      { answer: "Chopsticks", correct: true },
      { answer: "Straws", correct: false },
      { answer: "Pencils", correct: false },
      { answer: "Spoons", correct: false },
    ],
  },
  {
    id: 22,
    question: "What is Joey's favorite food?",
    answers: [
      { answer: "Sandwiches", correct: true },
      { answer: "Pizza", correct: false },
      { answer: "Lasagna", correct: false },
      { answer: "Ice Cream", correct: false },
    ],
  },
  {
    id: 23,
    question: "Who teaches Rachel and Phoebe about Unagi?",
    answers: [
      { answer: "Ross", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Monica", correct: false },
    ],
  },
  {
    id: 24,
    question: "What does Ross claim to have invented in college?",
    answers: [
      { answer: "Got Milk?", correct: true },
      { answer: "The Internet", correct: false },
      { answer: "Gravity", correct: false },
      { answer: "Lunch", correct: false },
    ],
  },
  {
    id: 25,
    question: "What is the name of Rachel's Sphynx cat?",
    answers: [
      { answer: "Fluffy", correct: false },
      { answer: "Mrs. Whiskerson", correct: true },
      { answer: "Baldy", correct: false },
      { answer: "Claws", correct: false },
    ],
  },
  {
    id: 26,
    question: "Which character hates Thanksgiving?",
    answers: [
      { answer: "Chandler", correct: true },
      { answer: "Ross", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Joey", correct: false },
    ],
  },
  {
    id: 27,
    question: "Who stole Monica's thunder after she got engaged?",
    answers: [
      { answer: "Phoebe", correct: false },
      { answer: "Janice", correct: false },
      { answer: "Emily", correct: false },
      { answer: "Rachel", correct: true },
    ],
  },
  {
    id: 28,
    question:
      "What is the name of the diner where Monica worked as a waitress?",
    answers: [
      { answer: "Mel's Diner", correct: false },
      { answer: "Central Perk", correct: false },
      { answer: "Moon Dance Diner", correct: true },
      { answer: "Monk's Cafe", correct: false },
    ],
  },
  {
    id: 29,
    question:
      "What does Phoebe find in a soda can that leads to her receiving a large settlement?",
    answers: [
      { answer: "A thumb", correct: true },
      { answer: "A mouse", correct: false },
      { answer: "A piece of glass", correct: false },
      { answer: "A bug", correct: false },
    ],
  },
  {
    id: 30,
    question: "What is Phoebe's signature song?",
    answers: [
      { answer: "Smelly Cat", correct: true },
      { answer: "Sticky Shoes", correct: false },
      { answer: "Holiday Song", correct: false },
      { answer: "Love Song", correct: false },
    ],
  },
  {
    id: 31,
    question: "What was Monica's nickname when she was a field hockey goalie?",
    answers: [
      { answer: "Monica the Wall", correct: false },
      { answer: "Goalkeeper Monica", correct: false },
      { answer: "Big Fat Goalie", correct: true },
      { answer: "Mighty Monica", correct: false },
    ],
  },
  {
    id: 32,
    question:
      "Which character famously puts on all of another character's clothes as a prank?",
    answers: [
      { answer: "Joey puts on all of Chandler's clothes", correct: true },
      { answer: "Ross puts on all of Joey's clothes", correct: false },
      { answer: "Chandler puts on all of Ross's clothes", correct: false },
      { answer: "Rachel puts on all of Monica's clothes", correct: false },
    ],
  },
  {
    id: 33,
    question: "What is the name of Joey's agent?",
    answers: [
      { answer: "Estelle Leonard", correct: true },
      { answer: "Janice Litman", correct: false },
      { answer: "Carol Willick", correct: false },
      { answer: "Nora Tyler Bing", correct: false },
    ],
  },
  {
    id: 34,
    question: "What does Chandler's company actually do?",
    answers: [
      {
        answer: "Statistical analysis and data reconfiguration",
        correct: true,
      },
      { answer: "Software development", correct: false },
      { answer: "Advertising", correct: false },
      { answer: "Financial services", correct: false },
    ],
  },
  {
    id: 35,
    question: "Who was the maid of honor at Monica's wedding?",
    answers: [
      { answer: "Rachel", correct: true },
      { answer: "Phoebe", correct: false },
      { answer: "Janice", correct: false },
      { answer: "Emily", correct: false },
    ],
  },
  {
    id: 36,
    question:
      "What game do Joey and Chandler play that Ross invents to help Joey learn?",
    answers: [
      { answer: "Fireball", correct: false },
      { answer: "Bamboozled", correct: true },
      { answer: "Cups", correct: false },
      { answer: "Foosball", correct: false },
    ],
  },
  {
    id: 37,
    question: "What is the name of Ross's second wife?",
    answers: [
      { answer: "Emily", correct: true },
      { answer: "Carol", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Susan", correct: false },
    ],
  },
  {
    id: 38,
    question:
      "What is the name of the coffee shop where the group spends a lot of their time?",
    answers: [
      { answer: "Central Perk", correct: true },
      { answer: "Coffee Time", correct: false },
      { answer: "The Espresso Room", correct: false },
      { answer: "Brew Buddies", correct: false },
    ],
  },
  {
    id: 39,
    question:
      "In 'The One with All the Cheesecakes', who did the cheesecake originally belong to?",
    answers: [
      { answer: "Mrs. Braverman", correct: true },
      { answer: "Chandler Bing", correct: false },
      { answer: "Joey Tribbiani", correct: false },
      { answer: "Rachel Green", correct: false },
    ],
  },
  {
    id: 40,
    question:
      "Which character says, 'It’s not that common, it doesn’t happen to every guy, and it is a big deal!'?",
    answers: [
      { answer: "Rachel", correct: true },
      { answer: "Monica", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 41,
    question:
      "What is the name of the character Bruce Willis plays, who dates Rachel?",
    answers: [
      { answer: "Paul Stevens", correct: true },
      { answer: "Nick Stevens", correct: false },
      { answer: "Richard Burke", correct: false },
      { answer: "Joshua Burgin", correct: false },
    ],
  },
  {
    id: 42,
    question: "What is the name of Ross's monkey?",
    answers: [
      { answer: "Marcel", correct: true },
      { answer: "Maurice", correct: false },
      { answer: "Max", correct: false },
      { answer: "Milo", correct: false },
    ],
  },
  {
    id: 43,
    question:
      "Which character famously wears a Thanksgiving turkey on their head?",
    answers: [
      { answer: "Monica", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 44,
    question: "Which character gets a job at Ralph Lauren?",
    answers: [
      { answer: "Rachel", correct: true },
      { answer: "Monica", correct: false },
      { answer: "Joey", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 45,
    question: "What does Ross say his 'Unagi' is?",
    answers: [
      { answer: "A state of total awareness", correct: true },
      { answer: "A type of sushi", correct: false },
      { answer: "A martial arts move", correct: false },
      { answer: "A Japanese dessert", correct: false },
    ],
  },
  {
    id: 46,
    question:
      "In the last season, what is the name of the woman Ross dates, who is also a paleontologist?",
    answers: [
      { answer: "Janice", correct: false },
      { answer: "Charlie", correct: true },
      { answer: "Emily", correct: false },
      { answer: "Rachel", correct: false },
    ],
  },
  {
    id: 47,
    question: "What job does Chandler take up in Tulsa?",
    answers: [
      { answer: "Data processing", correct: true },
      { answer: "Marketing", correct: false },
      { answer: "Banking", correct: false },
      { answer: "Chef", correct: false },
    ],
  },
  {
    id: 48,
    question:
      "What is the name of the neighbor who leaves everything to Monica and Rachel when he dies?",
    answers: [
      { answer: "Mr. Heckles", correct: true },
      { answer: "Mr. Treeger", correct: false },
      { answer: "Mr. Zelner", correct: false },
      { answer: "Mr. Geller", correct: false },
    ],
  },
  {
    id: 49,
    question: "Which book does Joey keep in the freezer because it scares him?",
    answers: [
      { answer: "The Shining", correct: true },
      { answer: "Little Women", correct: false },
      { answer: "Cujo", correct: false },
      { answer: "It", correct: false },
    ],
  },
  {
    id: 50,
    question: "Who ends up in a box as a Thanksgiving punishment?",
    answers: [
      { answer: "Joey", correct: false },
      { answer: "Chandler", correct: true },
      { answer: "Ross", correct: false },
      { answer: "Richard", correct: false },
    ],
  },
  {
    id: 51,
    question:
      "What game do Ross and Joey play on their rooftop, invented when they were bored?",
    answers: [
      { answer: "Fireball", correct: true },
      { answer: "Ultimate Fireball", correct: false },
      { answer: "Catch the Ball", correct: false },
      { answer: "Roofball", correct: false },
    ],
  },
  {
    id: 52,
    question: "What does Joey wear to Chandler and Monica's wedding?",
    answers: [
      { answer: "A soldier's uniform", correct: true },
      { answer: "A chicken costume", correct: false },
      { answer: "A chef's outfit", correct: false },
      { answer: "A tennis outfit", correct: false },
    ],
  },
  {
    id: 53,
    question: "What is the name of the girl Ross talks to at the laundromat?",
    answers: [
      { answer: "Kristen", correct: false },
      { answer: "Emily", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Kathy", correct: true },
    ],
  },
  {
    id: 54,
    question: "Who introduces Phoebe and Mike?",
    answers: [
      { answer: "Ross", correct: false },
      { answer: "Joey", correct: true },
      { answer: "Monica", correct: false },
      { answer: "Chandler", correct: false },
    ],
  },
  {
    id: 55,
    question: "In which city does the series finale take place?",
    answers: [
      { answer: "London", correct: false },
      { answer: "Paris", correct: false },
      { answer: "New York City", correct: true },
      { answer: "Las Vegas", correct: false },
    ],
  },
  {
    id: 56,
    question:
      "What is the profession of Joey's character Dr. Drake Ramoray on 'Days of Our Lives'?",
    answers: [
      { answer: "Neurosurgeon", correct: true },
      { answer: "Cardiologist", correct: false },
      { answer: "Dermatologist", correct: false },
      { answer: "Pediatrician", correct: false },
    ],
  },
  {
    id: 57,
    question: "What is the name of Chandler's crazy roommate before Eddie?",
    answers: [
      { answer: "Kip", correct: true },
      { answer: "Gary", correct: false },
      { answer: "Janice", correct: false },
      { answer: "Gunther", correct: false },
    ],
  },
  {
    id: 58,
    question: "Which character famously yells 'Pivot!' while moving furniture?",
    answers: [
      { answer: "Chandler", correct: false },
      { answer: "Joey", correct: false },
      { answer: "Monica", correct: false },
      { answer: "Ross", correct: true },
    ],
  },
  {
    id: 59,
    question:
      "What is the name of the character played by Danny DeVito who shows up at Phoebe’s bachelorette party?",
    answers: [
      { answer: "Officer Goodbody", correct: false },
      { answer: "Sergeant Sexy", correct: false },
      { answer: "Roy 'Goodbody'", correct: true },
      { answer: "Lieutenant Lapdance", correct: false },
    ],
  },
  {
    id: 60,
    question:
      "What does Ross send to Ugly Naked Guy to try and get his apartment?",
    answers: [
      { answer: "A basket of mini muffins", correct: false },
      { answer: "A naked mannequin", correct: false },
      { answer: "A pinball machine", correct: false },
      { answer: "A basket of muffins", correct: true },
    ],
  },
  {
    id: 61,
    question: "What is the title of the self-help book that the girls love?",
    answers: [
      { answer: "The One Inside", correct: false },
      { answer: "Be Your Own Windkeeper", correct: true },
      { answer: "Finding the Inner Self", correct: false },
      { answer: "Wind of Change", correct: false },
    ],
  },
  {
    id: 62,
    question: "What is the name of Chandler's band in college?",
    answers: [
      { answer: "Way, No Way", correct: true },
      { answer: "Electric Percolators", correct: false },
      { answer: "Handsome Men", correct: false },
      { answer: "The Dying Cats", correct: false },
    ],
  },
  {
    id: 63,
    question:
      "Who is the first one to find out about Monica and Chandler's relationship?",
    answers: [
      { answer: "Joey", correct: true },
      { answer: "Ross", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 64,
    question:
      "What does Ross say Rachel's traditional English trifle tastes like?",
    answers: [
      { answer: "Feet", correct: true },
      { answer: "Garbage", correct: false },
      { answer: "Heaven", correct: false },
      { answer: "A weird taco", correct: false },
    ],
  },
  {
    id: 65,
    question: "What did Ross name his white dog statue?",
    answers: [
      { answer: "Pat", correct: false },
      { answer: "Chris", correct: false },
      { answer: "Marcel", correct: false },
      { answer: "LaPooh", correct: true },
    ],
  },
  {
    id: 66,
    question: "What does Chandler's dad do for a living?",
    answers: [
      { answer: "Drag queen", correct: true },
      { answer: "Lawyer", correct: false },
      { answer: "Chef", correct: false },
      { answer: "Circus performer", correct: false },
    ],
  },
  {
    id: 67,
    question: "What is Rachel scared of?",
    answers: [
      { answer: "Dogs", correct: false },
      { answer: "Swings", correct: true },
      { answer: "Fish", correct: false },
      { answer: "Birds", correct: false },
    ],
  },
  {
    id: 68,
    question: "Which character accidentally sets fire to Phoebe’s dollhouse?",
    answers: [
      { answer: "Rachel", correct: true },
      { answer: "Monica", correct: false },
      { answer: "Joey", correct: false },
      { answer: "Ross", correct: false },
    ],
  },
  {
    id: 69,
    question: "What fruit is Ross allergic to?",
    answers: [
      { answer: "Pineapple", correct: false },
      { answer: "Mango", correct: false },
      { answer: "Strawberry", correct: false },
      { answer: "Kiwi", correct: true },
    ],
  },
  {
    id: 70,
    question: "What is Janice's last name?",
    answers: [
      { answer: "Hosenstein", correct: true },
      { answer: "Bing", correct: false },
      { answer: "Buffay", correct: false },
      { answer: "Geller", correct: false },
    ],
  },
  {
    id: 71,
    question: "What is the name of Chandler's roommate after Joey moves out?",
    answers: [
      { answer: "Eddie Menuek", correct: true },
      { answer: "Janine Lecroix", correct: false },
      { answer: "Mike Hannigan", correct: false },
      { answer: "Richard Burke", correct: false },
    ],
  },
  {
    id: 72,
    question: "Which character once lived in Prague?",
    answers: [
      { answer: "Janice", correct: false },
      { answer: "Gunther", correct: true },
      { answer: "David", correct: false },
      { answer: "Mike", correct: false },
    ],
  },
  {
    id: 73,
    question:
      "What was the name of the character played by Brad Pitt in the Thanksgiving episode?",
    answers: [
      { answer: "Will Colbert", correct: true },
      { answer: "Eddie Menuek", correct: false },
      { answer: "Gary Litman", correct: false },
      { answer: "Mark Robinson", correct: false },
    ],
  },
  {
    id: 74,
    question: "What is the name of Joey's chair?",
    answers: [
      { answer: "Consuela", correct: false },
      { answer: "Estelle", correct: false },
      { answer: "Rosita", correct: true },
      { answer: "Marcel", correct: false },
    ],
  },
  {
    id: 75,
    question: "Who is the youngest of the six friends?",
    answers: [
      { answer: "Rachel", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Monica", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 76,
    question: "What does Phoebe legally change her name to?",
    answers: [
      { answer: "Princess Consuela Banana Hammock", correct: true },
      { answer: "Phoebe Buffay-Hannigan", correct: false },
      { answer: "Crap Bag", correct: false },
      { answer: "Ursula Buffay", correct: false },
    ],
  },
  {
    id: 77,
    question: "What is the name of the dog painting Joey buys?",
    answers: [
      { answer: "Moondance", correct: false },
      { answer: "The Art of the Deal", correct: false },
      { answer: "Dogs Playing Poker", correct: false },
      { answer: "Pat the Dog", correct: true },
    ],
  },
  {
    id: 78,
    question:
      "Which character gets a job as a tour guide at the museum where Ross works?",
    answers: [
      { answer: "Joey", correct: true },
      { answer: "Rachel", correct: false },
      { answer: "Chandler", correct: false },
      { answer: "Monica", correct: false },
    ],
  },
  {
    id: 79,
    question:
      "What is the name of Chandler and Monica's cleaning lady, whom they suspect of stealing?",
    answers: [
      { answer: "Emily", correct: false },
      { answer: "Molly", correct: false },
      { answer: "Alicia", correct: false },
      { answer: "Brenda", correct: true },
    ],
  },
  {
    id: 80,
    question: "What is the name of Ross's fantasy girl from the copy place?",
    answers: [
      { answer: "Chloe", correct: true },
      { answer: "Jasmine", correct: false },
      { answer: "Kathy", correct: false },
      { answer: "Emily", correct: false },
    ],
  },
  {
    id: 81,
    question: "What is the name of Phoebe’s first husband?",
    answers: [
      { answer: "Mike Hannigan", correct: false },
      { answer: "David", correct: false },
      { answer: "Duncan", correct: true },
      { answer: "Parker", correct: false },
    ],
  },
  {
    id: 82,
    question:
      "Who did Phoebe think was her grandfather because she saw his picture in her grandmother's house?",
    answers: [
      { answer: "Albert Einstein", correct: true },
      { answer: "Isaac Newton", correct: false },
      { answer: "Nikola Tesla", correct: false },
      { answer: "Thomas Edison", correct: false },
    ],
  },
  {
    id: 83,
    question:
      "What was the profession of Rachel's fiancé, Barry, whom she left at the altar?",
    answers: [
      { answer: "Orthodontist", correct: false },
      { answer: "Dentist", correct: true },
      { answer: "Optometrist", correct: false },
      { answer: "Pediatrician", correct: false },
    ],
  },
  {
    id: 84,
    question:
      "What item of clothing does Rachel leave behind at Ross's apartment, leading to their breakup?",
    answers: [
      { answer: "A scarf", correct: false },
      { answer: "A sock", correct: false },
      { answer: "A hair clip", correct: false },
      { answer: "A pair of panties", correct: true },
    ],
  },
  {
    id: 85,
    question:
      "What is the name of the game Chandler invents to give Joey money?",
    answers: [
      { answer: "Cups", correct: true },
      { answer: "Boxes", correct: false },
      { answer: "Bamboozled", correct: false },
      { answer: "Fireball", correct: false },
    ],
  },
  {
    id: 86,
    question:
      "What was Rachel's answer to the question what is Chandler Bing's job?",
    answers: [
      { answer: "Transponster", correct: true },
      { answer: "Data analyst", correct: false },
      { answer: "IT procurement manager", correct: false },
      {
        answer: "Statistical analysis and data reconfiguration",
        correct: false,
      },
    ],
  },
  {
    id: 87,
    question:
      "What hobby does Joey take up to get closer to Janine, his roommate?",
    answers: [
      { answer: "Dancing", correct: true },
      { answer: "Cooking", correct: false },
      { answer: "Knitting", correct: false },
      { answer: "Painting", correct: false },
    ],
  },
  {
    id: 88,
    question: "What unique item does Phoebe inherit?",
    answers: [
      { answer: "A fur coat", correct: false },
      { answer: "A taxi cab", correct: true },
      { answer: "An antique dollhouse", correct: false },
      { answer: "A painting of a creepy lady", correct: false },
    ],
  },
  {
    id: 89,
    question: "Who does Monica and Chandler run into at the fertility clinic?",
    answers: [
      { answer: "Ross", correct: false },
      { answer: "Richard", correct: false },
      { answer: "Joey", correct: false },
      { answer: "Janice", correct: true },
    ],
  },
  {
    id: 90,
    question:
      "What name does Ross give himself when trying to teach Ben about Hanukkah?",
    answers: [
      { answer: "The Holiday Armadillo", correct: true },
      { answer: "Santa's Jewish Friend", correct: false },
      { answer: "The Christmas Camel", correct: false },
      { answer: "The Chanukah Kangaroo", correct: false },
    ],
  },
  {
    id: 91,
    question: "Who is rumored to have a third nipple?",
    answers: [
      { answer: "Ross", correct: false },
      { answer: "Chandler", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Gunther", correct: false },
    ],
  },
  {
    id: 92,
    question: "What does Ross name his and Rachel's baby girl?",
    answers: [
      { answer: "Emma", correct: true },
      { answer: "Ella", correct: false },
      { answer: "Emily", correct: false },
      { answer: "Elizabeth", correct: false },
    ],
  },
  {
    id: 93,
    question:
      "Who is the last one to find out about Monica and Chandler's relationship?",
    answers: [
      { answer: "Ross", correct: true },
      { answer: "Joey", correct: false },
      { answer: "Rachel", correct: false },
      { answer: "Phoebe", correct: false },
    ],
  },
  {
    id: 94,
    question: "What game show does Joey appear on?",
    answers: [
      { answer: "Bamboozled", correct: false },
      { answer: "Pyramid", correct: true },
      { answer: "Jeopardy!", correct: false },
      { answer: "Wheel of Fortune", correct: false },
    ],
  },
  {
    id: 95,
    question:
      "In Season 9, what is the name of the male nanny that Ross and Rachel hire?",
    answers: [
      { answer: "Sandy", correct: true },
      { answer: "Manny", correct: false },
      { answer: "Andy", correct: false },
      { answer: "Danny", correct: false },
    ],
  },
  {
    id: 96,
    question: "What is the name of Ross' comic book character?",
    answers: [
      { answer: "Science Boy", correct: true },
      { answer: "Dino Guy", correct: false },
      { answer: "Paleo Man", correct: false },
      { answer: "Rossasaurus", correct: false },
    ],
  },
  {
    id: 97,
    question:
      "In what part of her body did Monica get a pencil stuck at age 14?",
    answers: [
      { answer: "Her nose", correct: false },
      { answer: "Her hand", correct: false },
      { answer: "Her ear", correct: true },
      { answer: "Her forehead", correct: false },
    ],
  },
  {
    id: 98,
    question: "What fake name does Phoebe use?",
    answers: [
      { answer: "Monana Fanna", correct: false },
      { answer: "Phoebe Buffay", correct: false },
      { answer: "Regina Phalange", correct: true },
      { answer: "Ursula Buffay", correct: false },
    ],
  },
  {
    id: 99,
    question: "What is the profession of Monica's boyfriend Richard?",
    answers: [
      { answer: "Ophthalmologist", correct: true },
      { answer: "Orthodontist", correct: false },
      { answer: "Cardiologist", correct: false },
      { answer: "Dermatologist", correct: false },
    ],
  },
  {
    id: 100,
    question: "Who gets a tattoo, much to Ross's surprise, and what is it of?",
    answers: [
      { answer: "Rachel, a heart", correct: true },
      { answer: "Phoebe, a world", correct: false },
      { answer: "Joey, a dragon", correct: false },
      { answer: "Monica, a star", correct: false },
    ],
  },
];

export default questions;
