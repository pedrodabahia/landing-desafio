import { Flame, Dumbbell, Zap, Target } from 'lucide-react';

export function BeneficiosSection() {
  const benefits = [
    {
      icon: Flame,
      title: 'Redução de gordura',
      description: 'Queime gordura de forma eficiente com treinos planejados e intensos',
    },
    {
      icon: Dumbbell,
      title: 'Fortalecimento muscular',
      description: 'Construa músculos fortes e definidos com treinamento progressivo',
    },
    {
      icon: Zap,
      title: 'Mais disposição',
      description: 'Aumente sua energia e vitalidade no dia a dia',
    },
    {
      icon: Target,
      title: 'Rotina disciplinada',
      description: 'Desenvolva consistência e disciplina que duram para sempre',
    },
  ];

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
            <span className="text-[#7FA968] uppercase tracking-wider text-sm">Resultados</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            O que você vai conquistar em 30 dias
          </h2>
          <p className="text-xl text-gray-300">
            Transforme seu corpo e sua mente com resultados comprovados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 rounded-2xl border border-gray-800 hover:border-[#5C7048] transition-all duration-300 hover:shadow-xl hover:shadow-[#5C7048]/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#5C7048] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5C7048]/0 to-[#5C7048]/0 group-hover:from-[#5C7048]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
