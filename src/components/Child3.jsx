import React, { useContext } from "react";
import { FirstContext } from "./FirstContext";

const Child3 = () => {
    const {userName} = useContext(FirstContext);
  return (
    <section>
      <div>Child3</div>
      <div>
        from Child3
        <br />
        {userName}
      </div>
    </section>
  );
};

export default Child3;
