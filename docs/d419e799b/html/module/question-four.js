const template = document.createElement("template");
template.innerHTML = `
<style>
  header ::slotted(*) {
    text-decoration: underline;
  }
  article ::slotted(div.special) {
    color: turquoise;
  }
</style>

<section>
  <header>
    <h3><slot name="header">Default Header</slot></h3>
  </header>
  <article>
    <slot></slot>
  </article>
</section>
`;

class QuestionFour extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define("question-four", QuestionFour);
