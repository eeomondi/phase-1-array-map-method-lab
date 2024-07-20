/*const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map();
}

console.log(typeof tutorials)*/

function titleCased(tutorials) {
  if (!Array.isArray(tutorials)) {
    throw new Error('Expected an array of tutorials');
  }

  return tutorials.map((tutorial) => {
    if (typeof tutorial!== 'tring') {
      throw new Error('Expected a string tutorial name');
    }

    const words = tutorial.split(' ');
    const titleCasedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return titleCasedWords.join(' ');
  });
}