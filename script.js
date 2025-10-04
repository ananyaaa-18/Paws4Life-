const personalizedActions = {
  student: [
    "Start an animal welfare club at your school",
    "Organize a fundraising event for local shelters",
    "Create awareness posters about pet adoption",
    "Volunteer at shelters during weekends"
  ],
  working: [
    "Set up a monthly donation to animal shelters",
    "Organize a company volunteer day at rescue centers",
    "Advocate for pet-friendly workplace policies",
    "Sponsor a kennel at your local animal shelter"
  ],
  retired: [
    "Foster senior dogs who need extra care",
    "Share your pet care experience with new owners",
    "Volunteer regularly at animal shelters",
    "Help transport animals to vet appointments"
  ],
  parent: [
    "Teach your children about responsible pet ownership",
    "Adopt a family pet from a shelter",
    "Include animal welfare in family volunteer activities",
    "Support school programs about animal care"
  ]
};

const animalFacts = [
  "Approximately 3.1 million dogs enter U.S. animal shelters every year.",
  "Spaying or neutering your pet can help reduce overpopulation by preventing millions of unwanted births.",
  "Senior dogs (7+ years) are often overlooked in shelters despite being excellent companions.",
  "It costs approximately $1,000-$2,000 per year to properly care for a dog including food, vet bills, and supplies.",
  "Microchipping increases the chances of reuniting lost pets with their families by 95%.",
  "Dogs in shelters come from various backgrounds - not just strays, but owner surrenders due to housing, financial, or life changes.",
  "The average stay for a dog in a shelter is 23 days before adoption.",
  "Black dogs often stay in shelters longer due to an unfair bias called 'Black Dog Syndrome'."
];

document.addEventListener('DOMContentLoaded', function() {
    const takeActionSection = document.querySelector('.take-action .container');
    if (takeActionSection) {
        createPersonalizedSection();
        createFactGenerator();
    }
});

function createPersonalizedSection() {
    const takeActionSection = document.querySelector('.take-action .container');
    
    const personalizedDiv = document.createElement('div');
    personalizedDiv.className = 'personalized-actions';
    personalizedDiv.innerHTML = `
        <h3>Get Personalized Action Ideas</h3>
        <p>Tell us about yourself to get customized ways to help!</p>
        <select id="userType">
            <option value="">Select your situation...</option>
            <option value="student">Student</option>
            <option value="working">Working Professional</option>
            <option value="retired">Retired</option>
            <option value="parent">Parent</option>
        </select>
        <button id="generateAction">Get My Action Plan</button>
        <div id="personalizedResult"></div>
    `;
    
    takeActionSection.appendChild(personalizedDiv);
    
    document.getElementById('generateAction').addEventListener('click', generatePersonalizedAction);
}

function createFactGenerator() {
    const takeActionSection = document.querySelector('.take-action .container');
    
    const factDiv = document.createElement('div');
    factDiv.className = 'fact-generator';
    factDiv.innerHTML = `
        <h3>Learn Something New</h3>
        <p>Discover important facts about animal welfare</p>
        <button id="generateFact">Get Random Fact</button>
        <div id="factResult"></div>
    `;
    
    takeActionSection.appendChild(factDiv);
    
    document.getElementById('generateFact').addEventListener('click', generateRandomFact);
}

function generatePersonalizedAction() {
    const userType = document.getElementById('userType').value;
    const resultDiv = document.getElementById('personalizedResult');
    
    if (!userType) {
        resultDiv.innerHTML = '<p style="color: #ff6b6b;">Please select your situation first!</p>';
        return;
    }
    
    const actions = personalizedActions[userType];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    resultDiv.innerHTML = `
        <div class="personalized-result">
            <h4>Perfect for you:</h4>
            <p><strong>${randomAction}</strong></p>
            <p><em>Every small action makes a difference in an animal's life!</em></p>
        </div>
    `;
}

function generateRandomFact() {
    const factDiv = document.getElementById('factResult');
    const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    
    factDiv.innerHTML = `
        <div class="fact-result">
            <h4>Did You Know?</h4>
            <p><strong>${randomFact}</strong></p>
        </div>
    `;
}
