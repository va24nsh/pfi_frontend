import React from 'react'

function ContactCard() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-6 max-w-2xl w-full">
          <form className="text-sm">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                 // placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                 // placeholder="Last name"
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
                 // placeholder="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className="block text-white mb-1">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                //  placeholder="job title"
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
                 // placeholder="Phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="bg-transparent border-b border-white p-2 w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                 // placeholder="Subject"
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
               // placeholder="Leave us a message..."
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