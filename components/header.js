const template = document.createElement("template");
template.innerHTML = `
  <style>
    * {
      background-color: var(--main-text-color);
      color: var(--main-bg-color);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none;    /* Firefox */
      -ms-user-select: none;     /* IE 10+ */
      user-select: none;         /* Standard syntax */
    }

    header h1 {
      font-family: "Kaushan Script", cursive;
      font-weight: 400;
      font-size: 4rem;
      margin-bottom: 0;
    }

    header h3 {
      margin-top: 0;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 5rem;
      font-size: 1rem;
      font-weight: bold;
      padding: 1rem;
    }

    nav a {
      text-decoration: none;
      transtion: 0.25s;
    }

    nav a:hover {
      opacity: 70%;
    }

    @media only screen and (min-width: 650px) {
      nav {
        gap: 10rem;
        font-size: 1.5rem;
      }
    }
  </style>

  <header>
    <h1>LSDreams</h1>
    <h3>Game Studio</h3>
  </header>
  <!-- <nav>
    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Blog</a>
  </nav> -->
`;

export class Header extends HTMLElement {
    
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}