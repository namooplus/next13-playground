"use client";

import { encode } from "@/utils/encoder";

const FragmentBPage = () => {
  const secretKey = "ABCD";
  const value = encode(secretKey);

  console.log("Fragment B has been rendered.");

  return (
    <>
      Fragment B<br />({value})
    </>
  );
};

export default FragmentBPage;
