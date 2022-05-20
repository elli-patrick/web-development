// Theme toggle button
function toggleMode(){
    var element = document.body;
    element.classList.toggle('darkmode')
}

// Modal
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
})


// function swapStyleSheet(sheet){
//     document.getElementById('theme').setAttribute('href', sheet);
//     localStorage.setItem("sheet", sheet);
//   }
  
//   window.onload = _ =>
//    swapStyleSheet(
//     localStorage.getItem("sheet") || "default.css"
//    );