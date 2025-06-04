import React from "react";
import picture from "../assets/images/picture.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-[#5f0101] to-[#ba0000]">
            <div className="absolute -bottom-16 left-8">
              <img
                src={picture}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-lg"
              />
            </div>
          </div>

          <div className="pt-20 px-10 pb-8">
            <h1 className="text-3xl font-bold text-white">Julián Giraldo</h1>
            <p className="text-red-400 font-semibold mt-1">
              Software Developer
            </p>

            <div className="bg-gray-700 p-4 rounded-lg mt-6 flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white mb-2">Education</h3>
                <p className="text-white">
                  Bachelor of Science in Computer Science
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white mb-2">Experience</h3>
                <p className="text-white">
                  Software Developer at Google, 2020-2021
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white mb-2">Projects</h3>
                <p className="text-white">
                  Software Developer at Google, 2020-2021
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Contact</h3>
                <p className="text-white ">📧 julian.giraldo@gmail.com</p>
                <p className="text-white">📱 +57 317 823 33 33</p>
                <p className="text-white">📍 Bogotá, Colombia</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">
                    Tailwind
                  </span>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Social</h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-red-400 text-white "
                  >
                    <span className="mr-2">
                      <Icon icon="mdi:linkedin" />
                    </span>{" "}
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-red-400 text-white "
                  >
                    <span className="mr-2">
                      <Icon icon="mdi:twitter" />
                    </span>{" "}
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-red-400 text-white "
                  >
                    <span className="mr-2">
                      <Icon icon="mdi:instagram" />
                    </span>{" "}
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-white mb-2">About</h3>
              <p className="text-gray-300 text-white">
                Passionate software developer with 5+ years of experience in
                building web applications. Specialized in React and modern
                JavaScript frameworks. Always eager to learn new technologies
                and solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
