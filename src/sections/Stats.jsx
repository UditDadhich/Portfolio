import { motion } from "framer-motion";

const stats = [
  {
    number: "370+",
    label: "DSA Problems Solved",
  },

  {
    number: "1500+",
    label: "LeetCode Rating",
  },

  {
    number: "1200+",
    label: "CodeChef Rating",
  },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
              backdrop-blur-xl
            "
          >

            <h2 className="text-4xl font-bold">
              {stat.number}
            </h2>

            <p className="text-gray-400 mt-3 text-sm">
              {stat.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Stats;