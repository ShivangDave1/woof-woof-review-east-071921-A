// const dogBar = document.querySelector('#dog-bar')
// console.log('Outside the DOMContentLoaded')
// console.log(dogBar)
//
// debugger;

document.addEventListener('DOMContentLoaded', () => {
  getPups()
})

const getPups = () => {
  fetch('http://localhost:3000/pups')
  .then((res) => res.json())
  .then((pups) => {
    pups.forEach((pup) => renderPup(pup));
  })
}

const renderPup = (pup) => {
  // create the span
  const dogSpan = document.createElement('span')
  // add the pup's name to it
  dogSpan.textContent = pup.name

  // Listen for the click
  dogSpan.addEventListener('click',(e) => {
    showPupInfo(pup)
  })

  // find the dog bar
  const dogBar = document.querySelector('#dog-bar')
  // append
  dogBar.append(dogSpan)
}

const showPupInfo = (pup) => {
  // create the image
  const pupImage = document.createElement('img')
    // assign the src
  pupImage.src = pup.image

  // create the header
  const pupName = document.createElement('h2')
    // assign the name
  pupName.innerText = pup.name

  // create the button
  const isGoodDogBtn = document.createElement('button')
    // set the text
    if(pup.isGoodDog){
      isGoodDogBtn.innerText = 'Good Dog!'
    }else{
      isGoodDogBtn.innerText = 'Naughty Dog!'
    }

  isGoodDogBtn.addEventListener('click',(e) => {
    // console.log(e.target)
    if(e.target.textContent === 'Good Dog!'){
      e.target.innerText = 'Naughty Dog!'
    }else {
      e.target.innerText = 'Good Dog!'
    }
  })

    // find the dog info div
    const dogInfo = document.querySelector('#dog-info')
    dogInfo.innerHTML = ''

    // append
    dogInfo.append(pupImage,pupName,isGoodDogBtn)
}
