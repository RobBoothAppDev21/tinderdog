import dogs  from 'data'
import Dog from 'Dog'

let isWaiting = false

const getDogNamesArray = function() {
  return dogs.map(dog => dog.name)
}

function getNewDog() {
  const nextDog = dogs.shift()
  return nextDog ? new Dog(nextDog) : {}
}

function likeDog() {
  newDog.hasBeenLiked = true
  render()
  setTimeout(() => {
    newDog = getNewDog()
    render()
  }, 2000)
}

function rejectDog() {
  newDog.hasBeenLiked = false
  render()
  setTimeout(() => {
    newDog = getNewDog()
    render()
  }, 2000)
}

document.getElementById("like-dog").addEventListener('click', likeDog)
document.getElementById("reject-dog").addEventListener('click', rejectDog)

function render() {
  document.getElementById('dog-post').innerHTML = newDog.getDogHtml()
  newDog.updateHasBeenSwiped()
}

let newDog = getNewDog()
render()