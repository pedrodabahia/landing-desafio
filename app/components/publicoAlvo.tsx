import { Users, TrendingUp, Heart, Award } from 'lucide-react';

export function PublicoAlvoSection() {
  const audiences = [
    {
      icon: Users,
      title: 'Homens que querem sair do sedentarismo',
      description: 'Dê o primeiro passo rumo a uma vida mais ativa e saudável',
    },
    {
      icon: TrendingUp,
      title: 'Homens que buscam evolução constante',
      description: 'Para quem não se contenta com a zona de conforto',
    },
    {
      icon: Heart,
      title: 'Homens que querem melhorar a saúde',
      description: 'Cuide do seu corpo e previna problemas futuros',
    },
    {
      icon: Award,
      title: 'Homens que querem se desafiar',
      description: 'Teste seus limites e descubra do que você é capaz',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
            <span className="text-[#7FA968] uppercase tracking-wider text-sm">Para quem é</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            O Desafio Karkará é para você
          </h2>
          <p className="text-xl text-gray-300">
            Este programa foi desenvolvido para homens que querem transformação real
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-black p-8 rounded-2xl border border-gray-800 hover:border-[#5C7048] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5C7048] rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">{audience.title}</h3>
                    <p className="text-gray-400">{audience.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Message */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#5C7048]/20 to-transparent p-8 rounded-2xl border-l-4 border-[#5C7048]">
            <p className="text-xl text-white mb-2">Não importa seu nível atual</p>
            <p className="text-gray-300">
              Seja você iniciante ou já treine há algum tempo, o Desafio Karkará vai te levar ao próximo nível. 
              O importante é ter vontade de mudar e comprometimento com o processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
