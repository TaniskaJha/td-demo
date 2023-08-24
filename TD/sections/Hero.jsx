import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import ActionButton from '../components/ActionButton';
import India from '../components/India';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative flex flex-row gap-24 mt-1"
     >

        <div className="relative flex flex-col gap-5 mt-2"
        style={{ zIndex: 2 }}>
          <div className="flex-1">
            <motion.button
              className="w-[34%] h-[45px] text-blue-500 rounded-full bg-white border-2 border-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book your service
            </motion.button>

            <motion.div
              className={`${styles.heroHeading} mb-24`}
              variants={textVariant(1.1)}
              style={{ zIndex: 1 }} // Adjust the z-index here
            >
              <span className="cis">Your Trusted</span>
              <span className="iq"> Tax</span>
              <span className="cis"> Advisor</span>
            </motion.div>

            <div className="relative flex flex-col gap-3 mt-2">
              <ActionButton buttonText="GST SEARCH" />
              <ActionButton buttonText="COMPANY SEARCH" />
              <ActionButton buttonText="BUY SERVICES" />
            </div>
          </div>
        </div>

        <India style={{ zIndex: 2 }} /> {/* Adjust the z-index here */}
      </div>
    </motion.div>
  </section>
);

export default Hero;
