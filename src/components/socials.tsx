import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Socials = () => (
  <div className="flex items-center pt-6 pb-4 space-x-6">
    <a
      href="https://twitter.com/StudyTme"
      className="text-gray-800 hover:text-twitch-purple"
      target="_blank"
      rel="noreferrer"
    >
      <AiOutlineTwitter className="w-6 h-6" />
    </a>
    <a
      href="https://www.instagram.com/itsstudytme/"
      className="text-gray-800 hover:text-twitch-purple"
      target="_blank"
      rel="noreferrer"
    >
      <AiOutlineInstagram className="w-6 h-6" />
    </a>
    <a
      href="https://www.linkedin.com/in/mazzagiulia0/"
      className="text-gray-800 hover:text-twitch-purple"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedinIn className="w-6 h-6" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g"
      className="text-gray-800 hover:text-twitch-purple"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillYoutube className="w-6 h-6" />
    </a>
    <a
      href="https://discord.gg/ceogang"
      className="text-gray-800 hover:text-twitch-purple"
      target="_blank"
      rel="noreferrer"
    >
      <FaDiscord className="w-6 h-6" />
    </a>
  </div>
);

export default Socials;
