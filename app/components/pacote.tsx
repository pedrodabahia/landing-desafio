import { Dumbbell, Waves, Activity, Sparkles, Droplets, Apple } from 'lucide-react';

export function PacoteSection() {
  const items = [
    {
      icon: Dumbbell,
      title: 'HIT de Musculação',
      description: 'Treinos de alta intensidade para máxima queima de gordura e ganho muscular',
    },
    {
      icon: Waves,
      title: 'Circuito de Areia',
      description: 'Treinamento funcional na areia para resistência e condicionamento',
    },
    {
      icon: Activity,
      title: 'Treinamento de Musculação',
      description: 'Programa completo de musculação para hipertrofia e força',
    },
    {
      icon: Sparkles,
      title: 'Massagem Modeladora',
      description: 'Sessões de massagem modeladora para recuperação e definição muscular',
    },
    {
      icon: Droplets,
      title: 'Sauna',
      description: 'Sessões de sauna para desintoxicação e relaxamento profundo',
    },
    {
      icon: Apple,
      title: 'Acompanhamento Nutricional',
      description: 'Orientação nutricional profissional para potencializar seus resultados',
    },
  ];

  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C7048' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
            <span className="text-[#7FA968] uppercase tracking-wider text-sm">O que está incluído</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Seu pacote completo de transformação
          </h2>
          <p className="text-xl text-gray-300">
            6 modalidades integradas para resultados máximos em 30 dias
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-black p-8 rounded-2xl border border-gray-800 hover:border-[#5C7048] transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C7048]/0 via-transparent to-transparent group-hover:from-[#5C7048]/10 transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#5C7048]/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-3 group-hover:text-[#7FA968] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 border border-gray-700 rounded-full flex items-center justify-center text-gray-500 text-sm">
                  {index + 1}
                </div>
              </div>
            );
          })}

          {/* Bonus Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#5C7048] to-[#4A5D3F] p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl text-white mb-2">Tudo isso em um único programa</h3>
                <p className="text-white/90 text-lg">
                  Treinamento completo, recuperação e bem-estar integrados para sua transformação total
                </p>
              </div>
              <div className="shrink-0 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
                <div className="text-white/70 text-sm mb-1">Apenas</div>
                <div className="text-white text-3xl">30 dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}