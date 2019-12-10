// $(".btn").on("click", function() {

//   const $button = $(this);
//   var oldValue = $button.parent().find("input").val();

//   if ($button.text() == "+") {
// 	  var newVal = parseFloat(oldValue) + 1;
// 	} else {
   
//     if (oldValue > 0) {
//       var newVal = parseFloat(oldValue) - 1;
//     } else {
//       newVal = 0;
//     }
//   }

//   $button.parent().find("input").val(newVal);

// });


function num(id){
  return document.getElementById(id)
};


const cities = [
  {name: 'Moscow', population: 12506468},
  {name: 'Saint Petersburg', population: 5351935},
  {name: 'Novosibirsk', population: 1612833},
  {name: 'Kaliningrad', population: 482443},
  {name: 'Kaluga', population: 336726}
];

const millionPlusCities = cities.filter(function (e){
  return e.population > 1000000;
});

console.log(millionPlusCities)
