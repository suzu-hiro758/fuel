const template = document.createElement("template")
template.innerHTML = `
<style>
  .some-class {
    font-family: Arial;
    font-size: 14px;
    color: blue;
  }
</style>
<div>
  This is some text
</div>
<div class="some-class">
  And here's some more text
</div>
`

class QuestionOne extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
}

customElements.define("question-one", QuestionOne)
