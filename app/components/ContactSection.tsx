export default function ContactSection() {
  return (
    <section className="bg-surface py-40 px-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-outline-variant/5">
      <div className="p-12 md:p-24 border-r border-outline-variant/10">
        <h2 className="font-serif text-5xl text-white mb-16">Inquire</h2>
        <form className="space-y-12">
          <div className="relative">
            <input 
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/20 py-4 focus:border-secondary focus:ring-0 font-sans text-xs tracking-widest text-white placeholder-outline transition-all" 
              placeholder="NAME" 
              type="text" 
            />
          </div>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/20 py-4 focus:border-secondary focus:ring-0 font-sans text-xs tracking-widest text-white placeholder-outline transition-all" 
              placeholder="EMAIL" 
              type="email" 
            />
          </div>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/20 py-4 focus:border-secondary focus:ring-0 font-sans text-xs tracking-widest text-white placeholder-outline transition-all" 
              placeholder="PHONE" 
              type="tel" 
            />
          </div>
          <div className="relative">
            <textarea 
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/20 py-4 focus:border-secondary focus:ring-0 font-sans text-xs tracking-widest text-white placeholder-outline transition-all resize-none" 
              placeholder="MESSAGE" 
              rows={4}
            ></textarea>
          </div>
          <button className="w-full bg-on-surface text-surface py-6 font-sans font-bold tracking-widest uppercase text-xs hover:bg-secondary transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
      <div className="h-[600px] md:h-auto grayscale contrast-125">
        <div className="w-full h-full bg-surface-container-highest relative flex items-center justify-center overflow-hidden">
          {/* Placeholder for Map */}
          <div className="absolute inset-0 opacity-40">
            <img 
              alt="Map" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAZh4RKBnwKru9VV86lTX_MJzEA9P0Og96oP58LILOpi9kW_sh2sXEXcEKwAvUNgqggfCtvUWER4jQ0iKn5NcSnU8sL5VnBdcaaPydlkgeIi9Nlr-7dCVx8ILxb5uIn5ZBAfT3BhJXlDkz5pHSG1XCrg5j14pRopQGHYn44J31ygSUlLEaILlXcAytj8sNUVpQy2KibMDArq9yXOYMiL3DBXANhzvn1SWpKOKTk6R7EIaNe6n3cZQeSCLnAclfZv_jIs-7CBBGf7ex"
            />
          </div>
          <div className="relative z-10 bg-surface/90 backdrop-blur-md p-10 border border-white/5 text-center">
            <h5 className="font-serif text-xl text-white mb-4">London Studio</h5>
            <p className="font-sans text-[10px] tracking-widest text-on-surface-variant leading-loose uppercase">
              22 Mayfair Street<br />
              London, W1J 8HT<br />
              +44 20 7946 0123
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
