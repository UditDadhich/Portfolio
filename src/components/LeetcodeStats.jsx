import { useEffect, useState } from "react";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/udit_dadhich")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="mt-6 space-y-4">

      <div className="bg-[#FFA116]/10 rounded-2xl p-4">
        <p className="text-gray-400 text-sm">
          Total Solved
        </p>

        <h4 className="text-2xl font-bold text-[#FFA116]">
          {stats?.totalSolved || "330+"}
        </h4>
      </div>

      <div className="bg-[#FFA116]/10 rounded-2xl p-4">
        <p className="text-gray-400 text-sm">
          Ranking
        </p>

        <h4 className="text-2xl font-bold text-[#FFA116]">
          {stats?.ranking || "Loading..."}
        </h4>
      </div>

    </div>
  );
};

export default LeetCodeStats;