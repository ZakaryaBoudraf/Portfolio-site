import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-main-dark flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/f660f5c7-3619-4e85-8454-6db77e24ff7e"
        method="POST"
        className="flex flex-col max-w-[800px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-main-light text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            // Send me an email - zakaryaboudraf@gmail.com
          </p>
        </div>
        <input
          className="bg-gray-200 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-200"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-200 p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-main-light hover:border-main-light duration-100 px-2 py-3 mx-auto my-8 flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
