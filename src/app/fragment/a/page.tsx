import { encode } from "@/utils/encoder";

const FragmentAPage = () => {
  const secretKey = "ABCD";
  const value = encode(secretKey);

  console.log("Fragment A has been rendered.");

  return (
    <>
      Fragment A<br />({value})
    </>
  );
};

export default FragmentAPage;
