const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stoppropagation and preventdefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is jsonp?"
];

function titleCased() {
  return tutorials.map((tutorial) => {
    return tutorial.split(' ').map(word => {
      // Convert word and target words to lowercase for case insensitive comparison
      const lowerCaseWord = word.toLowerCase();
      if (lowerCaseWord === 'oo' || lowerCaseWord === 'nan' || lowerCaseWord === 'jsonp') {
        return word.toUpperCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  });
}

module.exports = titleCased;

