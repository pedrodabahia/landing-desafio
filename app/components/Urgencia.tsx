import Link from 'next/link';
import { Users, Calendar, AlertCircle } from 'lucide-react';
import { Countdown } from './Cronometro';

export function UrgenciaSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C7048' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Urgency Info */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-red-500 uppercase tracking-wider text-sm">Atenção</span>
            </div>

            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Vagas Limitadas
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Para garantir acompanhamento personalizado e resultados excepcionais, 
              abrimos apenas <span className="text-[#7FA968] font-semibold">30 vagas</span> por turma.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white mb-1">Período do Desafio</div>
                  <div className="text-[#7FA968] text-lg">12/01/2026 a 12/02/2026</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white mb-1">Vagas Disponíveis</div>
                  <div className="text-[#7FA968] text-lg">Apenas 30 vagas por turma</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-amber-200 text-sm">
                As últimas turmas esgotaram em menos de 48 horas. Garanta sua vaga agora!
              </p>
            </div>
          </div>

          {/* Right Side - Countdown */}
          <div>
            <Countdown />
            
            <div className="mt-6 text-center">
              <button className="w-full bg-[#5C7048] hover:bg-[#4A5D3F] text-white px-8 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5C7048]/50 uppercase tracking-wide">
                <Link className="inline-flex items-center gap-3" href={"https://wa.me/5573999916255?text=Ol%C3%A1%21%20Vi%20o%20desafio%20e%20me%20interessei.%20Gostaria%20de%20saber%20mais%20detalhes%2C%20por%20favor"}>
                  Garantir minha vaga agora
                </Link>
              </button>
              <p className="text-gray-400 text-sm mt-3">
                Vagas limitadas • Início em 12/01/2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
