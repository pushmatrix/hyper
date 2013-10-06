//
// I got some of this list from http://www.squishybug.com/fda/public/dload_bin/team.doc.
// Supposed to be to help people create AutoDueling Team Names, but I found it
// makes good random Team Names in General, thanks for the list.
//
// I make an array of words for everything in the list.
// Then I roll 2 d10 dice, and pick one thing from each
// list.  I take a random word from each of the lists, and
// viola a Team Name.  I found this way is best because
// their are so many different variations.
// 
//
//d10	First Roll						Second Roll
//--- ----------						-----------
//1	Choose an emotion					Choose an animal
//2	Chose a mode of transportation		Choose a mythological character
//3	Choose a type of rock				Choose an insect
//4	Choose any superlative (amazing, etc.)	A synonym for "warrior"
//5	A synonym for "crazy"				Choose a type of weather
//6	Choose a colour					Your first name, plural
//7	Choose any adjective				Choose a title or honorific (knights, etc.)
//8	Use your sponsor's name				Choose a profession
//9	Choose a type of metal				Choose a weapon
//10	Choose a city					A synonym for speed
//

//
// First Roll (fr) Arrays
//
	//
	//Choose an emotion - Array
	//
	var fr1Max = 12;
	var fr1 = new Array(fr1Max);

	fr1[1] = "Happy"
	fr1[2] = "Sad"
	fr1[3] = "Angry"
	fr1[4] = "Violent"
	fr1[5] = "Mellow"
	fr1[6] = "Joyful"
	fr1[7] = "UnHappy"
	fr1[8] = "Very Sad"
	fr1[9] = "Totally Angry"
	fr1[10] = "Very Violent"
	fr1[11] = "Happy Mellow"
	fr1[12] = "Totally Joyful"

	//
	//Chose a mode of transportation - Array
	//
	var fr2Max = 16;
	var fr2 = new Array(fr2Max);

	fr2[1] = "Driving"
	fr2[2] = "Flying"
	fr2[3] = "Trucking"
	fr2[4] = "Boating"
	fr2[5] = "Hard Driving"
	fr2[6] = "High Flying"
	fr2[7] = "Hiking"
	fr2[8] = "High Flying"
	fr2[9] = "Sailing"
	fr2[10] = "Singing"
	fr2[11] = "Swimming"
	fr2[12] = "Dancing"
	fr2[13] = "Running"
	fr2[14] = "Cycling"
	fr2[15] = "Sleeping"
	fr2[16] = "Blogging"

	//
	//Choose a type of rock - Array
	//
	var fr3Max = 9;
	var fr3 = new Array(fr3Max);

	fr3[1] = "Igneous"
	fr3[2] = "Sedimentary"
	fr3[3] = "Metamorphic"
	fr3[4] = "Ingeniously Igneous"
	fr3[5] = "Surely Sedimentary"
	fr3[6] = "Mighty Metamorphic"
	fr3[7] = "Holy Igneous"
	fr3[8] = "Sexy Sedimentary"
	fr3[9] = "Mega Metamorphic"

	//
	//Choose any superlative - Array
	//
	var fr4Max = 13;
	var fr4 = new Array(fr4Max);

	fr4[1] = "Awesomest"
	fr4[2] = "Cleverest"
	fr4[3] = "Furthest"
	fr4[4] = "Best"
	fr4[5] = "Hottest"
	fr4[6] = "Least"
	fr4[7] = "Most"
	fr4[8] = "Narrowest"
	fr4[9] = "Prettiest"
	fr4[10] = "Shyest"
	fr4[11] = "The Best"
	fr4[12] = "The Hottest"
	fr4[13] = "Clearly the Cleverest"

	//
	//A synonym for "crazy" - Array
	//
	var fr5Max = 86;
	var fr5 = new Array(fr5Max);

	fr5[1] = "Insane"
	fr5[2] = "Maniac"
	fr5[3] = "Nuts"
	fr5[4] = "Homogenize"
	fr5[5] = "Loopy"
	fr5[6] = "Psycho"
	fr5[7] = "Skitzo"
	fr5[8] = "Zany"
	fr5[9] = "Lunatic"
	fr5[10] = "Hyper"
	fr5[11] = "Loco"
	fr5[12] = "Absurd"   
	fr5[13] = "Ape"      
	fr5[14] = "Balmy"    
	fr5[15] = "Barmy"    
	fr5[16] = "Batty"    
	fr5[17] = "Berserk"  
	fr5[18] = "Bizarre"  
	fr5[19] = "Bonkers"  
	fr5[20] = "Cockeyed" 
	fr5[21] = "Cracked"  
	fr5[22] = "Crazed"   
	fr5[23] = "Cuckoo"   
	fr5[24] = "Daft"     
	fr5[25] = "Delirious"
	fr5[26] = "Demented" 
	fr5[27] = "Deranged" 
	fr5[28] = "Derisory" 
	fr5[29] = "Dingy"    
	fr5[30] = "Dippy"    
	fr5[31] = "Eccentric"     
	fr5[32] = "Erratic"       
	fr5[33] = "Fantastic"     
	fr5[34] = "Fatuous"       
	fr5[35] = "Flaky"         
	fr5[36] = "Flipped"       
	fr5[37] = "Foolhardy"     
	fr5[38] = "Lovely"       
	fr5[39] = "Freaked"       
	fr5[40] = "Fruity"        
	fr5[41] = "Goofy"         
	fr5[42] = "Half-baked"    
	fr5[43] = "Harebrained"   
	fr5[44] = "Haywire"       
	fr5[45] = "Marvelous"       
	fr5[46] = "Ill-conceived" 
	fr5[47] = "Imprudent"     
	fr5[48] = "Inane"         
	fr5[49] = "Inappropriate" 
	fr5[50] = "Insane"
	fr5[51] = "Irresponsible"
	fr5[52] = "Kooky"        
	fr5[53] = "Loony"        
	fr5[54] = "Ludicrous"    
	fr5[55] = "Mad"          
	fr5[56] = "Maniacal"     
	fr5[57] = "Mental"       
	fr5[58] = "Moonstruck"   
	fr5[59] = "Nonsensical"  
	fr5[60] = "Nuts"         
	fr5[61] = "Nutty"        
	fr5[62] = "Odd"          
	fr5[63] = "Outrageous"   
	fr5[64] = "Peculiar"     
	fr5[65] = "Potty"        
	fr5[66] = "Preposterous" 
	fr5[67] = "Psycho"       
	fr5[68] = "Puerile"      
	fr5[69] = "Quixotic"     
	fr5[70] = "Ridiculous"   
	fr5[71] = "Screwball"    
	fr5[72] = "Screwy"       
	fr5[73] = "Senseless"    
	fr5[74] = "Short-sighted"
	fr5[75] = "Silly"        
	fr5[76] = "Strange"      
	fr5[77] = "Touched"      
	fr5[78] = "Unbalanced"   
	fr5[79] = "Unglued"      
	fr5[80] = "Unhinged"     
	fr5[81] = "Unworkable"   
	fr5[82] = "Unzipped"     
	fr5[83] = "Wacky"        
	fr5[84] = "Weird"        
	fr5[85] = "Whacko"       
	fr5[86] = "Wild"            

	//
	//Choose a colour - Array
	//
	var fr6Max = 30;
	var fr6 = new Array(fr6Max);

	fr6[1] = "Red"
	fr6[2] = "Blue"
	fr6[3] = "Green"
	fr6[4] = "Orange"
	fr6[5] = "Yellow"
	fr6[6] = "Black"
	fr6[7] = "Silver"
	fr6[8] = "Brown"
	fr6[9] = "Magenta"
	fr6[10] = "Purple"
	fr6[11] = "White"
	fr6[12] = "Coral"
	fr6[13] = "Chocolate"
	fr6[14] = "Crimson"
	fr6[15] = "Maroon"
	fr6[16] = "Olive"
	fr6[17] = "Pink"
	fr6[18] = "Salmon"
	fr6[19] = "Tan"
	fr6[20] = "Teal"
	fr6[21] = "Tomato"
	fr6[22] = "Wheat"
	fr6[23] = "Violet"
	fr6[24] = "Azure"
	fr6[25] = "Amazing Azure"
	fr6[26] = "Cute Coral"
	fr6[27] = "Multi-Maroon"
	fr6[28] = "Evil Crimson"
	fr6[29] = "Yowling Yellow"
	fr6[30] = "Princely Purple"

	//
	//Choose any adjective - Array
	//
	var fr7Max = 10;
	var fr7 = new Array(fr7Max);

	fr7[1] = "Introverted"
	fr7[2] = "Extroverted"
	fr7[3] = "Funny"
	fr7[4] = "Melancholy"
	fr7[5] = "Vengeful"
	fr7[6] = "Sexy"
	fr7[7] = "Responsible"
	fr7[8] = "Ruddy Responsible"
	fr7[9] = "Freakin' Sexy"
	fr7[10] = "Wicked Funny"

	//
	//Use your sponsor's name - Array
	//
	var fr8Max = 10;
	var fr8 = new Array(fr8Max);

	fr8[1] = "Data Center"
	fr8[2] = "Chiropractic"
	fr8[3] = "Help Desk"
	fr8[4] = "Doctor"
	fr8[5] = "Doctor"
	fr8[6] = "Dentist"
	fr8[7] = "Construction"
	fr8[8] = "Electrical"
	fr8[9] = "Janitorial"
	fr8[10] = "Nurse"

	//
	//Choose a type of metal - Array
	//
	var fr9Max = 9;
	var fr9 = new Array(fr9Max);

	fr9[1] = "Bronze"
	fr9[2] = "Steel"
	fr9[3] = "Silver"
	fr9[4] = "Nickel"
	fr9[5] = "Gold"
	fr9[6] = "Aluminum"
	fr9[7] = "Glittering Gold"
	fr9[8] = "Flexible Aluminum"
	fr9[9] = "UnBendable Steel"

	//
	//Choose a city - Array
	//
	var fr10Max = 20
	var fr10 = new Array(fr10Max);

	fr10[1] = "Chicago"
	fr10[2] = "New York"
	fr10[3] = "Atlanta"
	fr10[4] = "Los Angeles"
	fr10[5] = "Dallas"
	fr10[6] = "Boston"
	fr10[7] = "San Francisco"
	fr10[8] = "Washington"
	fr10[9] = "Orlando"
	fr10[10] = "Denver"
	fr10[11] = "London"
	fr10[12] = "Paris"
	fr10[13] = "Toronto"
	fr10[14] = "Montreal"
	fr10[15] = "Barcelona"
	fr10[16] = "Brussels"
	fr10[17] = "Amsterdam"
	fr10[18] = "Moscow"
	fr10[19] = "Mexico City"
	fr10[20] = "Tokyo"


//
// Second Roll (sr) Arrays
//
	//
	//Choose an animal - Array
	//
	var sr1Max = 30;
	var sr1 = new Array(sr1Max);

	sr1[1] = "Beavers"
	sr1[2] = "Bears"
	sr1[3] = "Birds"
	sr1[4] = "Moose"
	sr1[5] = "Sheep"
	sr1[6] = "Fish"
	sr1[7] = "Racoons"
	sr1[8] = "Squirrels"
	sr1[9] = "Dogs"
	sr1[10] = "Cats"
	sr1[11] = "Weasels"
	sr1[12] = "Falcons"
	sr1[13] = "Eagles"
	sr1[14] = "Bucks"
	sr1[15] = "Lions"
	sr1[16] = "Tigers"
	sr1[17] = "Rats"
	sr1[18] = "Zebras"
	sr1[19] = "Sealions"
	sr1[20] = "Koalas"
	sr1[21] = "Rude Racoons"
	sr1[22] = "Flyin' Squirrels"
	sr1[23] = "Dung-Eating Dogs"
	sr1[24] = "Eatable Eagles"
	sr1[25] = "Bucking Bucks"
	sr1[26] = "Lovly Lions"
	sr1[27] = "Tuff Tigers"
	sr1[28] = "Blind Beavers"
	sr1[29] = "Bustling Bears"
	sr1[30] = "Worm Eating Birds"

	//
	//Choose a mythological character - Array
	//
	var sr2Max = 24;
	var sr2 = new Array(sr2Max);

	sr2[1] = "Centaurs"
	sr2[2] = "Orcs"
	sr2[3] = "Elves"
	sr2[4] = "Dwarves"
	sr2[5] = "Hobbits"
	sr2[6] = "Dragons"
	sr2[7] = "Carrions"
	sr2[8] = "Ogres"
	sr2[9] = "Giants"
	sr2[10] = "Hill Giants"
	sr2[11] = "Moutain Giants"
	sr2[12] = "Cyclops"
	sr2[13] = "Unicorns"
	sr2[14] = "Leeches"
	sr2[15] = "Grubs"
	sr2[16] = "Hobgoblins"
	sr2[17] = "Ugly Ogres"
	sr2[18] = "Titans"
	sr2[19] = "Horrible Hobgoblins"
	sr2[20] = "Terrible Titans"
	sr2[21] = "Drunkin' Dwarves"
	sr2[22] = "Hot Hobbits"
	sr2[23] = "Flyin' Dragons"
	sr2[24] = "Crawling Carrions"

	//
	//Choose an insect - Array
	//
	var sr3Max = 23;
	var sr3 = new Array(sr3Max);

	sr3[1] = "Wasps"
	sr3[2] = "Ants"
	sr3[3] = "Earwigs"
	sr3[4] = "Mosquitos"
	sr3[5] = "Spiders"
	sr3[6] = "EarthWorms"
	sr3[7] = "Flying Wasps"
	sr3[8] = "Crawling Ants"
	sr3[9] = "Wax Munching Earwigs"
	sr3[10] = "Biting Mosquitos"
	sr3[11] = "Spinning Spiders"
	sr3[12] = "Earth Diggin' EarthWorms"
	sr3[13] = "Monarch Butterflys"
	sr3[14] = "Skimmer Dragonflys"
	sr3[15] = "Two-Tailed Swallowtails"
	sr3[16] = "Honey Bees"
	sr3[17] = "Ladybugs"
	sr3[18] = "Praying Mantis"
	sr3[19] = "Tarantula Hawk Wasps"
	sr3[20] = "Fireflys"
	sr3[21] = "Tiger Swallowtail Butterflys"
	sr3[22] = "Monarch Butterflys"
	sr3[23] = "Flittering Ladybugs"

	//
	//A synonym for "warrior" - Array
	//
	var sr4Max = 56;
	var sr4 = new Array(sr4Max);

	sr4[1] = "Fighters"
	sr4[2] = "Amazons"
	sr4[3] = "Killers"
	sr4[4] = "Bezerkers"
	sr4[5] = "Knights"
	sr4[6] = "Cavaliers"
	sr4[7] = "Battler"    
	sr4[8] = "Champions"   
	sr4[9] = "Combatants"  
	sr4[10] = "Conscripts"  
	sr4[11] = "Dogfaces"    
	sr4[12] = "Doughboys"   
	sr4[13] = "Fighters"    
	sr4[14] = "Troopers"   
	sr4[15] = "Men"        
	sr4[16] = "G.Is"         
	sr4[17] = "G.I. Joes"     
	sr4[18] = "Heros"       
	sr4[19] = "Man-at-Arms"
	sr4[20] = "Servicemen" 
	sr4[21] = "Soldiers"    
	sr4[22] = "Troopers"    
	sr4[23] = "Advocates"   
	sr4[24] = "Allys"       
	sr4[25] = "Backers"     
	sr4[26] = "Challengers" 
	sr4[27] = "Champs"      
	sr4[28] = "Conquerors"  
	sr4[29] = "Defenders"   
	sr4[30] = "Endorsers"   
	sr4[31] = "Exponents"   
	sr4[32] = "Expounders"  
	sr4[33] = "Guardians"   
	sr4[34] = "Heros"       
	sr4[35] = "Heroines"    
	sr4[36] = "Masters"     
	sr4[37] = "Medalists"   
	sr4[38] = "Paladins"    
	sr4[39] = "Partisans"   
	sr4[40] = "Patrons"     
	sr4[41] = "Proponents"  
	sr4[42] = "Protectors"  
	sr4[43] = "Supporters"  
	sr4[44] = "Sympathizers"
	sr4[45] = "Titleholders"
	sr4[46] = "Top Dogs"   
	sr4[47] = "Upholders"   
	sr4[48] = "Vanquishers" 
	sr4[49] = "Victors"     
	sr4[50] = "Vindicators" 
	sr4[51] = "Warriors"    
	sr4[52] = "Holy Knights"     
	sr4[53] = "Wicked Winners"
	sr4[54] = "Furious Fighters"
	sr4[55] = "Ducking Defenders"
	sr4[56] = "Mutated Medalists"

	//
	//Choose a type of weather - Array
	//
	var sr5Max = 14;
	var sr5 = new Array(sr5Max);

	sr5[1] = "Clouds"
	sr5[2] = "Hurricanes"
	sr5[3] = "Rain"
	sr5[4] = "Snow"
	sr5[5] = "Storms"
	sr5[6] = "Tornadoes"
	sr5[7] = "Blizzards"
	sr5[8] = "Freakin' Tornadoes"
	sr5[9] = "Snow Hurricanes"
	sr5[10] = "Pelting Rain"
	sr5[11] = "Rain Clouds"
	sr5[12] = "Violent Storms"
	sr5[13] = "Freezing Rain"
	sr5[14] = "Thunderstorms"

	//
	//Your first name, plural - Array
	//
	var sr6Max = 26;
	var sr6 = new Array(sr6Max);

	sr6[1] = "Raiders"
	sr6[2] = "Jets"
	sr6[3] = "Patriots"
	sr6[4] = "Eagles"
	sr6[5] = "Joes"
	sr6[6] = "49ers"
	sr6[7] = "Chargers"
	sr6[8] = "Vikings"
	sr6[9] = "Bears"
	sr6[10] = "Cowboys"
	sr6[11] = "Colts"
	sr6[12] = "Saints"
	sr6[13] = "Redskins"
	sr6[14] = "Broncos"
	sr6[15] = "Chiefs"
	sr6[16] = "Buccaneers"
	sr6[17] = "Seahawks"
	sr6[18] = "Falcons"
	sr6[19] = "Ravens"
	sr6[20] = "Jaguars"
	sr6[21] = "Lions"
	sr6[22] = "Titans"
	sr6[23] = "Bengals"
	sr6[24] = "Panthers"
	sr6[25] = "Cardinals"
	sr6[26] = "Rams"


	//
	//Choose a title or honorific (knights, etc.) - Array
	//
	var sr7Max = 25;
	var sr7 = new Array(sr7Max);

	sr7[1] = "Dukes"
	sr7[2] = "Marquis"
	sr7[3] = "Earls"
	sr7[4] = "Viscounts"
	sr7[5] = "Barons"
	sr7[6] = "Knights"
	sr7[7] = "Kings"
	sr7[8] = "Lords"
	sr7[9] = "Fightin' Lords"
	sr7[10] = "Holy Kings"
	sr7[11] = "Quick Dukes"
	sr7[12] = "Gurg"
	sr7[13] = "Head Monkeys"
	sr7[14] = "Headmasters"
	sr7[15] = "High Inquisitors"
	sr7[16] = "Keeper of the Keys and Grounds"
	sr7[17] = "Robots"
	sr7[18] = "Ministers"
	sr7[19] = "Potions Masters"
	sr7[20] = "Prefects"
	sr7[21] = "Professors" 
	sr7[22] = "Sorcerers"
	sr7[23] = "Supreme Mugwumps"
	sr7[24] = "Warlocks"
	sr7[25] = "Wizards"

	//
	//Choose a profession - Array
	//
	var sr8Max = 39;
	var sr8 = new Array(sr8Max);

	sr8[1] = "Fighters"
	sr8[2] = "Amazons"
	sr8[3] = "Killers"
	sr8[4] = "Bezerkers"
	sr8[5] = "Knights"
	sr8[6] = "Cavaliers"
	sr8[7] = "Dynasty Cavaliers"
	sr8[8] = "Nasty Knights"
	sr8[9] = "Holy Killers"
	sr8[10] = "Acrobats"
	sr8[11] = "Architects"
	sr8[12] = "Astronauts"
	sr8[13] = "Barbers"
	sr8[14] = "Butchers"
	sr8[15] = "Cooks"
	sr8[16] = "Consultants"
	sr8[17] = "Craftmen"
	sr8[18] = "Quick Barbers"
	sr8[19] = "Holy Craftmen"
	sr8[20] = "Farmers"
	sr8[21] = "Gardeners"
	sr8[22] = "Interpreters"
	sr8[23] = "Judges"
	sr8[24] = "Managers"
	sr8[25] = "Laywers"
	sr8[26] = "Midwives"
	sr8[27] = "Musicians"
	sr8[28] = "Operators"
	sr8[29] = "Pilots"
	sr8[30] = "Police"
	sr8[31] = "Sailors"
	sr8[32] = "Rock Singers"
	sr8[33] = "Pop Stars"
	sr8[34] = "Hip Hoppers"
	sr8[35] = "Soldiers"
	sr8[36] = "Surgeons"
	sr8[37] = "Technicians"
	sr8[38] = "Tutors"
	sr8[39] = "Wardens"

	//
	//Choose a weapon - Array
	//
	var sr9Max = 15;
	var sr9 = new Array(sr9Max);

	sr9[1] = "Swords"
	sr9[2] = "Guns"
	sr9[3] = "Knives"
	sr9[4] = "Bazookas"
	sr9[5] = "Clubs"
	sr9[6] = "Hammers"
	sr9[7] = "Explosives"
	sr9[8] = "Bombers"
	sr9[9] = "Fighters"
	sr9[10] = "Submarines"
	sr9[11] = "Helicopters"
	sr9[12] = "Grenades"
	sr9[13] = "Freakin' Fighters"
	sr9[14] = "Dive Bombers"
	sr9[15] = "Exploding Bazookas"

	//
	//A synonym for speed - Array
	//
	var sr10Max = 20
	var sr10 = new Array(sr10Max);

	sr10[1] = "Speedsters"
	sr10[2] = "Quicklings"
	sr10[3] = "Lightning"
	sr10[4] = "Acceleration"
	sr10[5] = "Breezes"
	sr10[6] = "Expedition"
	sr10[7] = "Hustlers"
	sr10[8] = "Pacers"
	sr10[9] = "Rushers"
	sr10[10] = "Steam Engines"
	sr10[11] = "Velocity"
	sr10[12] = "Urgency"
	sr10[13] = "Rush"
	sr10[14] = "Steam"
	sr10[15] = "Rapidity"
	sr10[16] = "Hurtin' Hustlers"
	sr10[17] = "Hard Lightning"
	sr10[18] = "Speedy Speedsters"
	sr10[19] = "Proud Pacers"
	sr10[20] = "Gold Rush"