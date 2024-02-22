
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      let modal = modals[i];
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }





