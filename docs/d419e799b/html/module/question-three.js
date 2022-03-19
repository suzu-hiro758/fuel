const template = document.createElement("template");
template.innerHTML = `
<style>
  div {
    color: var(--my-color, blue);
  }
</style>

<div>
  Some text
</div>
`;

class QuestionThree extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define("question-three", QuestionThree);
