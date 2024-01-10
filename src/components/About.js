import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="bg-gray-800 p-12 rounded-lg shadow-xl w-full max-w-4xl transition-transform transform hover:scale-105">
                <h1 className=" text-green-400 text-4xl font-semibold mb-6">About Our Company</h1>
                
                <p className="text-lg text-gray-100 mb-6">
                    Welcome to our company's about page! We are dedicated to providing high-quality services and products to our valued customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero eget arcu facilisis, nec viverra elit pretium. Sed id velit vehicula, bibendum dui sit amet, faucibus mauris. Donec eu felis a augue accumsan blandit. 
                </p>

                <p className="text-lg text-gray-100 mb-6">
                    Our mission is to exceed customer expectations by delivering exceptional products and services. We value integrity, innovation, and customer satisfaction above all else. Fusce tristique auctor eros vitae efficitur. Phasellus luctus aliquet est, non ultricies est commodo vel. Nullam vitae lorem ullamcorper, pellentesque eros at, venenatis risus.
                </p>

                <h2 className="  text-green-400 text-3xl font-semibold mb-4">Our Team</h2>
                <p className="text-lg text-gray-100 mb-6">
                    Meet the talented individuals who drive our company's success. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lorem sit amet leo interdum eleifend vel vitae lectus. Nullam luctus convallis mauris, eget finibus orci fermentum non.
                </p>

                <h2 className="  text-green-400 text-3xl font-semibold mb-4">Our Values</h2>
                <p className="text-lg text-gray-100 mb-6">
                    We are committed to upholding the highest standards of integrity, quality, and innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lorem sit amet leo interdum eleifend vel vitae lectus. Nullam luctus convallis mauris, eget finibus orci fermentum non.
                </p>

              <Link to="/contact" className="hover:opacity-75 transition-opacity duration-300 text-lg">  <h2 className="  text-green-400 text-3xl font-semibold mb-4">Contact Us</h2> </Link>
                <p className="text-lg text-gray-100 mb-6">
                    Have questions or want to learn more? Feel free to reach out to our team at any time. We're here to help! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lorem sit amet leo interdum eleifend vel vitae lectus. Nullam luctus convallis mauris, eget finibus orci fermentum non.
                </p>
            </div>
        </div>
    );
};

export default About;
