const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full" />

    </div>
  );
};

export default BackgroundGlow;