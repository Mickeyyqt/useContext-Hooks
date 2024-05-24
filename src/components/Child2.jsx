import React, { useContext } from "react";
import { FirstContext } from "./FirstContext";

const Child2 = () => {
    const {liveIn} = useContext(FirstContext);
  return (
    <section>
      <div>Child2</div>
      <div>
        From Child2
        <br>
        {liveIn}
        </br>
      </div>
    </section>
  );
};

export default Child2;
