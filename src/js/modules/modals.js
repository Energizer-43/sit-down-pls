export const modals = () => {
  const modalButtons = document.querySelectorAll('[data-modal-button]');
  const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
  const allModals = document.querySelectorAll('[data-modal]');

  modalButtons.forEach(item => {
    item.addEventListener('click', function() {
      const modalId = this.dataset.modalButton;
      const modal = document.querySelector('#' + modalId);

      modal.classList.remove('--invisible');

      modal.querySelector('.modal__window').addEventListener('click', function(e) {
        e.stopPropagation();
      })
    });
  });

  modalButtonsClose.forEach(item => {
    item.addEventListener('click', function() {
      const modal = this.closest('[data-modal]');

      modal.classList.add('--invisible');
    })
  })

  allModals.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.add('--invisible');
    })
  })
}
