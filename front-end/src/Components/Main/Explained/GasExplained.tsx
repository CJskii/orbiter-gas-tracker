import Description from "./DescOrbiter";
import FeesDescription from "./DescFees";
import HowItWorks from "./DescHowItWorks";

const GasExplained = () => {
  return (
    <section className="py-16">
      <h1 className="text-2xl">Gas Explained</h1>
      <Description />
      <FeesDescription />
      <HowItWorks />
    </section>
  );
};

export default GasExplained;
