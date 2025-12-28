export function SobreSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1667890786608-8b2f8c60afa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMG1hbiUyMHdvcmtvdXR8ZW58MXx8fHwxNzY2ODY3NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Treinamento intenso"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 bg-[#5C7048] p-6 rounded-lg shadow-xl hidden sm:block">
              <div className="text-white">
                <div className="text-4xl mb-1">30</div>
                <div className="text-sm opacity-90">Dias de Garra</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[#4A5D3F]/20 border border-[#5C7048] rounded-full">
              <span className="text-[#7FA968] uppercase tracking-wider text-sm">Sobre o Desafio</span>
            </div>

            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Um programa completo de transformação
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              O Desafio Karkará é um programa de 30 dias voltado exclusivamente para homens que querem transformar 
              seu corpo, fortalecer a mente e criar uma rotina de disciplina.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Não é apenas sobre perder peso ou ganhar músculos. É sobre comprometimento, superação e construir 
              a melhor versão de você mesmo através da consistência e do trabalho duro.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5C7048] flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Emagrecimento sustentável</h3>
                  <p className="text-gray-400">Perca gordura de forma saudável e duradoura</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5C7048] flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Fortalecimento físico</h3>
                  <p className="text-gray-400">Ganhe força, resistência e definição muscular</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5C7048] flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Disciplina e mentalidade</h3>
                  <p className="text-gray-400">Desenvolva hábitos que transformam sua vida</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5C7048] flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Acompanhamento profissional</h3>
                  <p className="text-gray-400">Orientação especializada em cada etapa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
