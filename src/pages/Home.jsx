import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/background.jpg'; // You can replace this with a relevant background
import { motion } from 'framer-motion'; // For animations

const Homepage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-8 "
        >
          AI-Powered Business Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl mb-12"
        >
          Revolutionize your customer experience with predictive analytics.
        </motion.p>

        {/* Animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform"
          >
            <h2 className="text-gray-900 text-2xl font-bold mb-4">Customer Churn</h2>
            <p className="text-gray-700">Predict which customers are likely to leave and take action to retain them.</p>
            <Link to="/upload" className="mt-4 inline-block text-lg font-bold text-blue-600">
              Explore
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform"
          >
            <h2 className="text-gray-900 text-2xl font-bold mb-4">Customer Segmentation</h2>
            <p className="text-gray-700">Classify your customer base into groups for targeted marketing strategies.</p>
            <Link to="/customer-segmentation" className="mt-4 inline-block text-lg font-bold text-blue-600">
              Explore
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform mx-4"
          >
            <h2 className="text-gray-900 text-2xl font-bold mb-4">Upselling / Cross Selling</h2>
            <p className="text-gray-700">Boost sales by recommending relevant products or services.</p>
            <Link to="/upselling-cross-selling" className="mt-4 inline-block text-lg font-bold text-blue-600">
              Explore
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform mx-4"
          >
            <h2 className="text-gray-900 text-2xl font-bold mb-4">Next Best Action</h2>
            <p className="text-gray-700">Determine the best action to take for each customer interaction.</p>
            <Link to="/next-best-action" className="mt-4 inline-block text-lg font-bold text-blue-600">
              Explore
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-white"
        >
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
