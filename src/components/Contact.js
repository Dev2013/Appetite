
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center ">
            <div className="bg-[#34d399] p-8 rounded-lg shadow-md w-full max-w-2xl max-h-3xl"> {/* Increased width here */}
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
               <fieldset>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="sam jones"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 border rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="samjones12@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-md h-32"
                            id="message"
                            name="message"
                            placeholder="Enter your Query..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                </fieldset> 
            </div>
        </div>
    );
};

export default Contact;
