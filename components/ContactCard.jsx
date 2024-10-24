import React from 'react'

function ContactCard() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = new URLSearchParams(formData);
    const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: body.toString()
    });
    const res = await fetch('http://localhost:3000/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({firstName: body.get('firstName'), email: body.get('email')})
    });
    if (response.ok) {
        // Reload the page after successful submission
        window.location.reload();
    } else {
        console.error('There was an error submitting the form.');
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-6 max-w-2xl w-full">
          <form name="contact" onSubmit={handleFormSubmit} className="text-sm" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" style={{ display: 'none' }} />
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="email" className="block text-white mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="linkedinProfile" className="block text-white mb-1">LinkedIn Profile</label>
                <input
                  type="text"
                  id="linkedinProfile"
                  name="linkedinProfile"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="phone" className="block text-white mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block text-white mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
