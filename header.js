class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <nav class="navbar">
        <div class="menu-toggle" id="menu-toggle">☰</div>
        <ul class="nav-links" id="nav-links">
          <li><a href="home.html">Home</a></li>
          <li><a href="first.html">FIRST Robotics</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="sponsors.html">Sponsors</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="reference.html">Reference Page</a></li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);