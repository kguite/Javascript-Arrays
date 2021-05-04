// UEFA EURO 2016

// Instructions: Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."




function uefaEuro2016([t1,t2], [s1,s2]){
	  if (s1==s2) return `At match ${t1} - ${t2}, teams played draw.`
	  if (s2>s1) return `At match ${t1} - ${t2}, ${t2} won!`
	  if (s2<s1) return `At match ${t1} - ${t2}, ${t1} won!`
	}
	
	

// A second example:

function uefaEuro2016(commands, scores){
	  // your code...
	  if (scores[0] == scores[1])
		return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
	  if (scores[0] < scores[1])
		return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
	  return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
	}
	
	