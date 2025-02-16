const scriptURL = 'https://script.google.com/macros/s/AKfycbyTqEucVQkqwSFGMfE-6-1pdsIyCuK94NCo4P0UwM311ZqI-9dSSadLmmUiJtyxmwo/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})