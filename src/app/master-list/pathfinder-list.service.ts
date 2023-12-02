import { Injectable, Input, EventEmitter, inject } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillParent, SkillBadge, SkillParts } from '../models/skill.model';
import { skillsConst } from '../../assets/Constants/skills.const'

@Injectable({providedIn: 'root'})
export class PathfinderListService {
  http = inject(HttpClient);
// @Input() badgeSelected: EventEmitter<SkillBadge>;

  getList(): Observable<SkillParent[]> {
    return this.http.get();
  }
    
}



  

//   private genSkills: SkillParent[] = [
//     new Skill('assets/images/tenderfoot-badge.jpg', 'Tenderfoot', {
//       'A: Scout Law, Promise and Motto':
//         'Know the Scout Law, Promise, and Motto, and understand their meanings.',
//       'B: Scout Salute and Handshake ':
//         'Know the Scout salute, handshake, and their importance.',
//       'C: Woodcraft Trail Signs':
//         'Be able to make and know the meaning of the woodcraft trail signs.',
//       'D: American Flag':
//         'Know the composition and history of, and how to fly and fold, the American flag.',
//       'E: Scout Staff': 'Know certain uses of the Scout staff.',
//       'F: Knots to Know':
//         'Tie the following knots: reef knot, sheet bend, clove hitch, bowline, round turn & two half-hitches, sheepshank; and understand their respective uses.',
//       'G: Rope Whip': 'Know how to whip the end of a rope.',
//     }),
//     new Skill('assets/images/secondclass-badge.jpg', 'Second Class', {
//       'A: First Aid':
//         'First Aid: Know the following: general rules of health, cuts, sprains, burns, nose bleeds, stings, cleaning & apply dressing to wound, triangular bandage for knee, head, foot as well as summoning help and treatment for shock.',
//       'B: Signaling/Morse/ASL':
//         'Using one of Signaling/Morse/ASL, know each letter/number, send & read simple messages and the calling-up sign/answer, general answer, and end of message sign/answer.',
//       'C: Observation and Efficiency':
//         'Either follow a trail, half mile in 25 minutes; or describe Kim’s game remember 16 of 24 assorted, small items in 1 minute observation and an efficient performance of Scout’s Pace. ',
//       'D: Knots and Lashes':
//         'Demonstrate square/diagonal lashings, timber hitch, rolling hitch and fisherman’s knot.',
//       'E: Lighting a Fire':
//         'Lay and light a wood fire in the open, using no more than 2 matches and natural tinder.',
//       'F: Cooking':
//         'Cook a 1/4 pound of meat and two potatoes, without utensils other than billy-can over wood fire in open.',
//       'G: Safety with Blades':
//         'Know safety rules and care of hand-axe, knife, and saw. Demonstrate correct way to chop firewood and complete the requirements for the Woods Tools Award (see BPSA-US website for more details).',
//       'H: Using a Compass':
//         'Demonstrate practical use of a compass and know 16 principle points.',
//       'I: Tenderfoot Standing':
//         'Have at least 1 month’s satisfactory service as Tenderfoot, and satisfy to the Scoutmaster that s/he can repass the Tenderfoot tests.',
//     }),
//     new Skill('assets/images/firstclass-badge.png', 'First Class', {
//       'A: Swimming Or':
//         'Complete EITHER of the following: Swim 50 yards OR If swimming is inappropriate or dangerous to your health, instead pass ONE of the following special proficiency badges: A) Astronomer, B) Camper, C) Healthy Living, D) Housewright, E) Naturalist, F) Observer, G) Pioneer, H) Ranger.',
//       'B: Life Line':
//         'Throw a lifeline and explain how it fits into the principles and risks of water recreation and water rescue—specifically in the following procedures: A) Reach,  B) Throw, C) Row, D) Go',
//       'C: Knots and Lashings':
//         "Demonstrate correctly the following knots and lashings: A) Shear lashing, B) Round lashing, C) Back splice, D) Eye splice, E) Firefighter's chair, F) Alpine butterfly",
//       'D: Estimation':
//         'Estimate, without apparatus, within 25 percent error each side: A) Distance (eg. How long is that trail?), B) Numbers (eg. How many cows in that herd?), C) Height (eg. How tall is that tree?)',
//       'E: First Aid': 'Earn the First Aid special proficiency badge.',
//       'F: Cooking':
//         "Demonstrate your cooking skills. A) Present to your Examiner the comprehensive meal plan you intend to prepare for your First Class Journey. B) Satisfactorily estimate the budget, create a shopping list of ingredients, and perform all the shopping for your meals. C) Explain the necessary utensils, cooking tools, stove, and fuel requirements you'll need. D) Demonstrate that you are prepared to pack and carry as necessary all of your equipment and ingredients during a rehearsal or test session. ",
//       'G: Mapping':
//         'Demonstrate your mapping abilities. A) Read and be able to use a topographical map. B) Draw an intelligible rough sketch map. C) Demonstrate proper use of a compass. D) Point out a compass direction by day and by night without the help of a compass.',
//       'H: Felling Axe':
//         'Use a felling axe for felling or trimming light timber, or, if impractical, be able to log up a piece of timber and demonstrate the theory of felling a tree. (The term “felling axe” includes both three-quarter and half-size.)',
//       'I: First Class Journey':
//         'Complete a First Class Journey. For details on these requirements, see the chapter on First Class tests.',
//     }),
//     new Skill('assets/images/torchbearer-badge.jpg', 'Torchbearer', {
//       'A: Civics and Community':
//         'Earn at least SIX special proficiency badges from the area of Civics and Community. These must include Advocate and Community Service.',
//       'B: Senior Civics and Community':
//         'Earn at least FOUR senior special proficiency badges from Civics and Community. These must include Senior Advocate and Emergency Planner.',
//       'C: Leadership Training':
//         'Participate in a Bronze Arrow Training (BAT) or similar leadership training seminar.',
//       'D: Patrol Leader':
//         'Serve as patrol leader for a minimum of 6 months to the satisfaction of your Examiner.',
//       'E: Research and Action':
//         'Research a social or political issue that is important to you. Write to one of your elected representatives—this may be local, statewide, or national—explaining your position and asking for them to take some action.',
//       'F: Presentation':
//         'Create a presentation for your troop or group about what your scouting experience has taught you about leadership and helping your community. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
//     }),
//     new Skill('assets/images/trailblazer-badges.jpg', 'Trailblazer', {
//       'A: Creative Arts':
//         'Earn at least SIX special proficiency badges from the area of Creative Arts, which must include at least one performing arts badge and one crafting arts badge. Senior level badges may also be substituted in place of special proficiency badges.',
//       'B: Senior Creative Arts ':
//         'Earn at least FOUR senior proficiency badges in Creative Arts, one of which must be Indigineous Art Appreciation.',
//       'C: Instruct Another':
//         'Instruct a fellow scout in one of the disciplines covered in a Creative Arts special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
//       'D: Creative History Project':
//         'Create a special project chronicling your troop’s history over a period of time of at least 6 months. This may be a documentary film, photo series, play, skit, dance, story, or any other creative medium. The length or scale of your project must be determined in consultation with your Examiner, but it must be extensive enough to do justice to your subject and tell your troop’s story. Perform or present your project to your troop.',
//     }),
//     new Skill('assets/images/voyager-badge.jpg', 'Voyager', {
//       'A: Life Skills':
//         'Earn at least SIX special proficiency badges from the area of Life Skills, at least one of which must be an outdoor-focused badge such as Naturalist or Forester and at least one of which must be an indoor-focused badge such as Housewright or Homemaker. Senior level badges may also be substituted in place of special proficiency badges.',
//       'B: Senior Life Skills':
//         'Earn at least THREE senior special proficiency badges from the area of Life Skills.',
//       'C: Instruct Another':
//         'Instruct a fellow scout in one of the disciplines covered in a Life Skills special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
//       'D: Presentation':
//         'Give a presentation to your troop (or group) about something you learned while working on these badges and how you think it can be applied to life beyond just earning a badge. Have you found a hobby, career path or set of skills you plan to use long after your time as a Pathfinder is over? Explain. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
//     }),
//     new Skill('assets/images/polaris.png', 'Polaris Award', {
//       'A: 3 Pillars': 'Complete 3 of the 4 pillars.',
//       'B: Letter of Achievements':
//         'Next, you should submit a letter to national headquarters with a list of your achievements. List details of which badges, awards, and programs you completed to explain how you achieved each of the three pillars. You should write this in a way that you can see for yourself all the work you accomplished to obtain this award. Following in the best traditions of the patrol method, you will hand this letter to your scoutmaster, who will convey it to the regional commissioner, who will in turn deliver it to the national headquarters. This will allow all levels of our organization to celebrate your accomplishment.',
//     }),
//     new Skill('assets/images/goldcompass-award.png', 'Gold Compass Rose', {
//       'A: 4 Pillars':
//         'If you achieve all 4 pillars, you will receive a special gold compass rose disc for your Polaris pin. The compass rose signifies a scout who truly has a compass, a knowledge of all four cardinal aspects of life. With the help of the North Star, your remarkable skills and achievements will navigate you through the challenges and exigencies of life.',
//     }),
//   ];

//   outdoorSkills: Skill[] = [
//     new Skill('assets/images/angler-badge.jpg', 'Angler', {
//       'A: Safety':
//         'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
//       'B: Tools':
//         'Explain and demonstrate how to store and transport your fishing tools and accessories safely and securely',
//       'C: Food Safety':
//         'Explain the food safety considerations you need to make when fishing. For example, how do you store bait safely, and how do you store your catch safely so you can eat it later? Explain how to clean a fish.',
//       'D: Rules and Regulations':
//         'Know and be able to explain the rules and regulations in your local area that govern fishing seasons, catch limits, and locations you are permitted to fish. Know how to obtain a fishing license in your area, if required.',
//       'E: Five Most Common Fish':
//         'Be able to recognize the FIVE most common game fish in the lakes or rivers in your area. Describe the characteristics of each, including the following: A) Appearance, B) Spawning Season, C) Catch size, D) Depth, E) Bait.',
//       'F: Ideal Fishing Spots':
//         'Be able to describe characteristics of ideal fishing spots for each of the five most common game fish in your area. What features of the terrain or water indicate good possible habitats for the fish?',
//       'G: Reels':
//         'Be able to recognize the FOUR different types of reels, and explain the uses and considerations for each one. A) Spincast, B) Spinning, C) Baitcasting, D) Fly.',
//       'H: Setting Up':
//         'Demonstrate how to set up a fishing rod, line, and rig for the five most common types of fish in your area. (Note that no specific rod or reel is required here. Use what you have available.)',
//       'I: Casting and Catching':
//         'Demonstrate how to cast and reel in your catch with your rod. Explain common strategies for how to fight with your catch if it is trying to run or jump',
//       'J: Landing a Fish':
//         'Demonstrate how to land a fish. Explain the consideration and techniques or demonstrate that you can land different sized fish at different elevations (level with the water, from a dock, from a boat, and from a raised shoreline). Explain when and how to use a landing net.',
//       'K: Basic Repairs':
//         'Demonstrate simple repairs to a rod (e.g., whipping a broken rod, whipping on guide rings, replacing the tip top).',
//       'L: Fishing Line':
//         'Explain what to look for when inspecting your fishing line and explain what would indicate that it needs to be replaced. Demonstrate how to re-spool the fishing line on your reel.',
//       'M: Replacing Parts':
//         'Demonstrate how to remove and replace the reel on your rod.',
//       'N: Fishing Plan':
//         'Choose ONE of the five most common game fish in your area and make a plan to catch some examples. For your Examiner, specify what fish you intend to catch, where you plan to go fishing, and what kind of bait you will use.',
//       'O: Fishing Outings':
//         'Over the course of THREE or more outings, catch at least SIX of your target fish. You may not count more than two fish from any single outing as part of your goal. ',
//       'P: Documentation':
//         'For each catch, take a picture, and document what bait and rod you used, your location, and your method for landing the fish.',
//     }),
//     new Skill('assets/images/astronomer-badge.jpg', 'Astronomer', {
//       'A: Safety':
//         'Explain the dangers of eye damage from looking at the sun and how to safely view the sun and objects near the sun.',
//       'B: Knowlege of Solar System':
//         'Demonstrate with diagrams, drawings, or models a good general knowledge of the nature of the sun, moon, stars, and planets. Include their relative sizes, their apparent movements, and the cause of eclipses.',
//       'C: Constellations':
//         'Be able to point out and name the following: A) The Big Dipper, B) The Little Dipper, C) Cassiopeia, D) Orion, E) Polaris, F) Two bright stars other than Polaris, G) Any planets visible to the eye at the time of the test',
//       'D: Polaris and North':
//         'Show how to find Polaris using the Big Dipper and how to use the stars to find north when Polaris is obscured.',
//       'E: Sun and North':
//         'Explain how to use the position of the sun to find north in the daytime.',
//       'F: Visibility':
//         'Explain what factors, including light pollution and air pollution, affect viewing objects in the night sky.',
//       'G: Tools':
//         'Explain the parts of a telescope or binoculars and their use in stargazing.',
//     }),
//     new Skill('assets/images/backpacker-badge.png', 'Backpacker', {
//       'A: Safety':
//         'Discuss with your Examiner what additional safety precautions scouts need to take for backpacking trips and other long journeys, including an understanding of the following: A) The risks specific to backpacking, B) The importance of making a safety plan for a trip, C) The necessity of sharing your itinerary and travel plans with adults who will not be on the trip.',
//       'B: First Aid Kit':
//         'Explain the contents of a first aid kit needed for these ventures. Be prepared to justify your choices',
//       'C: Leave No Trace':
//         'Explain how to apply “Leave No Trace” principles to backpacking and the rules and regulations for backpacking and wilderness camping in your area.',
//       'D: Packing Your Pack':
//         'Demonstrate methods of packing and carrying a complete hiking kit for a 24-hour hike. Your kit should not to weigh more than 20% of your body weight, including the food and water. Sharing of equipment within a patrol is encouraged. Be prepared to justify your choice of gear.',
//       'E: Overnight Hikes':
//         'Take part in THREE overnight hikes, carrying your gear and sleeping out. Two hikes should include 1 night of camping each, and the third hike should include 2 nights camping out. Your scoutmaster may work with you to identify alternative lodging if camping out is not possible. Likewise, while the scoutmaster can set specific distances based on your physical abilities, hikes should be challenging. For example, the hikes with one overnight might be set at 10 miles, while the hike with two overnight outings may be as many as 20-30 miles.',
//       'F: Exploration Project':
//         'Plan a simple exploration project (e.g. mapping all trails in a local park) and submit it to the Examiner for approval. Carry it out alone or with another Pathfinder to the Examiner’s satisfaction.',
//       'G: Orienteer':
//         'Using only map and compass, complete a 3-mile journey with another Pathfinder, changing compass bearings multiple times. An approved orienteering course of sufficient size would meet this requirement.',
//       'H: Planning wth a Map':
//         'From a map, select THREE trails of 8 miles where a good backpacking campsite should be possible. Give your reasons for these choices.',
//       'I: Make Gear':
//         'Make an article of backpacking gear, such as a tent, lightweight tarp, sleeping bag, quilt, campfire blanket, rucksack, or stuff sack.',
//       'J: Hygiene':
//         'Show knowledge of personal hygiene while backpacking, including latrine matters.',
//     }),
//     new Skill('assets/images/bicycle-camp-badge.jpg', 'Bicycle Camper', {
//       'A Prequisite': 'You must have earned the Cyclist badge.',
//       'B Gear':
//         'Know the gear needed for a camping trip by bicycle and how it is different from that needed for other camping trips or shorter bicycle journeys.',
//       'C Packing Your Bike':
//         'Demonstrate the ability to pack your bike for a bike camping trip.',
//       'D Planning a Trip':
//         'Learn about bike camping and the options in your area. Discuss with your Examiner the considerations for route selection and camping site selection when on a multiple-day bicycle tour.',
//       'E Using a Map':
//         'Be able to find on an appropriate map the trails, campsites, and other features you will need for your journey. ',
//       'F Camp Two Nights':
//         'Camp 2 nights as part of a bicycle camping trip. These nights may be part of a single trip, or two separate trips, and may be taken with your patrol.',
//     }),
//     new Skill('assets/images/birder-badge.png', 'Birder', {
//       'A: Twenty Birds':
//         ' Make a list of 20 wild birds personally observed and identified in the open, and show field notes, including (at minimum): A) Date seen, B) Markings, C) Food habits, D) Nesting habits, if known, E) Migration, if any.',
//       'B: Five Birds of Prey': 'Name five birds that eat rats and mice.',
//       'C: Friend to Farmers':
//         ' Make a list of 10 birds valuable to farmers and fruit growers, either by their consumption of crop-damaging insects or as plant pollinators.',
//       'D: Audubon Society':
//         'Tell what the Audubon Society is and how it endeavors to protect birds.',
//       'E: Bird Refuges':
//         'Give the name and location of TWO bird refuges, explain the reason(s) for their establishment, and identify the birds they protect.',
//       'F: Endangered Birds':
//         'List TWO endangered birds in your area, the reason for their endangered status, and describe the practical impact of their protected status on local human activity.',
//       'G: Attracting Birds':
//         'Tell methods to attract birds in winter and summer.',
//     }),
//     new Skill('assets/images/engineer-badge.png', 'Camp Engineer', {
//       'A: Safety':
//         'Explain basic rules of safety when undertaking a pioneering project.',
//       'B: Pioneer Tools':
//         'Describe the content and tools of a basic pioneering kit.',
//       'C: Use of Rope':
//         "Demonstrate and describe pioneering uses for EACH of the following: A) A Spanish windlass for anchoring, B) Two types of holdfast/anchoring systems for different types of soil, C) A sailmaker's whipping, D) A long splice.",
//       'D: Axe Work Test':
//         'Pass or re-pass the axe work test in the First Class badge.',
//       'E: Knots to Know':
//         "Demonstrate FOUR of the following knots, and explain their uses in pioneering: A) Mathead (jury) knot, B) Double sheet bend, C) Alpine butterfly, D) Carrick bend, E) Bowline on a bight, F) Prusik knot, G) Firefighter's chair knot, H) Draw hitch, I) Trucker's hitch, J) Three strand Turk's head woggle.",
//       'F: Supervise Construction':
//         'Supervise the construction of either a simple bridge of no more than 13 feet or a tower no more than 10 feet in height. Demonstrate proper safety techniques for both.',
//       'G: Free-Standing Flagpole':
//         'Construct a free-standing flagpole from scout staves using sheer end-to-end lashings.',
//     }),
//     new Skill('assets/images/camp-badge.png', 'Camper', {
//       'A: Proper Packing ':
//         'Know the normal requirements for the following: A) A personal kit list for weekend camp, B) A personal kit list for a week-long camp.',
//       'B: Layering Clothes':
//         'Demonstrate knowledge of layering for personal clothing, including typical layers required for both an autumn and winter campout.',
//       'C: Hot-Weather Clothing ':
//         'Demonstrate knowledge of appropriate clothing for hot-weather outings.',
//       'D: Packing Demonstration':
//         'Demonstrate the packing of your personal kit in a backpack, rucksack, or kitbag.',
//       'E: Leave No Trace':
//         'Have knowledge of “Leave No Trace” camping standards.',
//       'F: Knots to Know':
//         "Make and show the following knots in use: A) Midshipman's hitch, B) Double sheet bend,C) Figure-of-eight, D) Bowline on a bight.",
//       'G: Pitching a Tent':
//         'Demonstrate the ability to pitch and strike a tent. Pitch the tent for storm conditions. Explain and demonstrate basic care of a tent between outings. Show that you can carry out simple tent repairs, including seam-sealing and patching.',
//       'H: Camp Cleaning and Hygeine':
//         'Show knowledge of methods of waste disposal, dishwashing, and hygiene at camp.',
//       'I: Food at Camp':
//         'While living in camp, cook THREE meals and provide all snacks for yourself during a period of 12-24 hours to the satisfaction of the Examiner. While in camp, you must make satisfactory arrangements for storing food and disposal of garbage.',
//       'J: Camping':
//         'Camp with your troop or patrol for a total of 6 nights after being awarded Tenderfoot.',
//     }),
//     new Skill('assets/images/canoeist-badge.png', 'Canoeist', {
//       'A: Safety':
//         'Explain the basic tenets of canoe safety and special safety equipment brought for a canoe journey of any duration.',
//       'B: The Parts ':
//         'Identify the parts of a canoe and paddle, including (but not limited to) the following: A) Bow, B) Stern, C) Thwarts, D) Gunwale, E) Painter, F) Grip shaft, G) Throat, H) Blade.',
//       'C: Swimming':
//         'Be able to swim 50 yards in clothing (shirt, shorts, and socks). Explain how to handle yourself if you find yourself in either still or moving water.',
//       'D: Using a Throw Bag':
//         'Demonstrate the correct way to use a throw bag and explain the common uses.',
//       'E: Maintaining a Canoe':
//         'Explain how to maintain a canoe in good condition.',
//       'F: Retrieving a Swamped Canoe':
//         'Demonstrate how to retrieve a swamped canoe.',
//       'G: T-Rescue': 'Demonstrate a canoe-over-canoe, or T-rescue.',
//       'H: Strokes':
//         'Demonstrate the following strokes: A) J-stroke, B) Draw, C) Arc.',
//       'I: Packing a Canoe':
//         'Demonstrate the safe and secure method of packing a canoe for transport to a put-in site.',
//       'J: Paddling':
//         'Show skills in paddling a canoe with a single paddle at bow, stern, and amidships. Know the precautions to take in rough water and have knowledge of paddles.',
//       'K: Climbing In and Out':
//         'Demonstrate the ability to climb in and out of an empty canoe in water at least 6 feet deep.',
//       'L: Portaging': 'Know how to portage a canoe.',
//       'M: Facing Problems':
//         'Know how to paddle a canoe to shore in case of loss of paddle, and, in the event of upsetting, the best methods of keeping afloat.',
//       'N: Canoe Journeys':
//         'Take at least FIVE journeys in a canoe, and produce a log of those trips for your Examiner, including route taken, date and time of start and end, weather conditions during the journey, important landmarks or water features, and challenges encountered during the trip.',
//     }),
//     new Skill('assets/images/cooking-badge.jpg', 'Cook', {
//       'A: Kitchen Safety':
//         'Explain the basics of camp kitchen safety, including common injuries and how to treat them and what equipment and materials should be on hand for a safe camp kitchen.',
//       'B: Kitchen Assembly':
//         'Assemble a properly equipped camp kitchen for your patrol, or explain the components to include in a properly equipped camp kitchen and why each item is important.',
//       'C: Storing and Cooking Food':
//         'Know how to store provisions in a hygienic manner, and show that you can cook satisfactorily for a patrol in camp for a complete weekend.',
//       'D: A Balanced Meal':
//         'Be able to explain what constitutes a balanced meal.',
//       'E: Create Menus':
//         'Draw up TWO three-course menus for a six-person patrol. It is not required that all courses are cooked. Prepare a shopping list, including quantities, based on the menus.',
//       'F: Cooking Methods':
//         'Explain and understand THREE other methods of cooking, such as the following: A) Reflector or solar oven, B) Dutch oven, C) Pit BBQ, D) Fire roasting, E) Pickling, F) Open fire',
//       'G: Stove Cooking':
//         'Using a lightweight stove, cook a balanced three-course meal (which may be breakfast). Make coffee, tea, or hot chocolate.',
//       'H: Foil Cooking':
//         'Cook a two-course foil dinner for at least TWO people.',
//     }),
//     new Skill('assets/images/cyclist-badge.png', 'Cyclist', {
//       'A: Regulations':
//         'Demonstrate that you know the following: A) Highway code, B) Traffic signals, C) Hand signals, D) The correct lights to have on your bicycle',
//       'B: Safety Requirements':
//         'Demonstrate understanding of local requirements and when to use common safety equipment and clothing, such as helmet, reflective clothing, or reflectors.',
//       'C: Repair Kit':
//         'Show the repair kit you bring on bike rides and explain the reasons for each item selected. Include a discussion of tools or items considered for the kit but left out.',
//       'D: Bicycle Use':
//         'Demonstrate satisfactory use of a bicycle for at least 6 months. Show that the bicycle is properly equipped and in good working order.',
//       'E: Repairs':
//         'Demonstrate effective, simple repairs, which may include the following (at the discretion of the Examiner): A) Change tire and tube, B) Adjust caliper brakes, C) True a wheel',
//       'F: Advanced Maintenance':
//         'Perform advanced maintenance, including the following: A) Repair a puncture, B) Replace a brake, C) Show how to repair or replace a chain, D) Show how to adjust tension on a derailleur.',
//     }),
//     new Skill('assets/images/flower-badge.png', 'Flower Finder', {
//       'A: Toxins in Plants':
//         'Know several toxins naturally occurring in plants in your area, such as the following: A) Poison ivy, B) Poison oak, C) Poison sumac, D) Jimsonweed, E) Pokeweed, F) Mushrooms, G) Digitalis, H) Foxglove, I) Daffodil, J) Nightshade',
//       'B: Plant Collection':
//         'Make a collection of 25 kinds of wildflowers, native plants, and ferns, and correctly name them. In place of collecting plants, it is permissible to substitute 25 photographs or colored drawings.',
//       'C: Ferns': 'Know THREE kinds of ferns that grow in your region.',
//       'D: Cultivated Plants':
//         'Name and describe 20 cultivated plants in your locality.',
//       'E: Weeds': 'Be able to recognize and identify 10 weeds.',
//       'F: Nut Trees':
//         'Name FIVE trees (in this country) which produce edible nuts.',
//       'G: Tree Flowers':
//         'Know how the flowers of trees differ from each other and other flowers.',
//       'H: Flowering Trees':
//         'Be able to identify THREE kinds of flowering tree.',
//     }),
//     new Skill('assets/images/hiker-badge.png', 'Hiker', {
//       'A: Leave No Trace':
//         'Explain how to apply “Leave No Trace” principles to hiking.',
//       'B: First Aid Kit':
//         'Explain the contents of a first aid kit needed for hiking—both with a buddy and with your patrol. Be prepared to justify your choices.',
//       'C: Hygiene and Foot Care':
//         'Show knowledge of personal hygiene and care of the feet and footgear.',
//       'D: Bear Safety':
//         'Explain the precautions you should take while hiking in known bear country.',
//       'E: Hiking Kit':
//         'Demonstrate methods of packing and carrying a complete hiking kit for a day hike, including what you might require if you unexpectedly needed to spend a night outdoors. Sharing of equipment within a patrol is encouraged. Be prepared to justify your choice of gear.',
//       'F: Go Hiking':
//         'Take part in at least SIX single-day hikes, reaching a cumulative distance of at least 40 miles (or an appropriate distance agreed with your Examiner). Provide a log of your trips to your Examiner, noting trail conditions and markings, deviations from the planned route, good water sources, and wildlife and seasonal flora observed.',
//       'G: Plan a New Route':
//         'On a map depicting an area unfamilar to you, select a route for a 15-mile hike. Use a hiking map that includes contour lines for elevation and will allow you to take compass bearings. Give your reasons for your choice of route.',
//       'H: Make a Scout Staff':
//         'Make a scout staff to a level of completion acceptable to the Examiner. If a scout has already made a staff that satisfies the Examiner, it is not necessary to create a new one.',
//     }),
//     new Skill('assets/images/kayaker-badge.png', 'Kayaker', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//     }),
//     new Skill('assets/images/mariner-badge.png', 'Mariner', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//     new Skill('assets/images/naturalist-badge.png', 'Naturalist', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//     new Skill('assets/images/nautical-camp-badge.png', 'Nautical Camper', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//     new Skill('assets/images/observer-badge.png', 'Observer', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//     }),
//     new Skill('assets/images/orienteer-badge.png', 'Orienteer', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//     new Skill('assets/images/ranger-badge.png', 'Ranger', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//     new Skill('assets/images/rockclimber-badge.png', 'Rock Climber', {
//       'A: ': '',
//       'B: ': '',
//       'C: ': '',
//       'D: ': '',
//       'E: ': '',
//       'F: ': '',
//       'G: ': '',
//       'H: ': '',
//     }),
//   ];

//   civicSkills: Skill[] = [
//     new Skill('assets/images/advocate-badge.png', 'Advocate', {
//       'A: Inclusivity':
//         'Have a conversation with a scoutmaster about why inclusivity is important and how to be supportive of people in your community. Understand the importance of recognizing people in the ways that they identify.',
//       'B: LGBTQIA+ Support':
//         'In support of the LGBTQ+ (Lesbian, Gay, Bisexual, Transgender, Queer, and others) community, create a rainbow flag (or other appropriately supportive flag) from materials of your choice. You may use fabric, yarn, found materials, or anything else. Display your art at your meeting space or at a patrol meeting, and explain to your patrol how you made your art. ',
//       'C: Understanding Flags':
//         'Know why the LGBTQ+ community has flags and the reasons they are displayed. Be able to identify the rainbow flag, the trans flag, and at least TWO other flags used by the LBGTQ+ community.',
//       'D: American Civil Rights Movement':
//         'Learn about the American civil rights movement of the 1960’s and what social progress it has created. Be able to state THREE ways it was not successful.',
//       'E: Microaggressions':
//         'Learn about microaggressions, especially in relation to BIPOC (Black and Indigenous People of Color). Be able to recognize microagressions and how to avoid them.',
//       'F: Native Americans':
//         'Learn about a group of Native Americans in your state, and share what you learn with your group.',
//       'G: Ability Diversity in Scouting':
//         'Demonstrate TWO ways you can adapt to include a person with a disability in your patrol activities. What could you do to include a scout who is blind or deaf? Discuss ways to be inclusive of those with learning disabilities like dyslexia. ',
//       'H: Religions':
//         'Be able to name THREE religions that are not your own, and tell something about them.',
//       'I: Women in Government':
//         'Women obtained the right to vote in 1920 but are not equally represented in American government. Is your state senator a woman? Your governor? Your mayor? Learn about a woman who is in government and what issues she believes are still a challenge for women today.',
//       'J: Community Service':
//         'Participate in a community service project in your community that helps a group that has faced discrimination, or partner with an organization that has members who have faced discrimination.',
//     }),
//     new Skill('assets/images/child-care-badge.png', 'Child Care', {
//       'A: Knowing What to Know': 'Know how to take down important information from parents/guardians before sitting, including emergency contact info, child’s allergies, or other medical information',
//       'B: Emergency Preparations': 'Know what kind of emergencies can arise while babysitting, when to call 911, and other ways to respond to an emergency. ',
//       'C: Diaper Changing': 'Demonstrate how to change a diaper. Using a doll is acceptable.',
//       'D: Holding a Baby': 'Demonstrate THREE different ways to hold a baby that is under the age of 6 months. This may also be demonstrated using a life-sized doll.',
//       'E: Appropriate Foods': 'Know what foods are considered choking hazards for toddlers and what snacks to give instead.',
//       'F: Baby Development': 'Know at what age a typical baby can crawl, walk, speak a few words, and wave goodbye.',
//       'G: Crying Babies': 'Know what things to check if a baby is crying, and name ways to soothe or comfort them.',
//       'H: Child Proofing': 'Know how and why to childproof a home, including the use of cabinet locks, outlet covers, toilet locks, and baby gates.',
//       'I: Playtime': 'Know FOUR games that you can play with a toddler.',
//       'J: Entertaining a Child': 'Demonstrate the ability to entertain a child under the age of four for at least 10 minutes.',
//     }),
//     new Skill(
//       'assets/images/civics_and_government-badge.png',
//       'Civics and Government',
//       {
//         "A: Branches of Government": "Name the THREE branches of the federal government. Identify the branch tasked with implementing and enforcing the laws.",
//         "B: Citizenship": "Demonstrate that you can answer the following questions on citizenship: A) Who is a citizen of the United States? B) How can a person become a citizen? C) What are the advantages of being a citizen?",
//         "C: Petitioning the Government": "Describe THREE ways you can petition the federal government about an issue.",
//         "D: Civics Practice Test": "Pass the Civics Practice Test published by the federal government at https://www.uscis.gov/citizenship/find-study-materials-and-resources",
//         "E: Making Laws": "Name the body responsible for creating the laws in your state. How does this body differ from the structure of the United States Congress?",
//         "F: Citizens and Law": "Describe what role citizens of your state have in creating or amending laws.",
//         "G: Voting": "Demonstrate that you can answer the following questions on voting: A) What are the principal qualifications in your state to be eligible to vote? B) What is the difference between registering to vote and joining a political party? C) What is straight-ticket voting? If you enroll in a political party, must you vote the straight ticket of that party?",
//         "H: Strucure of Your Local Government": "Describe the structure of the government of your village, town, city, county, or parish.",
//         "I: Jobs of Your Local Government": "What are the primary jobs of your local government?",
//         "J: Letter to Your Local Government": "Write to a member of your local government about an issue that is important to you, your family, or your community.",
//         "K: Your Life and the Government": "Name FIVE things on which the comfort and welfare of your family depend that are controlled by, or directly affected by, your local, state, or national government.",
//       }
//     ),
//     new Skill(
//       'assets/images/community_service-badge.png',
//       'Community Service',
//       {
//         "A: Community Service Project 1": "Participate in at least SEVEN different community service projects that have been pre-approved by your Examiner. You may do projects with your patrol or individually. Projects chosen should demonstrate the scouting ideal of service. Some possible topics are: food scarcity, animal welfare, community outreach, homelessness, civics, elderly, environment, and social justice/human rights. See the handbook for additional information.",
//         "B: Community Service Project 2": "",
//         "C: Community Service Project 3": "",
//         "D: Community Service Project 4": "",
//         "E: Community Service Project 5": "",
//         "F: Community Service Project 6": "",
//         "G: Community Service Project 7": "",
//         "H: Presentation": "Make a presentation to your patrol discussing at least ONE of the projects, including explanations of why you chose it and what you learned.",
//       }
//     ),
//     new Skill('assets/images/conservationist-badge.png', 
//     'Conservationist', 
//     {
//       "A: Carbon Footprint": "Learn what a carbon footprint is, and calculate what your family’s carbon footprint is right now. State THREE ways to reduce your carbon footprint. ",
//       "B: Recycling": "Learn about what is and isn’t recycled at your local recycling center. List 10 items that people think get recycled but really don’t. Explain why this is a problem.",
//       "C: Zero-Waste": "Learn about zero-waste products. Know several reusable products you can buy or make to replace single-use items made of (or packaged in) plastic or paper. With your family, make at least ONE change in your household to reduce your family’s waste production, and make a list of SEVEN more things you could do in the future to move towards creating zero waste. ",
//       "D: Commercial Industry": "Learn about an environmental issue that is caused by commercial industry and is beyond the control of individual citizens. Write a letter to an appropriate member of government, such as your senator, asking them to make laws to protect the environment from this issue.",
//       "E: Ecological Disasters": "Investigate a human-made ecological disaster, such as an oil spill, strip mine, or a forest fire. Be able to explain to your Examiner why it was a disaster and how long the clean-up efforts took. If it is not all cleaned up or reclaimed, explain the long-term effects on the local environment. ",
//       "F: Industrial Farming": "Research industrial farming, and find out how it can affect the local water, air, and soil quality. ",
//       "G: Conservation": "Learn about THREE corporations or non-profits that are participating in conservation efforts. Do you feel they are more or less effective than the Environmental Protection Agency (EPA)? ",
//       "H: Electronic Recycling": "Learn how personal electronic devices, like cell phones, are recycled.",
//       "I: Leave No Trace": "State what “Leave No Trace” means and demonstrate the concept at a patrol event.",
//     }),
//     new Skill('assets/images/debater-badge.png', 'Debater', 
//     {
//       "A: Debate vs. Argument": "Explain to your Examiner the difference between a debate and an argument",
//       "B: Analyze a Debate": "Do ONE of the following: A) Watch a debate between candidates for any elected office, and then discuss with your Examiner whether the candidates were or were not persuasive. Did the candidates find common ground on any issues? What did you learn from the debate that you hadn’t previously considered? B) Look up a famous debate in history, such as the 1858 campaign debates between Abraham Lincoln and Stephen Douglas or the 1985 debate about apartheid between Jesse Jackson and Jerry Falwell. State why that debate was important. Discuss with your Examiner who was considered the winner and why they won. What changes occurred because of the debate? Did the debaters on the topic find any common ground? ",
//       "C: Important Components of a Debate": "Have a discussion with your Examiner about what you consider to be the most important components of a debate. Include discussion of how one prepares for a debate and methods for acknowledging another’s point of view with respect but without necessarily agreeing with them.",
//       "D: Participate in a Debate": "Participate in a debate, either in school or by organizing one within your patrol or troop (or other setting approved by your Examiner). The topic(s) may be of relatively small importance (e.g., “Which is better, cats or dogs?”). As part of the debate experience, present both sides of at least one argument yourself. For example, during one round you express why cats are better, and on the next round you convince your audience dogs are better. Explain to your Examiner what rules were in place for the debate and how those rules were enforced. How long were participants given? Were rebuttals an option? How were the questions decided?",
      
//     }),
//     new Skill('assets/images/firefighter-badge.png', 'Firefighter', 
//     {
//       "A: Your Local Fire Department": "Explain how your local fire department works. Consider the following questions: A) Is firefighting volunteer or a career? B) Is the fire department staffed 24 hours a day? C) How many stations are in your town where you live? Where is the closest station to your house? D) How does the fire department get activated in your town?",
//       "B: Combustion and The Fire Triangle": "Explain the process of combustion and the fire triangle. A) Know the effects of smoke and heat and how to act in smoke. B) Know the dangers involved, and understand the fire precautions necessary, in the home, with respect to the following: 1) Electric wiring, 2) Appliances and fuses, 3) Oil and solid fuel heaters, 4) Candles, 5) Party decorations, 6) Propane tanks.",
//       "C: Fire at Camp": "Know the dangers of fire at camp and what precautions should be taken.",
//       "D: Grass and Forest Fires": "Know the causes of, and how to deal with, grass and forest fires.",
//       "E: Action When There's Fire": "Explain what action should be taken, and why, for an outbreak of fire in the home or outdoors. With the people that live in your home, develop an emergency plan and a meeting location (e.g., a large tree on your street or the neighbor’s house) in the event that a fire requires evacuation. ",
//       "F: Using a Fire Extinguisher": "Know how to use fire extinguishers and what fires they are to be used on. Explain the acronym PASS (Pull, Aim, Squeeze, Sweep). Demonstrate the PASS method without discharging an actual extinguisher.",
//       "G: Clothes on Fire": "Know how to deal with a person whose clothes are on fire. Explain the “stop, drop, and roll” technique. ",
//       "H: Dragging a Person": "Demonstrate how to safely drag an unconscious person who is too large for you to carry.",
//       "I: Fire Safety Tools": "Understand the function of THREE of the following: A() Fire-resisting doors, B) Sprinkler systems, C) Standpipes, D) Smoke detectors, E) Fire alarms",
//       "J: Fire Risk Assessment": "Demonstrate that you understand fire risks in public places and what precautions you can take for yourself. For example, locate the emergency exits. Explain to your Examiner a quick exit plan. ",
//     }),
//     new Skill('assets/images/first_aid-badge.png', 'First Aid', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/guide-badge.png', 'Guide', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/healthy_living-badge.png', 'Healthy Living', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/historian-badge.png', 'Historian', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/interpreter-badge.png', 'Interpreter', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill(
//       'assets/images/world_friendship-badge.png',
//       'World Friendship',
//       {}
//     ),
//   ];
//   creativeSkills: Skill[] = [
//     new Skill('assets/images/architect-badge.png', 'Architect', {
//       'A: Scale Drawing':
//         'Present freehand or CAD drawings of a subject (agreed upon with your Examiner), including a study of scale. Draw a single object at several different scales.',
//       'B: Tools':
//         'Explain the use of the following tools: A) Architectural scale, B) Drafting compass, C) T square.',
//       'C: Components of Construction':
//         'Learn about EACH of the following basic components of construction. Describe how architects specify materials appropriately based on the expected use and conditions: A) Concrete, B) Timber, C) Stone, D) Gypsum, E) Metal, F) Glass. ',
//       'D: Tour and Interview':
//         'Tour a building site or an architecture/structural engineers’ office, or interview a builder or architect.',
//       'E: Building Codes':
//         'Tour a building site or an architecture/structural engineers’ office, or interview a builder or architect.',
//       'F: Architecture Professions':
//         'Know the differences between the following professions: A) Architect, B: Civil Engineer, C) Structural Engineer, D) Mechanical Engineer, E) Geotechnical Engineer, F) Interior Design.',
//       'G: Architect and Engineers at Work':
//         'Be able to discuss what types of renovation or construction work in your area require the involvement of an architect or engineer, and why those professionals are required.',
//     }),
//     new Skill('assets/images/basket-badge.png', 'Basket Worker', 
//     {
//       "A: Usable Raw Materials": "Have a general knowledge of the raw materials that may be used to create baskets or other woven items of practical use.",
//       "B: How to Find and Prepare Materials": "Know where the raw material is obtained and how it is prepared for working.",
//       "C: Produce an Item": "Produce an article of practical use in either basket, cane, rush, or straw work, made entirely on your own. This could include weaving the cane seat for a chair, for example, without building the chair itself. The project should be approved by your Examiner prior to beginning.",
//     }),
//     new Skill('assets/images/dancer-badge.png', 'Dancer', 
//     {
//       "A: Traditional Dance": "Learn ONE of EACH of the following groups of dances: A) A line dance: The Electric Slide, the Boot Scoot Boogie, the Macarena, or a similar dance. B) The Twist, the Mashed Potato, or the Swim. C) A square dance or folk dance of any culture.",
//     "B: Culture of Dance": "Speak with your Examiner about the cultural power of dance.",
//     "C: Modern Dance": "Learn three modern dances, and demonstrate them to your group or your Examiner (however you are comfortable).",
//     }),
//     new Skill('assets/images/drummer-badge.png', 'Drummer', 
//     {
//       "A: Drum Rudients": "Perform EACH of the following rudiments with drum sticks (on a drum or drum pad) or with a hand drum: A) Single stroke roll, B) Double stroke roll, C) Flam, both right and left hand, D) Single paradiddle, E) Single dragadiddle, F) Five stroke roll, G) Seven stroke roll",
//       "B: Perform": "Play along with a simple song or chant for your patrol.",
//     }),
//     new Skill('assets/images/entertainer-badge.png', 'Entertainer', 
//     {
//       "A: Develop a Performance": "Develop material for public performance, doing ONE of the following: A) Write original material for performance. B) Find material written by others that could be performed or adapted for performance.",
//       "B: Reherse": "Practice your material prior to performance. Explain to your Examiner what you learned during rehearsal and how it improved your final performance.",
//       "C: Perform": "Perform in front of audiences at least TWO times for new material you have written or helped write or at least FOUR times for pre-existing material or material written by someone other than yourself.",
//     }),
//     new Skill('assets/images/filmmaker-badge.png', 'Filmmaker', 
//     {
//       "A: Create a Short Film": "Create a short film, at least 5 minutes in length. Your film can be educational or purely entertaining. The film should showcase your understanding of the techniques required to produce an enjoyable program, including the following: A) Sound, B) Editing, C) Pan and zoom, D) Voice-over, E) Title screen, F) Credits screen ",
//       "B: Lighting": "Explain direct and indirect lighting and how each can be used to highlight a subject for effect.",
//       "C: Aspect Ratios": "Identify THREE different aspect ratios, and identify why one may be chosen over another.",
//       "D: Focus": "Understand the difference between autofocus and manual focus and why one may work better than the other for videography.",
//       "E: Microphone Use": "Be able to state how far away most microphones will work for amateur video purposes.",
//       "F: Upload Film": "Upload your film to a platform where your patrol and your scout leader can view it, and let them watch your film.",
//       "G: Copyright": "Be able to discuss copyright issues relating to your own work as well as to the photos, music, and videos created by other artists.",
//   }),
//     new Skill('assets/images/musician-badge.png', 'Musician', 
//     {
//       "A: Play/Sing a Scale": "Play or sing a scale and know its composition.",
//       "B: Write a Scale": "Write a scale in either the treble clef, bass clef, or other appropriate notation system.",
//       "C: Intervals": "Identify all intervals present in the scale presented.",
//       "D: Time": "Be able to distinguish between pieces in 3 and 4 time.",
//       "E: Notation": "Draw the symbols for quarter, half, and whole notes in Western notation.",
//       "F: Composers": "Name FIVE composers and one composition of each.",
//       "G: Perform for Group": "Play or sing a song as a performance for your patrol, if you are comfortable, or devise an alternative performance with your Examiner.",
//       "H: Perform from Memory": "Play or sing, correctly from memory, ONE piece of music.",
//       "I: Sight Read": "Sight read (vocally or instrumentally) a moderately difficult piece chosen by your Examiner. Explain all signs and terms in the notation.",
//       "J: Types of Instruments": "Name the following: A) At least THREE instruments in a traditional western orchestra, B) At least THREE instruments that might appear in a rock or country band, C) At least SIX instruments found in any style of music performance outside of the western tradition",
//   }),
//     new Skill('assets/images/paracordist-badge.png', 'Paracordist', 
//     {
//       "A: Make 3": "Make at least THREE of the following items with paracord. Use at least TWO colors in one of your projects. A) Bracelet, B) Necklace, C) Water bottle holder that attaches to your pack or gear, D) A decorative knot/design for use as an ornament or key chain, E) A useful item, such as a sling, hammock, or bag",
//       "B: 5 Uses": "Be able to state FIVE things a scout could use paracord for while camping or in an emergency.",
//       "C: Types of Paracord": "Have knowledge of the different weights/grades of paracord.",
//     }),
//     new Skill('assets/images/photographer-badge.png', 'Photographer', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/sculptor-badge.png', 'Sculptor', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//     new Skill('assets/images/visualart-badge.png', 'Visual Artist', {"A: ": "",
//     "B: ": "",
//     "C: ": "",
//     "D: ": "",
//     "E: ": "",
//     "F: ": "",
//     "G: ": "",
//     "H: ": "",}),
//   ];
//   lifeSkills: Skill[] = [
//     new Skill('assets/images/archer-badge.png', 'Archer', {
//       'A: First Aid':
//         'Be able to explain first aid skills that may apply to archery.',
//       'B: Range Saftey and Scoring ':
//         'Understand range safety and scoring rules: A) Name and explain the FOUR whistle commands used on range, B) Name and explain THREE safety rules while on the shooting line, C) Name and explain THREE safety rules when retrieving arrows, D) Demonstrate how to carry arrows safely in your hand, E) Explain importance of obedience to range officer or other officer in charge of the range, F) Explain the difference between an end and a round, G) Explain scoring for the five-color World Archery Federation, H) Explain scoring for the National Field Archery Association (NFAA) targets, both outdoor and indoor, I) Explain, and give distance measurements in yards, for the target line, the shooting line, and the waiting line.',
//       'C: Eye Dominance ':
//         'Know and discuss eye dominance: A) Name and explain THREE methods to determine eye dominance, B) Explain why knowing eye dominance determines positioning on shooting line, C)  Explain how knowing eye dominance determines choice of bow and stance.',
//       'D: Shooting a Bow':
//         'Demonstrate the following 11 steps and explain each: A) Stance, B) Nock, C) Draw and placement, D) Bow and placement, E) Pre-draw, F) Draw, G) Anchor, H) Aim, I) Shot setup, J) Release, K) Follow through and reflect',
//       'E: Arrows':
//         'Know and be able to state the following information about arrows: A)  Identify and name the parts of an arrow, including the following: shaft, vanes(fletching), index vane, nock, point, crest (markings on shaft)',
//       'F: Gear Storage':
//         'Explain proper use, care, and storage of archery gear: tabs (shooting gloves), arm guards, release aids, bow sights, bow stringer, quiver.',
//       'G: Recurve vs. Compound Bow ':
//         'Understand the difference between a recurve bow and a compound bow, and choose to complete EITHER of the two qualifications below.',
//       'H: Qualify with Recurve or Compound Bow':
//         'See Handbook for Details. Includes 6 steps each regarding parts, care, and proper use.',
//     }),
//     new Skill('assets/images/athlete-badge.png', 'Athlete', {
//       'A: Training and Injury Prevention':
//         'Research and explain to your Examiner the basics of how to train for athletic competition and what risks to avoid. Discuss how stress injuries can occur and how to avoid them. Demonstrate good warm-up and cool-down techniques.',
//       'B: First Aid ':
//         'Know about injuries that can occur in your sport and basic first aid to treat them',
//       'C: Competition Rules and Etiquette ':
//         'Demonstrate for your Examiner a thorough knowledge of the rules and etiquette of competition for your chosen sport. Explain the equipment required, including and protective equipment.',
//       'D: Integrity ':
//         'Explain integrity in fair play with regard to sports. Why is it important? Give several examples of when you have seen it demonstrated by amateur or professional players.',
//       'E: Team Leaders and Players ':
//         'Explain the attributes of a good team leader and a good team player.',
//       'F: Practice ':
//         'Understand the fundamentals of “practice like you play.” ',
//       'G: Take Part in Organized Sport':
//         'Take part as a member of an organized sport for at least 2 seasons. During your participation, track your performance, and be able to share how you have made significant improvement in your performance over that time.',
//     }),
//     new Skill('assets/images/beekeeper-badge.png', 
//     'Beekeeper', 
//     {
//       "A: First Aid and Safety": "Know the first aid treatment for bee stings. Explain the protective gear most beekeepers use and why they use it. ",
//       "B: A Swarm": "What constitutes a swarm of bees? How do they live?",
//       "C: Honey": "Tell how honey is gathered and stored, how honeycomb is built, and what part the queen, drones, and workers play in the life of the colony",
//       "D: All About Bees": "Be able to recognize and describe EACH of the following: A) Queen, B) Drones, C) Workers, D) Eggs, E) Larvae, F) Pupae, G) Honey, H) Bee food, I) Wax, J) Pollen, K) Propolis, L) Brood-nest, M) Comb, N) Different queen cells",
//       "E: Bee Keeping": "Have practical knowledge of bee keeping, and provide a statement from a beekeeper stating you assisted in the following: A) Hiving a swarm, B) Examining a colony, C) Removing the comb, D) Finding the queen, E) Putting foundation in sections, F) Filling and removing supers, G) Preparing honey in comb and strained for market",
//       "F: Flowers": "Know which flowers afford the best food for bees and how honey varies in both color and flavor according to the flowers",
//     }),
//     new Skill('assets/images/canner-badge.png', 
//     'Canner', 
//     {
//       "A: Canning Safety": "Explain the essential sterilization and storage rules for canning safety.",
//       "B: Submit Specimens": "Submit TWO of the following specimens of canning work: A) Three pints of freezer-packed vegetables, single or mixed, B) Three jars of preserved fruit (at least two kinds), C) Three glasses of jelly, jam, or marmalade",
//       "C: Proper Selection of Food": "Know the essential things to be considered when selecting vegetables to be canned, fruit to be preserved, or fruit made into jelly, jam, or marmalade.",
//       "D: Prepping Food": "Give general rules for preparing fruits and vegetables for preserving in any way.",
//       "E: Storage Materials": "Explain the kind of jars that are considered best for preserving. What other materials are used to store preserved foods besides glass? How should all utensils, jars, glasses, rubbers, etc., be prepared for use?",
//       "F: Preserving Fruit": "Explain the general rules for preserving fruit. Provide the following for both the fruits that you submitted for Requirement 2 and for at least TWO other specimens: A) List of ingredients, B) Measurements or proportions of each ingredient (volume or weight), C) Time of cooking",
//       "G: Preserving Jam": "Give the same rules for jams, marmalades, and jellies.",
//       "H: Filling and Sealing Jars": "Give directions for filling and sealing jars. How can jars be tested within 24 hours after filling? If the jars are not found to be airtight what should be done?",
//       "I: Storing": "What should be done to all jars, tumblers, etc., before storing? How are canned goods best stored?",
//       "J: Fermentation": "Discuss basic fermentation principles for items, such as pickles or sauerkraut. How does fermentation preserve food? Be able to discuss the roles of yeast, bacteria, alcohol, sugar, and decomposition.",
//     }),
//     new Skill('assets/images/chicken_farmer-badge.png', 
//     'Chicken Farmer', 
//     {
//       "A: A Chicken's Life": "Know the life cycle of a chicken. Hatch chicks with an incubator, if possible.",
//       "B: Chicken Breeds": "Know the difference between at least FOUR breeds of hen, and know which breeds are layers and which are broilers.",
//       "C: Chicken Feed": "Know what to feed hens to maximize egg production.",
//       "D: Risk to Chickens": "4 Know what predators and risks are associated with having chickens.",
//       "E: Cooking Eggs": "Be able to cook eggs FOUR ways.",
//       "F: Make Something for Your Chickens": "Build or create something for the well-being of your chickens. This could be a coop, feed dispenser, ramp, pen, or other item that helps your chickens be happy and safe.",
//     }),
//     new Skill('assets/images/collector-badge.png', 
//     'Collector', 
//     {
//       "A: Build Up a Collection": "Over a period of 6 months, make or add to a collection of stamps, fossils, coins, matchbox labels, or something else of your choosing. Organize your collection and display it to your patrol.",
//       "B: Origin of Your Collection": "When displaying the collection for your patrol, explain how you became interested in collecting these items, and be able to describe the origin of items in your collection.",
//       "C: Interest in Your Colection": "Explain why you find your collection interesting, and be able to talk to the Examiner about it with understanding.",
//       "D: Displaying Your Collection": "Know about correct methods of displaying your collection. Why are these methods important?",
//       "E: History of Collecting": "Know the history of collections similar to yours. For example, if you collect stamps, be prepared to discuss the history of philately.",
//     }),
//     new Skill('assets/images/equestrian-badge.png', 
//     'Equestrian', 
//     {
//       "A: Dress": "Demonstrate that you know how to dress safely for riding.",
//       "B: Safety": "Know the safety rules for approaching and catching a horse.",
//       "C: Tack Check": "Demonstrate an appropriate tack safety check before mounting.",
//       "D: Daddle and Bridle": "Demonstrate how to saddle and bridle a horse correctly, and show a horse in-hand.",
//       "E: Caring for a Horse": "Water, feed, and groom a horse correctly.",
//       "F: Strip, Clean, Assemble": "Strip, clean, and assemble either a saddle and bridle or harness and bridle.",
//       "G: Horse Biology": "Know the parts of a horse, and be able to detect lameness and other common ailments.",
//       "H: Riding": "Ride a horse at all paces appropriate for that horse, and demonstrate turning and stopping.",
//       "I: Different Bridles and Saddles": "Explain TWO different kinds of saddle and bridle and the advantages and disadvantages of each.",
//       "J: Types of Horses and Ponies": "Be able to identify at least FIVE different kinds of horses or ponies.",
//     }),
//     new Skill('assets/images/forester-badge.png', 
//     'Forester', 
//     {
//       "A: Native Species": "Identify the principal native tree species in your own locality, and explain its principal distinguishing characteristics.",
//       "B: Shrubs": "Identify FIVE kinds of shrubs.",
//       "C: Use of Woods": "Describe the principal uses of 10 species of North American woods. Visit a cabinet shop, furniture maker, or other wood-using factory, and explain to your Examiner what woods were used for which products and why those woods were used.",
//       "D: Forestry": "Explain the aim of forestry, and how that goal contends with the agriculture industry and unregulated lumbering. Learn about how state regulatory agencies balance recreation and commercial forestry.",
//       "E: Forest Fires": "Describe the effects of fires on soil, young forest growth, and mature timber; the principal causes of forest fires and how best to overcome them; and THREE general classes of forest fires and how to fight each. Learn about controlled burns, needed burns, and slash-and-burn farming. ",
//       "F: Protected Lands": "Describe how the forest lands are protected and administered in your state.",
//       "G: Lumbering and Pulpwood": "Describe the general features of a lumbering or pulpwood operation. How is the cutting done in the woods? How is the wood transported to the mill? How is the lumber prepared once at the mill? Visit a sawmill, pulp mill, or paper mill, if practicable.",
//       "H: Tree Enemies": "Discuss one or more of the enemies of trees, such as insects (e.g., leaf eaters, bark borers, or wood borers), fungus, or diseases. Tell something of how damage from these sources may be lessened or overcome.",
//       "I: Globalization and Forestry": "Express the impact of globalization on forestry and the history of forestry in your area.",
//       "J: Education for Employment": "Learn, and be able to discuss, what kind of education is needed to become a forester, arborist, millwright, or forest ranger.",
//     }),
//     new Skill('assets/images/gardener-badge.png', 
//     'Gardener', 
//     {
//       "A: Preparing a Plot": "Double dig a piece of ground at least 12 square feet, or prepare an equivalent container garden.",
//       "B: Grow Vegetables": "Plant and successfully grow FOUR kinds of vegetables or flowers from seeds or cuttings.",
//       "C: Garden Plants": "Know the names of EIGHT plants your Examiner has pointed out in an ordinary garden. ",
//       "D: Know the Terms": "Understand what is meant by pruning, grafting, and manuring.",
//       "E: Garden Pests": "Be able to identify the THREE most common insect pests in your garden.",
//       "F: Common Weeds": "Be able to identify the THREE most common weeds in your garden.",
//       "G: Fungal Control": "Be able to suggest methods for fungal control.",
//       "H: Organic vs Industrial Gardening": "Describe the difference between organic and industrial gardening.",
//     }),
//     new Skill('assets/images/geologist-badge.png', 
//     'Geologist', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/homemaker-badge.png', 
//     'Homemaker', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/hospitality-badge.png', 
//     'Hospitality', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/housewright-badge.png', 
//     'Housewright', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/journalist-badge.png', 
//     'Journalist', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/martial_artist-badge.png', 
//     'Martial Artist', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/meteorologist-badge.png', 
//     'Meteorologist', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill(
//       'assets/images/personal_finance-badge.png',
//       'Personal Finance',
//       {
//         "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//       }
//     ),
//     new Skill('assets/images/reader-badge.jpg', 
//     'Reader', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/sharpshooter-badge.png', 
//     'Sharpshooter', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/signaler-badge.png', 
//     'Signaler', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/swimmer-badge.png', 
//     'Swimmer', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/tailor-badge.png', 
//     'Tailor', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//     new Skill('assets/images/zoologist-badge.png', 
//     'Zoologist', 
//     {
//       "A: ": "",
//       "B: ": "",
//       "C: ": "",
//       "D: ": "",
//       "E: ": "",
//       "F: ": "",
//       "G: ": "",
//       "H: ": "",
//     }),
//   ];

//   getGenSkills() {
//     return this.genSkills.slice();
//   }

//   getOutdoorSkills() {
//     return this.outdoorSkills.slice();
//   }

//   getCivicSkills() {
//     return this.civicSkills.slice();
//   }

//   getCreativeSkills() {
//     return this.creativeSkills.slice();
//   }
//   getLifeSkills() {
//     return this.lifeSkills.slice();
//   }
// }
