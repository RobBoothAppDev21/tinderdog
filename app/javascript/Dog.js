// import { dogs } from 'data'

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
    let dogPostHtml = ''

    if (hasBeenSwiped) {
      if (hasBeenLiked) {
        dogPostHtml = `<img class="badge like-dog" src="/assets/badge-like.png">`
      } else {
        dogPostHtml = `<img class="badge reject-dog" src="/assets/badge-nope.png">`
      }
    }
    return dogPostHtml += `
    <img class="avatar" src="/assets/${avatar}">
      <p class="dog-info">${name}, ${age}</p>
      <p class="dog-bio">${bio}</p>
    `
  }

  updateHasBeenSwiped() {
    this.hasBeenSwiped = true
  }

  toggleLikeStatus() {
    this.hasBeenLiked = !this.hasBeenLiked
  }
}

export default Dog
