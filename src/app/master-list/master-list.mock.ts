// import { SkillParent } from "../models/skill.model";

// export const masterListMock: SkillParent[] = [
//     {
//         id: 1,
//         label: 'Comprehensive Skills',
//         backgroundColor: 'rgb(35, 58, 42)',
//         skills: [
//             {
//                 id: 1,
//                 imgPath: 'assets/images/tenderfoot-badge.jpg',
//                 label: 'Tenderfoot',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'Scout Law, Promise and Motto',
//                         descrip:
//                             'Know the Scout Law, Promise, and Motto, and understand their meanings.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Scout Salute and Handshake',
//                         descrip: 'Know the Scout salute, handshake, and their importance.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Woodcraft Trail Signs',
//                         descrip:
//                             'Be able to make and know the meaning of the woodcraft trail signs.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Scout Law, Promise and Motto',
//                         descrip:
//                             'Know the Scout Law, Promise, and Motto, and understand their meanings.',
//                         selected: false,
//                     },
//                     {
//                         label: 'American Flag',
//                         descrip:
//                             'Know the composition and history of, and how to fly and fold, the American flag.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Scout Staff',
//                         descrip: 'Know certain uses of the Scout staff.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Knots to Know',
//                         descrip:
//                             'Tie the following knots: reef knot, sheet bend, clove hitch, bowline, round turn & two half-hitches, sheepshank; and understand their respective uses.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Rope Whip',
//                         descrip: 'Know how to whip the end of a rope.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 2,
//                 imgPath: 'assets/images/secondclass-badge.jpg',
//                 label: 'Second Class',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'First Aid',
//                         descrip:
//                             'First Aid: Know the following: general rules of health, cuts, sprains, burns, nose bleeds, stings, cleaning & apply dressing to wound, triangular bandage for knee, head, foot as well as summoning help and treatment for shock.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Signaling/Morse/ASL',
//                         descrip:
//                             'Using one of Signaling/Morse/ASL, know each letter/number, send & read simple messages and the calling-up sign/answer, general answer, and end of message sign/answer.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Observation and Efficiency',
//                         descrip:
//                             'Either follow a trail, half mile in 25 minutes; or describe Kim’s game remember 16 of 24 assorted, small items in 1 minute observation and an efficient performance of Scout’s Pace.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Knots and Lashes',
//                         descrip:
//                             'Demonstrate square/diagonal lashings, timber hitch, rolling hitch and fisherman’s knot.',
//                         selected: false,
//                     },
//                     {
//                         label: ' Lighting a Fire',
//                         descrip:
//                             'Lay and light a wood fire in the open, using no more than 2 matches and natural tinder.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Cooking',
//                         descrip:
//                             'Cook a 1/4 pound of meat and two potatoes, without utensils other than billy-can over wood fire in open.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Safety with Blades',
//                         descrip:
//                             'Know safety rules and care of hand-axe, knife, and saw. Demonstrate correct way to chop firewood and complete the requirements for the Woods Tools Award (see BPSA-US website for more details).',
//                         selected: false,
//                     },
//                     {
//                         label: 'Using a Compass',
//                         descrip:
//                             'Demonstrate practical use of a compass and know 16 principle points.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Tenderfoot Standing',
//                         descrip:
//                             'Have at least 1 month’s satisfactory service as Tenderfoot, and satisfy to the Scoutmaster that s/he can repass the Tenderfoot tests.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 3,
//                 imgPath: 'assets/images/firstclass-badge.png',
//                 label: 'First Class',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'Swimming Or',
//                         descrip:
//                             'Complete EITHER of the following: Swim 50 yards OR If swimming is inappropriate or dangerous to your health, instead pass ONE of the following special proficiency badges: A) Astronomer, B) Camper, C) Healthy Living, D) Housewright, E) Naturalist, F) Observer, G) Pioneer, H) Ranger.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Life Line',
//                         descrip:
//                             'Throw a lifeline and explain how it fits into the principles and risks of water recreation and water rescue—specifically in the following procedures: A) Reach,  B) Throw, C) Row, D) Go',
//                         selected: false,
//                     },
//                     {
//                         label: 'Knots and Lashings',
//                         descrip:
//                             "Demonstrate correctly the following knots and lashings: A) Shear lashing, B) Round lashing, C) Back splice, D) Eye splice, E) Firefighter's chair, F) Alpine butterfly",
//                         selected: false,
//                     },
//                     {
//                         label: 'Estimation',
//                         descrip:
//                             'Estimate, without apparatus, within 25 percent error each side: A) Distance (eg. How long is that trail?), B) Numbers (eg. How many cows in that herd?), C) Height (eg. How tall is that tree?)',
//                         selected: false,
//                     },
//                     {
//                         label: 'First Aid',
//                         descrip: 'Earn the First Aid special proficiency badge.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Cooking',
//                         descrip:
//                             "Demonstrate your cooking skills. A) Present to your Examiner the comprehensive meal plan you intend to prepare for your First Class Journey. B) Satisfactorily estimate the budget, create a shopping list of ingredients, and perform all the shopping for your meals. C) Explain the necessary utensils, cooking tools, stove, and fuel requirements you'll need. D) Demonstrate that you are prepared to pack and carry as necessary all of your equipment and ingredients during a rehearsal or test session.",
//                         selected: false,
//                     },
//                     {
//                         label: 'Mapping',
//                         descrip:
//                             'Demonstrate your mapping abilities. A) Read and be able to use a topographical map. B) Draw an intelligible rough sketch map. C) Demonstrate proper use of a compass. D) Point out a compass direction by day and by night without the help of a compass.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Felling Axe',
//                         descrip:
//                             'Use a felling axe for felling or trimming light timber, or, if impractical, be able to log up a piece of timber and demonstrate the theory of felling a tree. (The term “felling axe” includes both three-quarter and half-size.)',
//                         selected: false,
//                     },
//                     {
//                         label: 'First Class Journey',
//                         descrip:
//                             'Complete a First Class Journey. For details on these requirements, see the chapter on First Class tests.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 4,
//                 imgPath: 'assets/images/torchbearer-badge.jpg',
//                 label: 'Torchbearer',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'Civics and Community',
//                         descrip:
//                             'Earn at least SIX special proficiency badges from the area of Civics and Community. These must include Advocate and Community Service.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Senior Civics and Community',
//                         descrip:
//                             'Earn at least FOUR senior special proficiency badges from Civics and Community. These must include Senior Advocate and Emergency Planner.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Leadership Training',
//                         descrip:
//                             'Participate in a Bronze Arrow Training (BAT) or similar leadership training seminar.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Patrol Leader',
//                         descrip:
//                             'Serve as patrol leader for a minimum of 6 months to the satisfaction of your Examiner.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Research and Action',
//                         descrip:
//                             'Research a social or political issue that is important to you. Write to one of your elected representatives—this may be local, statewide, or national—explaining your position and asking for them to take some action.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Presentation',
//                         descrip:
//                             'Create a presentation for your troop or group about what your scouting experience has taught you about leadership and helping your community. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 5,
//                 imgPath: 'assets/images/trailblazer-badges.jpg',
//                 label: 'Trailblazer',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'Creative Arts',
//                         descrip:
//                             'Earn at least SIX special proficiency badges from the area of Creative Arts, which must include at least one performing arts badge and one crafting arts badge. Senior level badges may also be substituted in place of special proficiency badges.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Senior Creative Arts',
//                         descrip:
//                             'Earn at least FOUR senior proficiency badges in Creative Arts, one of which must be Indigineous Art Appreciation.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Instruct Another',
//                         descrip:
//                             'Instruct a fellow scout in one of the disciplines covered in a Creative Arts special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Creative History Project',
//                         descrip:
//                             'Create a special project chronicling your troop’s history over a period of time of at least 6 months. This may be a documentary film, photo series, play, skit, dance, story, or any other creative medium. The length or scale of your project must be determined in consultation with your Examiner, but it must be extensive enough to do justice to your subject and tell your troop’s story. Perform or present your project to your troop.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 6,
//                 imgPath: 'assets/images/voyager-badge.jpg',
//                 label: 'Voyager',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: 'Life Skills',
//                         descrip:
//                             'Earn at least SIX special proficiency badges from the area of Life Skills, at least one of which must be an outdoor-focused badge such as Naturalist or Forester and at least one of which must be an indoor-focused badge such as Housewright or Homemaker. Senior level badges may also be substituted in place of special proficiency badges.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Senior Life Skills',
//                         descrip:
//                             'Earn at least THREE senior special proficiency badges from the area of Life Skills.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Instruct Another',
//                         descrip: 'Instruct a fellow scout in one of the disciplines covered in a Life Skills special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Presentation',
//                         descrip: 'Give a presentation to your troop (or group) about something you learned while working on these badges and how you think it can be applied to life beyond just earning a badge. Have you found a hobby, career path or set of skills you plan to use long after your time as a Pathfinder is over? Explain. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 7,
//                 imgPath: 'assets/images/polaris.png',
//                 label: 'Polaris Award',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: '3 Pillars',
//                         descrip: 'Complete 3 of the 4 pillars.',
//                         selected: false,
//                     },
//                     {
//                         label: 'Letter of Achievements',
//                         descrip: 'Next, you should submit a letter to national headquarters with a list of your achievements. List details of which badges, awards, and programs you completed to explain how you achieved each of the three pillars. You should write this in a way that you can see for yourself all the work you accomplished to obtain this award. Following in the best traditions of the patrol method, you will hand this letter to your scoutmaster, who will convey it to the regional commissioner, who will in turn deliver it to the national headquarters. This will allow all levels of our organization to celebrate your accomplishment.',
//                         selected: false,
//                     },
//                 ],
//             },
//             {
//                 id: 8,
//                 imgPath: 'assets/images/goldcompass-award.png',
//                 label: 'Gold Compass Rose',
//                 progressPercentage: 0,
//                 parts: [
//                     {
//                         label: '4 Pillars',
//                         descrip: 'If you achieve all 4 pillars, you will receive a special gold compass rose disc for your Polaris pin. The compass rose signifies a scout who truly has a compass, a knowledge of all four cardinal aspects of life. With the help of the North Star, your remarkable skills and achievements will navigate you through the challenges and exigencies of life.',
//                         selected: false,
//                     },
//                 ],
//             },
//         ],
//     }
// ]