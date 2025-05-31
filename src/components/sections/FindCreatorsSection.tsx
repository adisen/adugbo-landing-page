const FindCreatorsSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black h-[800px] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-calistoga leading-tight">
          <span className="text-red-400">
            Find creators to collaborate with.
          </span>
          <br />
          <span className="text-red-400">Get feedback before you post.</span>
        </h2>

        <p className="text-2xl text-gray-300 mt-8 max-w-2xl mx-auto">
          A new home for creators to connect, collaborate, and grow.
        </p>
      </div>
    </section>
  );
};

export default FindCreatorsSection;
