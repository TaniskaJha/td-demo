import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import WhiteBox from '../components/WhiteBox'

const About = () => (
  <>
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <div className="flex justify-center items-center gap-2 ">
          <div className="flex-1 ">
            {/* Content */}
          </div>
        </div>

        <motion.div variants={staggerContainer(0.2, 0.1)} className="  mt-[8px] flex flex-row items-stretch justify-center px-8 z-1">
          {/* White Box 1 */}
          <div className="flex flex-row  justify-center w-[1400px] h-[600px] px-8 gap-9 mt-[19px] ">
      <WhiteBox imgSrc="/lightblue.png" title="GST SEARCH" />
      <WhiteBox imgSrc="/lightblue.png" title="COMPANY SEARCH" />
      <WhiteBox imgSrc="/lightblue.png" title="PRODUCT NAME" />
    </div>
         
             
         </motion.div>
      </motion.div>

     
    </section>
    
  </>
);

export default About;