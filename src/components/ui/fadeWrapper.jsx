import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FadeWrapper({ children }) {
  const animation = {
    initial: { y: "25px", opacity: 0, filter: "blur(4px)" },
    enter: {
      y: "0",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075,
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <motion.span
        className="m-0"
        variants={animation}
        initial="initial"
        animate={inView ? "enter" : ""}
      >
        {children}
      </motion.span>
    </div>
  );
}

export default FadeWrapper;
