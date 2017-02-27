// GO!
var forEach = function(arr, func){
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i, arr)
  }
}
// TASK 1 -- Show/Hide Nav
var showHideBtnEl = document.querySelector('#hide-nav')
var  navMenu = document.querySelector('.nav-menu');

showHideBtnEl.addEventListener('click', function(evt){

      // console.log(navMenu.className)
      if (navMenu.className === 'nav-menu-hidden') {
          navMenu.className = 'nav-menu'
      }
      else {
           navMenu.className = 'nav-menu-hidden';
      }
      console.log([navMenu])

})


// TASK 2 -- Select an Icon
var allOptions = document.querySelectorAll('.option')

forEach(allOptions, function(optionEl ,index, theArray){
  console.log(optionEl)
  optionEl.addEventListener('click', function(evt){
    var selectedEl = evt.currentTarget
      console.log(selectedEl.className)

      if(selectedEl.className === 'option selected') {
        selectedEl.className = 'option'

      } else {
        selectedEl.className = 'option selected'
      }





  })

})
// })
// TASK 3 -- Move Item From List to List



// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
