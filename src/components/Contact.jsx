import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action='https://formspree.io/f/xdorgkve' method='POST'>
          <div>
            <label>Name</label>
            <input type="text" name='Username' required placeholder="abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name='email' required placeholder="abc@xyz.com" />
          </div>

          <div>
            <label>Message</label>
            <input type="text" name='message' required placeholder="Write you query..." />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact
