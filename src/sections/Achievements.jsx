const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">
            Smart India Hackathon
          </h3>

          <p className="text-gray-400 mt-3">
            Selected at the college level for Smart India Hackathon.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">
            AgriIndus Startup Idea
          </h3>

          <p className="text-gray-400 mt-3">
            Startup idea focused on connecting farmers directly with industries.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">
            College Hackathon
          </h3>

          <p className="text-gray-400 mt-3">
            Secured 4th place in a multi-round hackathon competition.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">
            Inter-College Meet
          </h3>

          <p className="text-gray-400 mt-3">
            Secured 3rd position in an inter-college meet.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;