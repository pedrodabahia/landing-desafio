import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMG1hbiUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2Njg2NzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Homem treinando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
            <span className="text-[#7FA968] uppercase tracking-wider">Transforme-se em 30 dias</span>
          </div>

          {/* Limited Spots Badge */}
          <div className="inline-flex items-center gap-2 mb-6 ml-3 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
            <Users className="w-4 h-4 text-red-500" />
            <span className="text-red-500 uppercase tracking-wider text-sm">Vagas Limitadas</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Desafio Karkará
            <span className="block text-[#7FA968] mt-2">30 Dias</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 max-w-2xl">
            30 dias para transformar seu corpo e sua disciplina. 
            Compromisso total. Resultados reais.
          </p>

          {/* Date Info */}
          <div className="mb-10 inline-block px-6 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg">
            <p className="text-gray-400">
              Início: <span className="text-[#7FA968]">12/01/2026</span> • Término: <span className="text-[#7FA968]">12/02/2026</span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="group bg-[#5C7048] hover:bg-[#4A5D3F] text-white px-8 py-5 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#5C7048]/50">
            <Link className="inline-flex items-center gap-3" href={"https://wa.me/5573999916255?text=Ol%C3%A1%21%20Vi%20o%20desafio%20e%20me%20interessei.%20Gostaria%20de%20saber%20mais%20detalhes%2C%20por%20favor"}>
              <span className="uppercase tracking-wide">Quero participar do desafio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-gray-800">
            <div>
              <div className="text-3xl sm:text-4xl text-[#7FA968] mb-1">30</div>
              <div className="text-gray-400 text-sm sm:text-base">Dias de Desafio</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl text-[#7FA968] mb-1">100%</div>
              <div className="text-gray-400 text-sm sm:text-base">Dedicação</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl text-[#7FA968] mb-1">6</div>
              <div className="text-gray-400 text-sm sm:text-base">Modalidades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#7FA968] rounded-full" />
        </div>
      </div>
    </section>
  );
}