// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  const hearts = document.querySelectorAll('.like-glyph')

  function clickHeart (e) {
    const heart = e.target
    mimicServerCall('bogusURL')
    .then( () => {
      if (heart.innerText === EMPTY_HEART ) {
          heart.innertText = FULL_HEART
          heart.className = 'activated-heart'
          
      }
      else {
        heart.innerText = EMPTY_HEART
        heart.className = ''

    }})


      .catch((error) => {
        const modal = document.getElementById('modal')
        console.log(modal)
            modal.className = ""
            modal.innerText = error
            setTimeout(() => modal.className = "hidden", 3000)
              
          })

  }

  for (const element of hearts) {
    element.addEventListener('click', clickHeart)
  }
  console.log(hearts)
//   hearts.forEach(hearts => hearts.addEventListener('click', clickLike))

//   function clickLike(hearts) {
//     console.log(hearts.target)
//     mimicServerCall()
//     .then( () => {
//       if (hearts.target.innerText === EMPTY_HEARTS) {
//         hearts.target.classList.add('activated-heart')
//         hearts.target.innertText = FULL_HEART
//       }
//       else {
//         hearts.target.classList.remove('activated-heart')
//           hearts.target.innerText = EMPTY_HEART
//       }

//     })
//   .catch(() => {
//     const modal = document.querySelectorByID('modal')
//     console.log(modal)
//     modal.className = "show"

//     setTimeout(() => {
//       modal.className = "hidden"}, 3000)
      
//   })

// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
