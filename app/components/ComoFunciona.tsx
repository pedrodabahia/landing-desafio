import { Calendar, CircleCheck, Users, Trophy } from 'lucide-react';

export function ComoFuncionaSection() {
  const steps = [
    {
      number: '01',
      icon: Users,
      title: 'Inscreva-se no desafio',
      description: 'Faça sua inscrição e receba todas as informações para começar sua jornada de transformação.',
    },
    {
      number: '02',
      icon: Calendar,
      title: '30 dias de compromisso',
      description: 'Durante um mês completo, você terá acesso a treinos diários, orientações e acompanhamento profissional.',
    },
    {
      number: '03',
      icon: CircleCheck,
      title: 'Execução e consistência',
      description: 'Siga o programa com disciplina. Cada dia é uma vitória que te aproxima do seu objetivo final.',
    },
    {
      number: '04',
      icon: Trophy,
      title: 'Transformação conquistada',
      description: 'Ao final dos 30 dias, celebre sua nova versão: mais forte, mais saudável e mais confiante.',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
            <span className="text-[#7FA968] uppercase tracking-wider text-sm">Processo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Como funciona o desafio
          </h2>
          <p className="text-xl text-gray-300">
            Um processo simples e direto para sua transformação
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-2xl border border-gray-800 hover:border-[#5C7048] transition-all duration-300 h-full">
                    {/* Number Badge */}
                    <div className="relative inline-block mb-6">
                      <div className="w-16 h-16 bg-[#5C7048] rounded-xl flex items-center justify-center relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-black border-2 border-[#7FA968] rounded-full flex items-center justify-center text-[#7FA968] z-20">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow - Only between cards on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 w-6 h-6 border-t-2 border-r-2 border-gray-700 rotate-45 bg-[#0A0A0A] z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl text-[#7FA968] mb-2">30</div>
              <div className="text-gray-400">Dias Completos</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl text-[#7FA968] mb-2">5</div>
              <div className="text-gray-400">Modalidades</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl text-[#7FA968] mb-2">100%</div>
              <div className="text-gray-400">Acompanhamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
