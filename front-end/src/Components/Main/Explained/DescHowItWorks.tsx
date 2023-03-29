const HowItWorks = () => {
  return (
    <p className="pl-4 text-lg">
      <span className="font-bold">To illustrate, let's take an example:</span>{" "}
      <br></br> If you transfer 1 ETH from Mainnet to zkSync, the Trading Fee is
      0.03% of the transfer amount, and the Withholding Fee is 0.0014 ETH. The
      total cost of the transfer would be 0.0017 ETH. <br></br> Similarly, if
      you transfer 100 USDC from Mainnet to zkSync, the Trading Fee is 0.3% of
      the transfer amount, and the Withholding Fee is 1.5 USDC. <br></br> The
      total cost of the transfer would be 1.8 USDC.
    </p>
  );
};

export default HowItWorks;
