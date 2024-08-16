import getUserBalance from "@/app/actions/getUserBalance";
import { addApostrophe } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h3>Your Balance</h3>
      <strong>${addApostrophe(balance ?? 0)}</strong>
    </>
  );
};

export default Balance;
