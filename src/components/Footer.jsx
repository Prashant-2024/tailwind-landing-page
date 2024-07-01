import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex font-lato text-gray-400 gap-6 justify-center">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <div className="flex gap-3">
        <img src="./assets/Help-Avatar.svg" alt="Avatar" />
        <div>
          <p className="font-playfair font-thin">Have any Questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to Specialist
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
