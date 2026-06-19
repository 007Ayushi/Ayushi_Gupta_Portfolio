const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      
      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      {/* Cyan Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* Pink Glow */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 blur-[180px] rounded-full" />

      {/* Stars */}
      {[...Array(120)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;