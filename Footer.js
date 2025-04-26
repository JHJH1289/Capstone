import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="flowus">
        <a href="https://www.instagram.com/play.union/">
          <img src="assets/images/instargram.png" alt="Instagram" />
          <h3>Instargram</h3>
        </a>
        <a href="https://www.youtube.com/live/H9bd1VlqeQE?si=QvnUfmvJrVUhmTfE">
          <img src="assets/images/youtube.png" alt="YouTube" />
          <h3>Youtube</h3>
        </a>
      </div>
      <div className="logo">
        <img src="assets/images/Logo.jpg" alt="Logo" />
      </div>
    </section>
  );
}

export default Footer;
