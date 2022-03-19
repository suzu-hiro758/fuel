const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: flex;
  }
  img {
    width: 64px;
    height: 64px;
  }
  div {
    font-family: Arial;
    color: seagreen;
  }
</style>

<img part="avatar" src="https://via.placeholder.com/64x64.jpg?text=Avatar" />
<div part="name">
  Some Name
</div>
`;

class QuestionFive extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define("question-five", QuestionFive);
