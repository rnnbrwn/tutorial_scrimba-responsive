let emailCollectionForm = document.getElementById('email-collector');
emailCollectionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // do something

  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get('first-name');
  let userEmailAddress = ourFormData.get('email-address');
  console.log(ourFormData.get('first-name'));

  let updatedHtmlContent = `
                <h2>Congratulations, ${userFirstName}</h2>
                <p>You're on your way to becoming a BBQ master!</p>
                 <p class="small-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
            `;

  let ourMainContent = document.getElementById('main-content');
  ourMainContent.innerHTML = updatedHtmlContent;
});
