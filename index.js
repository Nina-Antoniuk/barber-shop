const refs = {
        openMenuBtn: document.querySelector("[data-open-menu]"),
        closeModalBtn: document.querySelector("[data-close-modal]"),
        backdrop: document.querySelector("[data-backdrop]"),
      };

      refs.openMenuBtn.addEventListener("click", toggleMenu);
      // refs.closeModalBtn.addEventListener("click", toggleModal);

      refs.backdrop.addEventListener("click", logBackdropClick);

      function toggleMenu() {
        refs.backdrop.classList.toggle("is-hidden");
      }

      function logBackdropClick() {
        console.log("Это клик в бекдроп");
      }