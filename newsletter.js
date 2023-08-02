/* 

1. Subscribe button:
  - take text from input
  - if email is valid swap to second page
  - if email is invalid show info in top right corner
  - if input is empty show info in top right corner
2. Second page:
  - show text from input in email span
3. Dismiss button:
  - Go back to previous page

*/

const subscribeButton = document.querySelector('.js-subscribe-button');
const inputElement = document.querySelector('.js-input');
const invalidMessage = document.querySelector('.invalid-email');

subscribeButton.addEventListener('click', () => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  
  if (inputElement.value.match(regx)) {
    pageSwapNext();
    return;
  } else {
    invalidMessage.innerHTML = 'Valid email required'
  } 
})

function pageSwapNext() {

  const success = `
  <main class="main-2">
  <div class="left-side">
    <div class="post-page">
      <img class="success-icon" src="assets/images/icon-success.svg" alt="success">
      <h1>Thanks for subscribing!</h1>
      <p class="post-info">A confirmation email has been sent to  <strong>${inputElement.value}</strong>.
        Please open it and click the button inside to confirm your subscription.</p>
        <button onclick="window.location.reload()" class="dismiss js-dismiss-button">Dismiss message</button>
    </div>
  </div>
</main>`
    
  document.body.innerHTML = success;
}