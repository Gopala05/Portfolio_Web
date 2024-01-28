import React from "react";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// import { desc } from "../components/features/mydetails";

const HomeDetails = () => {
  const mydetails = useSelector((state) => state.mydetails.value);
  // const dispatch = useDispatch();

  // const handleButtonClick = () => {
  //   dispatch(desc({ name: "Gopala Krishna V" }));
  // };

  return (
    <>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1"
      >
        {mydetails.name}
        <br /> <span className="text-accent">{mydetails.domain1}</span> Developer
      </motion.h1>

      <motion.p
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-s xl:max-w-xl mx-auto xl:mx-0 mb-10 "
        style={{fontWeight: 800, color: 'white'}}
      >
        {mydetails.intro}
      </motion.p>

      {/* <button onClick={handleButtonClick} style={{width: '10%'}}>Test Dispatch</button> */}
    </>
  );
};

export default HomeDetails;
