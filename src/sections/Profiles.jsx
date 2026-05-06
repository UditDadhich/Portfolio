import { useEffect, useState } from "react";
import LeetCodeStats from "../components/LeetCodeStats";
import {
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Profiles = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/UditDadhich")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <section
      id="profiles"
      className="py-32 px-6 max-w-7xl mx-auto"
    >

      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Coding Profiles
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* GITHUB CARD */}
        <a
          href="https://github.com/UditDadhich"
          target="_blank"
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-[#161b22]
            to-[#0d1117]
            p-8
            hover:scale-[1.03]
            transition-all
            duration-500
            shadow-[0_0_40px_rgba(255,255,255,0.03)]
          "
        >

          <div className="flex items-center gap-4">

            <img
              src={githubData?.avatar_url}
              alt=""
              className="w-20 h-20 rounded-full border border-white/20"
            />

            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FaGithub />
                GitHub
              </h3>

              <p className="text-gray-400">
                @{githubData?.login}
              </p>
            </div>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="bg-white/5 rounded-2xl p-4">
              <p className="text-gray-400 text-sm">
                Repositories
              </p>

              <h4 className="text-2xl font-bold mt-1">
                {githubData?.public_repos}
              </h4>
            </div>
            <img
  src="https://ghchart.rshah.org/UditDadhich"
  alt="GitHub Contribution Graph"
  className="mt-8 rounded-xl border border-white/10"
/>
          </div>

        </a>

        {/* LEETCODE */}
        <a
          href="https://leetcode.com/u/udit_dadhich/"
          target="_blank"
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#FFA116]/20
            bg-gradient-to-br
            from-[#1a1a1a]
            to-[#0f0f0f]
            p-8
            hover:scale-[1.03]
            transition-all
            duration-500
          "
        >

          <div className="flex items-center gap-4">

            <div className="
              w-20
              h-20
              rounded-full
              bg-[#FFA116]/10
              flex
              items-center
              justify-center
            ">
              <SiLeetcode size={40} color="#FFA116" />
            </div>

            <div>

              <h3 className="text-2xl font-bold flex items-center gap-2">
                LeetCode
              </h3>

              <p className="text-gray-400">
                @udit_dadhich
              </p>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="bg-[#FFA116]/10 rounded-2xl p-4">
              <p className="text-gray-400 text-sm">
                Problems Solved
              </p>

              <h4 className="text-2xl font-bold mt-1 text-[#FFA116]">
                370+
              </h4>
            </div>

            <div className="bg-[#FFA116]/10 rounded-2xl p-4">
              <p className="text-gray-400 text-sm">
                Rating
              </p>

              <h4 className="text-2xl font-bold mt-1 text-[#FFA116]">
                1500+
              </h4>
            </div>

          </div>

        </a>

        {/* CODECHEF */}
        <a
          href="https://www.codechef.com/users/udit_dadhich"
          target="_blank"
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#5B4638]/30
            bg-gradient-to-br
            from-[#2d1f17]
            to-[#1b120d]
            p-8
            hover:scale-[1.03]
            transition-all
            duration-500
          "
        >

          <div className="flex items-center gap-4">

            <div className="
              w-20
              h-20
              rounded-full
              bg-[#5B4638]/30
              flex
              items-center
              justify-center
            ">
              <FaCode size={35} />
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                CodeChef
              </h3>

              <p className="text-gray-400">
                @udit_dadhich
              </p>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="bg-[#5B4638]/30 rounded-2xl p-4">
              <p className="text-gray-400 text-sm">
                Rating
              </p>

              <h4 className="text-2xl font-bold mt-1">
                1200+
              </h4>
            </div>

            <div className="bg-[#5B4638]/30 rounded-2xl p-4">
              <p className="text-gray-400 text-sm">
                Competitive Programming
              </p>

              <h4 className="text-lg font-semibold mt-1">
                Active
              </h4>
            </div>

          </div>

        </a>

      </div>

    </section>
  );
};

export default Profiles;