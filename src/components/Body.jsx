import React from "react";

function Body() {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex justify-center items-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./assets/Blue-Shape.svg"
          alt="Blue Shape"
          className="-rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="Pink Shape"
          className="absolute -rotate-[20deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="Purple Shape"
          className="absolute -rotate-[10deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="Hero Model Image"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="space-y-4 lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight lg:text-6xl">
          Host your Website in less than 5 minutes
        </h1>
        <p className="text-gray-400 font-lato">
          With Hosterr, get your website up and running in no less than 5
          minutes with most competitive pricing packages availabe online.
        </p>
        <form className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter e-mail address"
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="CheckMark" />
          <p className="font-lato text-gray-400">
            No Spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
