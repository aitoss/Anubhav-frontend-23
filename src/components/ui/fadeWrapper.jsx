import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeWrapper = ({
  children,
  className = "",
  duration = 0.4,
  delay = 0,
}) => {
  const animation = {
    initial: { y: "10%", filter: "blur(12px)", opacity: 0 },
    enter: {
      y: "0",
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay, // Use the delay from props here
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "enter" : ""}
        exit="hidden"
        variants={animation}
        transition={{
          duration, // Use duration from props
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeWrapper;