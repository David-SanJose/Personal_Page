class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand bg-dark border-bottom border-body mock1 sticky-top" data-bs-theme="dark">
            <div class="container-fluid justify-content-center">
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                <a class="nav-link" aria-current="page" href="index.html" target="_top">Home</a>
                <a class="nav-link" href="machines.html" target="_top">Machines</a>
                </div>
            </div>
            </div>
        </nav>
      `;
    }
  }
  
  customElements.define('navbar-component', Header);