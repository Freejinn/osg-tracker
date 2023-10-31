import {SkillParent} from "../../app/models/skill.model";

export const skillsConst: SkillParent[] = [
  {
    id: '1',
    label: 'Outdoor Skills',
    backgroundColor: '#4eac31',
    skills: [
      {
        id: '1',
        imgPath: 'assets/images/angler-badge.jpg',
        name: 'Angler',
        progressPercentage: 0,
        parts: [
          {
            label: 'Safety',
            description: 'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
            selected: false,
          },
          {
            label: 'Tools',
            description: 'Explain and demonstrate how to store and transport your fishing tools and accessories safely and securely',
            selected: false,
          },
          {
            label: 'Food Safety',
            description:  'Explain the food safety considerations you need to make when fishing. For example, how do you store bait safely, and how do you store your catch safely so you can eat it later? Explain how to clean a fish.',
            selected: false,
          },
          {
            label: 'Rules and Regulations',
            description: 'Know and be able to explain the rules and regulations in your local area that govern fishing seasons, catch limits, and locations you are permitted to fish. Know how to obtain a fishing license in your area, if required.',
            selected: false,
          },
          {
            label: 'Five Most Common Fish',
            description:  'Be able to recognize the FIVE most common game fish in the lakes or rivers in your area. Describe the characteristics of each, including the following: A) Appearance, B) Spawning Season, C) Catch size, D) Depth, E) Bait.',
            selected: false,
          },
          {
            label: 'Idea Fishing Spots',
            description: 'Be able to describe characteristics of ideal fishing spots for each of the five most common game fish in your area. What features of the terrain or water indicate good possible habitats for the fish?',
            selected: false,
          },
          {
            label: 'Reels',
            description:  'Be able to recognize the FOUR different types of reels, and explain the uses and considerations for each one. A) Spincast, B) Spinning, C) Baitcasting, D) Fly.',
            selected: false,
          },
          {
            label: 'Setting Up',
            description: 'Demonstrate how to set up a fishing rod, line, and rig for the five most common types of fish in your area. (Note that no specific rod or reel is required here. Use what you have available.)',
            selected: false,
          },
          {
            label: 'Casting and Catching',
            description: 'Demonstrate how to cast and reel in your catch with your rod. Explain common strategies for how to fight with your catch if it is trying to run or jump',
            selected: false,
          },
        ]
      }
    ],
  },
]
