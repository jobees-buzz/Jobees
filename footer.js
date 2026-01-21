class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
  <div class="footer-sections">
    <div class="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="first.html">FIRST Robotics</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="sponsors.html">Sponsors</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="resources.html">Resources</a></li>
        <li><a href="reference.html">Reference Page</a></li>

      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact Us</h4>
      <p>Email: jobeesrobotics@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
    <p>© 2026 Jobees Robotics Team</p>
  </div>
</footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);