// import { dogs } from 'data'

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
    return `
      <img class="avatar" src="/assets/${avatar}">
      <p class="dog-info">${name}, ${age}</p>
      <p class="dog-bio">${bio}</p>
    `
  }
}

export default Dog
