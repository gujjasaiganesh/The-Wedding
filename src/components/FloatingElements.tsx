const FloatingElements = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    <div className="absolute top-[10%] left-[5%] text-gold/20 text-2xl animate-float" style={{ animationDelay: '0s' }}>✿</div>
    <div className="absolute top-[5%] right-[15%] text-gold/15 text-xl animate-float" style={{ animationDelay: '2s' }}>❀</div>
    <div className="absolute top-[30%] right-[8%] text-gold/20 text-lg animate-float" style={{ animationDelay: '1s' }}>✦</div>
    <div className="absolute top-[60%] left-[3%] text-gold/15 text-xl animate-float" style={{ animationDelay: '3s' }}>❁</div>
    <div className="absolute top-[80%] right-[5%] text-gold/10 text-2xl animate-float" style={{ animationDelay: '4s' }}>✿</div>
    <div className="absolute top-[45%] left-[12%] text-gold/15 text-sm animate-float" style={{ animationDelay: '1.5s' }}>✦</div>
    <div className="absolute top-[15%] left-[50%] text-gold/10 text-lg animate-float" style={{ animationDelay: '2.5s' }}>❀</div>
  </div>
);

export default FloatingElements;
