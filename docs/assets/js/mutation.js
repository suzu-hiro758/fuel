let observer;
let target;
let log;
let configs;

function addChild() {
  if (target.childNodes.length > 5) return
  const elm = document.createElement('div');
  elm.className = 'child';
  elm.textContent = 'child';
  target.appendChild(elm);
}

function addText() {
  if (target.childNodes.length > 5) return
  const txt = document.createTextNode('text');
  target.appendChild(txt);
}

function addGrandChild() {
  const childs = target.querySelectorAll('div');
  if (!childs.length) return

  for (const c of childs) {
    if (c.childNodes.length > 2) return
    const elm = document.createElement('span');
    elm.className = 'g-child';
    elm.textContent = 'g-child';
    c.appendChild(elm);
    break;
  }
}
function deleteChild() {
  if (!target.childNodes.length) return
  target.removeChild(target.firstChild);
}

function updateAttribute() {
    target.classList.toggle('attribute');
}
function clearAll() {
  console.log('clear')
  target.innerHTML = '';
}

function callBack(mutationRecords) {
  log.value += '----------\n'
  mutationRecords.forEach(mr => {
    console.log(mr)
    log.value += `type: ${mr.type}\n`;
    switch (mr.type) {
      case 'childList':
        console.log(mr.previousSibling)
        const prev = mr.previousSibling ? mr.previousSibling.toString() : '-';
        log.value += `added: ${mr.addedNodes.length}, removed: ${mr.removedNodes.length}, previousSibling: ${prev}\n`;
        break;
      case 'attributes':
        log.value += `attributeName: ${mr.attributeName}, oldValue: ${mr.oldValue ?? ''}\n`;
        break;
      case 'characterData':
        break;
      default:
        log.value += 'unknown'
    }
  })
}

function create() {
  if (observer) {
    observer.disconnect()
  }
  const option = {}
  configs.forEach(config => {
    if (config.checked) {
      option[config.name] = true;
    }
  })
  if (!Object.keys(option).length) return
  observer = new MutationObserver(callBack);
  observer.observe(target, option)
}

function initializer() {
  log = document.getElementsByClassName('log')[0]
  target = document.getElementsByClassName('target')[0];
  configs = document.querySelectorAll('.config input[type=checkbox]')
  configs.forEach(config => {
    config.parentNode.appendChild(document.createTextNode(config.name));
  })
  create();
}
window.addEventListener('DOMContentLoaded', initializer);