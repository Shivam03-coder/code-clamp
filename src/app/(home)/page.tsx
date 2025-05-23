import React from "react";
import Hero from "./hero";
import MainSection from "./main-section";

const page = () => {
  console.log(process.env.NEXT_PUBLIC_DEPLOYED_APP_URL)
  return (
    <>
      <Hero />;
      <MainSection />
    </>
  );
};

export default page;
