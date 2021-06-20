const refs = {
        openMenuBtn: document.querySelector("[data-open-menu]"),
        closeMenuBtn: document.querySelector("[data-close-modal]"),
        backdrop: document.querySelector("[data-backdrop]"),
        menuItems: document.querySelectorAll('.menu__link'),
        contactButton: document.querySelector('.contacts-btn'),
      };

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);
refs.contactButton.addEventListener('click', addClass);

for (item of refs.menuItems) {
  item.addEventListener("click", addClass);
} //map?

function toggleMenu() {
  refs.backdrop.classList.toggle("is-hidden");
}

function addClass() {
  console.log('here');
  refs.backdrop.classList.add("is-hidden");
}