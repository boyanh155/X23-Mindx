import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex bg-red-300">NavBar</div>
      <div className="flex w-full justify-between flex-grow">
        <div className="flex w-20">left side bar</div>
        <div className="grid w-full gap-2 md:grid-cols-3 grid-cols-1 transition-all ">
            <div className="flex-1  rounded-md  xl:bg-green-300 md:bg-red-300 bg-yellow-300 ">post1</div>
            <div className="flex-1  rounded-md  xl:bg-green-300 md:bg-red-300 bg-yellow-300">post2</div>
            <div className="flex-1  rounded-md  xl:bg-green-300 md:bg-red-300 bg-yellow-300">post3</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
