const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: block;
    width: 30px;
    border: 1px dotted black;
  }
</style>

<div>1</div>
<div>2</div>
<div>3</div>
`;

class QuestionTwo extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define("question-two", QuestionTwo);
