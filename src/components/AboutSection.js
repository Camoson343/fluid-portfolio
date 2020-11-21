import React from "react";
import home1 from "../img/home1.png";
import {motion} from 'framer-motion';
import {Layout, Description, Image, Hide} from '../styles';

const AboutSection = () => {

  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>
              How we work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
