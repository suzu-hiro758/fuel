class MyTitle extends HTMLElement {

  static content = `
  <h3><slot name="title">aa</slot></h3>
  <p>@@</p>
  `
  constructor() {
    super();
    const div = document.createElement('div');
    div.innerHTML = MyTitle.content

    const shadowRoot = this.attachShadow({mode: "closed"});
    shadowRoot.appendChild(div);
  }
}
customElements.define('my-title', MyTitle);