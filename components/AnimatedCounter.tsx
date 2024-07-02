"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div w-full>
      <CountUp
        duration={2.75}
        decimal="."
        prefix="£"
        decimals={2}
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
