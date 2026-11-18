// 1. Messy input, like real users type in a form
const rawName = "   emmanuel   ";
const rawSkill = "  ai engineer ";
const rawCity = " UYO ";

// 2. Clean the input
const name = rawName.trim();
const skill = rawSkill.trim().toLowerCase();
const city = rawCity.trim().toLowerCase();

// 3. Capitalise the first letter of the name and city
const realName = name[0].toUpperCase() + name.slice(1);

// Old way (counting positions):
// const realSkill = skill[0].toUpperCase() + skill[1].toUpperCase() + skill.slice(2, 3) + skill[3].toUpperCase() + skill.slice(4);

// Better way:
const realSkill = skill.replace("ai", "AI").replace("engineer", "Engineer");

const realCity = city[0].toUpperCase() + city.slice(1);

// 4. Build the profile sentence
const profileSentence = `My name is ${realName}, I am an ${realSkill} from ${realCity}.`;
console.log(profileSentence);

// 5. Fake search bar
const searchWord = "engineer";
const isMatch = profileSentence.toLowerCase().includes(searchWord);
console.log(`Does the search ${searchWord} match the profile sentence? ${isMatch}`);

// 6. Short preview
const preview = profileSentence.slice(0, 25) + "...";
console.log(preview);

const careerName = skill.slice(3);
console.log(`${realName} is an ${careerName} from ${realCity}.`);

