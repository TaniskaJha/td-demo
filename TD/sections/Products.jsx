import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';


const Products = () => (
  <section className={`flex justify-center items-center h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col items-center justify-center`}
      style={{ width: '100%', paddingLeft: 0, paddingRight: 0 }} // Remove padding
    >
      <div className="flex flex-col items-center gap-3 mb-8"> {/* Add margin bottom for gap */}
        <motion.button
          className="w-[50%] h-[45px] text-blue-500 rounded-full bg-white border-2 border-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Product Category
        </motion.button>

        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} `}>
          <span className="cis">PRODUCT NAME</span>
        </motion.h1>
      </div>
      <div
        className="bg-gray-300 w-full h-[450px]" // Adjust background color and height as needed
      />
      <div style={{ height: '50px' }} /> {/* Add empty space below the box */}
    </motion.div>

   
  </section>

  
);

export default Products;
