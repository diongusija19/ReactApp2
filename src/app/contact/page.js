"use client";

export default function ContactPage() {
  return (
    <section className="card">
      <h1>Contact</h1>
      <p>Email: diongusija12@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/dion-gusija</p>
      <p>GitHub: github.com/diongusija19</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="How can I help?" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
