import dogs  from 'data'
import Dog from 'Dog'

const getDogNamesArray = function() {
  return dogs.map(dog => dog.name)
}

function getNewDog() {
  const nextDog = dogs.shift()
  return nextDog ? new Dog(nextDog) : {}
}

// const dogNamesArray = getDogNamesArray()
const newDog = getNewDog()

document.getElementById('dog-post').innerHTML = newDog.getDogHtml()