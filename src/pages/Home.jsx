import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 

const Home = () => {
  const text = "Welcome to The Street Styles!";
  const letters = text.split("");
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  
  const featuredProducts = [
    { id: 1, name: "Trendy Sneakers", image: "https://i.pinimg.com/736x/eb/4e/22/eb4e22cf4ab7edfef7e04e8144d0e229.jpg" },
    { id: 2, name: "Classic Jacket", image: "https://i.pinimg.com/736x/2a/07/3a/2a073ae778e4e6b62f7f947125bd3fc2.jpg" },
    { id: 3, name: "Stylish Sunglasses", image: "https://i.pinimg.com/originals/ed/d8/a2/edd8a294caf599d96c5280fc11caa998.gif" },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          className="absolute bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-xl"
          style={{
            top: `${20 + index * 20}vh`,
            left: `${10 + index * 30}vw`,
            width: "180px",
          }}
          animate={{
            y: [0, -10, 10, 0], 
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={product.image} alt={product.name} className="rounded-lg object-cover w-full h-24" />
          <h3 className="text-center text-sm mt-2">{product.name}</h3>
        </motion.div>
      ))}

      
      <div className="flex flex-col items-center justify-center flex-grow relative">
        <motion.div
          className="flex text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Find Your Best Fashion & Get Trendy..
        </motion.p>

        <motion.button
          onClick={() => navigate("/collection")}
          className="mt-8 px-8 py-3 bg-white/10 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Shop Now
        </motion.button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
