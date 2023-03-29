const FeesDescription = () => {
  return (
    <p className="py-4 text-lg">
      Orbiter's fee consists of two parts - Trading Fee and Withholding Fee. The
      Trading Fee is a percentage of the transfer amount paid to the platform
      and Maker. The exact percentage depends on the destination network, and
      users can check the current fee rates on the Orbiter website. The
      Withholding Fee, on the other hand, is a prepaid fee used to cover the gas
      costs of the destination network transfer. This fee is calculated based on
      the current gas prices of the destination network, and is designed to
      ensure that users do not have to worry about fluctuating gas costs.
    </p>
  );
};

export default FeesDescription;
