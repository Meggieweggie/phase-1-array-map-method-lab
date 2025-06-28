const tutorials = [
  `What Does The This Keyword Mean?`,
 'What Is The Constructor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?',
];

function titleCased() {
  return tutorials.map(title => {
    return title
      .split(' ')
      .map(word => {
        // Keep exact casing for known words
        if (word === 'stopPropagation') return 'StopPropagation';
        if (word === 'preventDefault') return 'PreventDefault';
        if (word === 'NaN') return 'NaN';
        if (word === 'JSONP' || word.toLowerCase() === 'jsonp') return 'JSONP';
        if (word.toUpperCase() === 'API') return 'API';

        // Capitalize first letter of all other words
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  });
}
