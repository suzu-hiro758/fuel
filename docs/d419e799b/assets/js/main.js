const source = {};

class CodeText extends HTMLElement {

  connectedCallback() {
    const wrapper = document.createElement('code');
    const id = this.getAttribute('codeid');
    const type = this.getAttribute('codetype');
    wrapper.className = `language-${type}`;
    wrapper.id = id;
    wrapper.textContent = source[id];
    this.parentElement.appendChild(wrapper);
    this.parentElement.removeChild(this);
  }

}

customElements.define( 'code-text', CodeText );
