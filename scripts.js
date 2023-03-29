/********** Navigation Bar **********/
let uniqueCategory = [...new Set(myArray.map(item => item.category))];

const navBar = uniqueCategory.map(item => 
  `<div onclick="showPicked('${item}')">${item}</div>`);
document.getElementById('nav').innerHTML = navBar.join('');

/********** All Items **********/
const result = myArray.map(item => 
  `<div>${item.name}</div>`);
document.getElementById('showAll').innerHTML = result.join('');

/********** Item Picked **********/
const showPicked = (category) => {
  const filteredItems = myArray.filter(item => item.category === category);
  const result = filteredItems.map(item => 
    `<div><a href="${item.url}" target="_blank">${item.name}</a></div>`);
  document.getElementById('showPicked').innerHTML = result.join('');
  document.getElementById('picked').innerText = `${category}`;
}