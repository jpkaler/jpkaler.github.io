// ice_breakers.js
// Generates a random question for you to ask when the infamous awkward silence fills the room

const sentenceParts = {
    _questions: ['What', 'Where', 'How', 'Why'],
    _things: ['the world', 'a cat', 'Germany', 'USA', 'a dog', 'a house', 'a chair', 'the outer space', 'the sun', 'the moon', 'a life', 'the weather', 'your mum', 'a flower', 'a tree', 'the Santa Claus'],
    _verbs: ['exist','die','see','feel','grow','learn','move','work'],

    get questions() {
        return this._questions;
    },

    get things() {
        return this._things;
    },

    get verbs() {
        return this._verbs;
    }
}

// Get random number
const randomize = (num) => {
    return Math.floor(Math.random() * num);
}

// Function to create question type e.g. 'what is' or 'why does'
const addQuestion = () => {
    let question = sentenceParts.questions[randomize(4)];
    if (question === 'What' || question === 'Where') {
        return question + ' is ';
    } else {
        return question + ' does ';
    }
}

// Adds the topic of conversation to the question
const addThing = () => {
    return addQuestion() + sentenceParts.things[randomize(sentenceParts.things.length)];
}

// Adds the verb if the question requires it and compiles the full sentence (has a 'does' in it)
const compileSentence = () => {
    const sentence = addThing();
    if (sentence.includes('does')) {
        return sentence + ' ' + sentenceParts.verbs[randomize(sentenceParts.verbs.length)] + '?';
    }
    return sentence + '?';
}

// console.log(compileSentence());

// Website functionality

const ib_button = document.getElementById("generate-ice-breaker");
const ib_text = document.getElementById("generated-ice-breaker-text");

ib_button.onclick = () => {
    text = compileSentence();
    ib_text.innerHTML = text;
};
