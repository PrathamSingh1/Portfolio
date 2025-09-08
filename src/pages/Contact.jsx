import React from 'react'

const Contact = () => {
  return (
    <div className='sm:max-w-[500px] max-w-[300px] mx-auto sm:mt-[50px] mt-[10px]'>
      <div className="text-white rounded-xl shadow-lg border border-[#27272a] p-4 sm:p-6">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-center mb-3">Contact Me</h2>

        {/* Contact Form */}
        <form className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="3"
              placeholder="Type your message here..."
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:outline-none resize-none text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
