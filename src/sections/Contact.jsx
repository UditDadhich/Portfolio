const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed">
        Interested in collaborating, building projects,
        or discussing opportunities?
      </p>

      <div className="mt-10">

        <a
          href="mailto:24bcs158@iiitdwd.ac.in"
          className="px-8 py-4 bg-white text-black rounded-2xl font-medium inline-block"
        >
          24bcs158@iiitdwd.ac.in
        </a>

      </div>
    </section>
  );
};

export default Contact;