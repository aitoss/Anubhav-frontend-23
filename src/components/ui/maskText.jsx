import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function maskText({ textPhrase }) {

    const animation = {
        initial: { y: "100%" },
        enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div ref={ref} className="inline-block">
            {textPhrase.map((phrase, index) => {
                return <div key={index} className="overflow-hidden inline-block" >
                    <motion.span className="m-0 inline-block" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.span>
                </div>
            })}
        </div>
    )
}

export default maskText;