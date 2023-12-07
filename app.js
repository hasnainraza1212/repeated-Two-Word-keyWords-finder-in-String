const string = "responsive web website development wordpress website web designers business website wordpress template wordpress blogs website design wordpress design wordpress website build website blog design portfolio website wordpress website business website wordpress blogs wordpress developer blog design";

const regex = /(\S+\s+\S+)\s*/g;

const array = string.match(regex);

const counts = {};

array.forEach(element => {
  counts[element] = (counts[element] || 0) + 1;
});

const repeatedElements = Object.keys(counts).filter(element => counts[element] > 1);

console.log(repeatedElements.join(""));
