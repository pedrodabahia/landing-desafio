import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1682616324443-ca6b19317e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmaXRuZXNzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY2ODY3NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Transformação fitness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
              <span className="text-[#7FA968] uppercase tracking-wider text-sm">Comece Agora</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Pare de adiar sua transformação
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              30 dias podem mudar sua vida para sempre
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Cada dia que você espera é um dia a menos de ser a melhor versão de si mesmo. 
              O momento é agora. A decisão é sua.
            </p>

            {/* CTA Button */}
            <button className="group bg-[#5C7048] hover:bg-[#4A5D3F] text-white px-10 py-6 rounded-xl transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-[#5C7048]/50 hover:scale-105">
              <Link className="inline-flex items-center gap-3" href={"https://wa.me/5573999916255?text=Ol%C3%A1%21%20Vi%20o%20desafio%20e%20me%20interessei.%20Gostaria%20de%20saber%20mais%20detalhes%2C%20por%20favor"}>
                <span className="uppercase tracking-wide text-lg">Aceitar o Desafio Karkará</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#7FA968]" />
                <span>Programa estruturado</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#7FA968]" />
                <span>Acompanhamento profissional</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#7FA968]" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>

          {/* Motivational Quote Box */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-transparent p-8 sm:p-10 rounded-2xl border-l-4 border-[#5C7048] backdrop-blur-sm">
            <blockquote className="text-2xl sm:text-3xl text-white mb-4 italic">
              "A disciplina é a ponte entre objetivos e conquistas"
            </blockquote>
            <p className="text-gray-400">
              Não espere estar pronto. Você se torna pronto durante o processo. 
              O Desafio Karkará te dá as ferramentas, você fornece a determinação.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5C7048] to-transparent" />
    </section>
  );
}
