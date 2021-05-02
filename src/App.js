// https://www.youtube.com/watch?v=hkhskSrT5SY&t=0s

import "./App.css";
import MobileNavigation from "./NavBar/MobileNavigation";
import First from "./components/aaafirst";
import Second from "./components/aasecond";
import Third from "./components/athird";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function App() {
  const [ ref, inView ] = useInView({ threshold: 0.8 });
  const { ref2, inView2 } = useInView({ threshold: 0.8 });
  const { ref3, inView3 } = useInView({ threshold: 0.8 });
  const animation = useAnimation();
  useEffect(() => {
    console.log("useEffect hook, inView =  ", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({ x: "-80vw" });
    }
  }, [inView]);

  useEffect(() => {
    console.log("useEffect hook, inView2 =  ", inView2);

    if (inView2) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        }
      });
    }
    if (!inView2) {
      animation.start({ x: "-80vw" });
    }
  }, [inView2]);

  return (
    <div className="App">
      <MobileNavigation />
      <div ref={ref}>
        <motion.div className="sections" animate={animation}>
          <First />
        </motion.div>
      </div>
      <div ref2={ref2}>
        <motion.div className="sections" animate={animation}>
          <Second />
        </motion.div>
      </div>
      <div ref3={ref3}>
        <motion.div className="sections" animate={animation}>
          <Third />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
