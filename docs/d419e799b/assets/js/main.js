
class CodeText extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    const wrapper = document.createElement('code');
    const id = this.getAttribute('codeid');
    const type = this.getAttribute('codetype');
    wrapper.className = `language-${type}`;
    wrapper.id = id;

    wrapper.textContent = document.getElementById(id).innerHTML.trim()
    this.parentElement.appendChild(wrapper);
    this.parentElement.removeChild(this);
  }
}

customElements.define( 'code-text', CodeText );
