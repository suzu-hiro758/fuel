const dialog = document.getElementById('dialog');
const openBtn = document.getElementById('open-button');
const closeBtn = document.getElementById('close-button');
const clearBtn = document.getElementById('clear-button');
const submitBtn = document.getElementById('submit-button');
const modalText = document.getElementById('modal-text');
const output = document.getElementById('output');
const closeIcon = document.getElementsByClassName('close-icon')[0];
openBtn.addEventListener('click', () => {
  dialog.showModal();
}, false)
closeBtn.addEventListener('click', () => {
  dialog.close();
  output.value += '[click] 閉じる\n';
}, false);
closeIcon.addEventListener('click', () => {
  dialog.close();
  output.value += '[click] X\n';
}, false);
submitBtn.addEventListener('click', () => {
  dialog.close();
  output.value += '[click] 保存\n';
  output.value += modalText.value;
});
clearBtn.addEventListener('click', () => {
  output.value = '';
}, false)
dialog.addEventListener('close', function(event){
  modalText.value = '';
  output.value += '[dialog event] close' + '\n'
});
dialog.addEventListener('cancel', function(event){
  output.value += '[dialog event] cancel' + '\n'
});