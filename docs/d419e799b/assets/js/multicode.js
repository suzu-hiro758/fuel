window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code.multi').forEach(item => {
    const radios = item.querySelectorAll('[type="radio"]')
    radios.forEach(radio => {
      radio.addEventListener('click', evt => {
        const active = evt.target.value;
        item.querySelectorAll('code').forEach(code => {
          code.style.display = active === code.id ? 'block' : 'none';
        })
        radios.forEach(radio => {
          if (radio.checked) {
            radio.parentNode.classList.add('active');
          } else {
            radio.parentNode.classList.remove('active');
          }
        })
      })
    })
    radios.item(0).click();
  })
});
