const template = document.createElement("template");
template.innerHTML = `
  <style>
    footer {
      position: fixed;
      bottom: 0;
      background-color: var(--main-text-color);
      color: var(--main-bg-color);
      margin: 0;
      height: 5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9em;
    }

    footer p {
      padding: 0 1em;
    }

    @media only screen and (min-width: 650px) {
      footer {
        font-size: 1em;
      }
    }
  </style>

  <footer>
    <p>Copyright &copy;2025 -- Made with &hearts; by <strong>Luiz Souza</strong></p>
  </footer>
`;

export class Footer extends HTMLElement {
    
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}