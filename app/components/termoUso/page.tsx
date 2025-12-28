import { ArrowLeft, FileText, AlertTriangle, UserX, CreditCard, Scale, Clock, CheckCircle } from 'lucide-react';

export default function TermoUso() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-[#0A0A0A] border-b border-gray-800 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#7FA968] hover:text-[#5C7048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para o site</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-[#7FA968]" />
              <h1 className="text-4xl sm:text-5xl text-white">Termos de Uso</h1>
            </div>
            <p className="text-gray-400">
              Última atualização: 28 de dezembro de 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 leading-relaxed">
              Bem-vindo ao <span className="text-[#7FA968] font-semibold">Desafio Karkará – 30 Dias</span>. 
              Ao se inscrever e participar de nosso programa, você concorda com os termos e condições descritos 
              neste documento. Leia atentamente antes de prosseguir com sua inscrição.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-200 mb-2">Aviso Importante</h3>
              <p className="text-amber-200/80 text-sm">
                O Desafio Karkará é um programa intensivo de atividade física. Recomendamos consultar um médico 
                antes de iniciar qualquer programa de exercícios, especialmente se você tem condições de saúde 
                pré-existentes.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">1. Aceitação dos Termos</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">1.1</strong> Ao se inscrever no Desafio Karkará, você confirma que leu, compreendeu e concorda em cumprir estes Termos de Uso.</p>
                <p><strong className="text-white">1.2</strong> Você também concorda em cumprir nossa Política de Privacidade.</p>
                <p><strong className="text-white">1.3</strong> Se você não concordar com qualquer parte destes termos, não deverá se inscrever no programa.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <UserX className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">2. Elegibilidade e Requisitos</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">2.1</strong> O programa é exclusivo para homens entre 18 e 45 anos.</p>
                <p><strong className="text-white">2.2</strong> Você deve estar em condições físicas adequadas para realizar atividades físicas intensas.</p>
                <p><strong className="text-white">2.3</strong> É sua responsabilidade consultar um médico antes de iniciar o programa.</p>
                <p><strong className="text-white">2.4</strong> Você deve informar quaisquer condições de saúde, lesões ou limitações físicas durante o cadastro.</p>
                <p><strong className="text-white">2.5</strong> Reservamo-nos o direito de recusar ou cancelar a inscrição de participantes que não atendam aos requisitos.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">3. Descrição do Serviço</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>O Desafio Karkará – 30 Dias inclui:</p>
                <p><strong className="text-white">3.1</strong> Treinos de HIT de musculação.</p>
                <p><strong className="text-white">3.2</strong> Circuito de areia funcional.</p>
                <p><strong className="text-white">3.3</strong> Treinamento de musculação personalizado.</p>
                <p><strong className="text-white">3.4</strong> Sessões de massagem modeladora.</p>
                <p><strong className="text-white">3.5</strong> Acesso à sauna.</p>
                <p><strong className="text-white">3.6</strong> Acompanhamento nutricional profissional.</p>
                <p className="text-gray-400 italic">O programa tem duração de 30 dias consecutivos, com início em 10/03/2026 e término em 10/04/2026.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">4. Pagamento e Inscrição</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">4.1</strong> O pagamento deve ser realizado no ato da inscrição para garantir sua vaga.</p>
                <p><strong className="text-white">4.2</strong> As vagas são limitadas a 30 participantes por turma.</p>
                <p><strong className="text-white">4.3</strong> O valor pago não é reembolsável, exceto em casos previstos na cláusula de cancelamento.</p>
                <p><strong className="text-white">4.4</strong> Todas as taxas e impostos aplicáveis estão inclusos no valor do programa.</p>
                <p><strong className="text-white">4.5</strong> Reservamo-nos o direito de alterar os preços a qualquer momento, mas mudanças não afetarão inscrições já confirmadas.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <UserX className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">5. Cancelamento e Reembolso</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">5.1 Cancelamento pelo Participante:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Até 15 dias antes do início: reembolso de 80% do valor pago.</li>
                  <li>Entre 14 e 7 dias antes do início: reembolso de 50% do valor pago.</li>
                  <li>Menos de 7 dias antes do início: sem direito a reembolso.</li>
                  <li>Após o início do programa: sem direito a reembolso.</li>
                </ul>
                <p className="mt-4"><strong className="text-white">5.2 Cancelamento pelo Desafio Karkará:</strong></p>
                <p>Reservamo-nos o direito de cancelar o programa por motivos de força maior. Nesse caso, será oferecido reembolso integral ou transferência para a próxima turma.</p>
                <p><strong className="text-white">5.3</strong> Solicitações de cancelamento devem ser feitas por escrito via e-mail.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">6. Frequência e Comprometimento</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">6.1</strong> O programa exige comprometimento total durante os 30 dias.</p>
                <p><strong className="text-white">6.2</strong> Você deve comparecer pontualmente aos treinos agendados.</p>
                <p><strong className="text-white">6.3</strong> Ausências não justificadas não serão repostas.</p>
                <p><strong className="text-white">6.4</strong> Em caso de doença ou lesão, você deve notificar a equipe imediatamente.</p>
                <p><strong className="text-white">6.5</strong> Atrasos frequentes podem resultar na exclusão do programa sem direito a reembolso.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">7. Responsabilidades e Riscos</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">7.1</strong> Você reconhece que atividades físicas intensas envolvem riscos inerentes.</p>
                <p><strong className="text-white">7.2</strong> O Desafio Karkará não se responsabiliza por lesões decorrentes de má execução de exercícios ou não cumprimento das orientações.</p>
                <p><strong className="text-white">7.3</strong> É sua responsabilidade seguir as instruções dos profissionais e respeitar seus limites físicos.</p>
                <p><strong className="text-white">7.4</strong> Você deve utilizar os equipamentos e instalações de forma adequada e segura.</p>
                <p><strong className="text-white">7.5</strong> O Desafio Karkará não se responsabiliza por objetos pessoais perdidos ou danificados.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">8. Conduta do Participante</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Você concorda em:</p>
                <p><strong className="text-white">8.1</strong> Tratar outros participantes e a equipe com respeito.</p>
                <p><strong className="text-white">8.2</strong> Não utilizar substâncias ilícitas ou proibidas.</p>
                <p><strong className="text-white">8.3</strong> Não comparecer aos treinos sob efeito de álcool.</p>
                <p><strong className="text-white">8.4</strong> Seguir as regras de segurança e higiene das instalações.</p>
                <p><strong className="text-white">8.5</strong> Não divulgar informações confidenciais sobre outros participantes.</p>
                <p className="text-amber-200">Comportamento inadequado pode resultar em exclusão imediata sem reembolso.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">9. Propriedade Intelectual</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">9.1</strong> Todo conteúdo do programa (treinos, planos alimentares, materiais) é propriedade do Desafio Karkará.</p>
                <p><strong className="text-white">9.2</strong> É proibida a reprodução, distribuição ou comercialização de qualquer material sem autorização.</p>
                <p><strong className="text-white">9.3</strong> Fotos e vídeos realizados durante o programa podem ser utilizados para fins promocionais, salvo negativa expressa.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">10. Garantias e Resultados</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">10.1</strong> Os resultados variam de pessoa para pessoa e dependem de diversos fatores individuais.</p>
                <p><strong className="text-white">10.2</strong> Não garantimos resultados específicos de perda de peso ou ganho muscular.</p>
                <p><strong className="text-white">10.3</strong> Seus resultados dependem de seu comprometimento, genética, condição inicial e aderência ao programa.</p>
                <p><strong className="text-white">10.4</strong> Depoimentos e resultados apresentados são exemplos individuais e não representam garantia para todos.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">11. Alterações nos Termos</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">11.1</strong> Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.</p>
                <p><strong className="text-white">11.2</strong> Alterações significativas serão comunicadas com antecedência razoável.</p>
                <p><strong className="text-white">11.3</strong> O uso continuado dos serviços após alterações constitui aceitação dos novos termos.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">12. Lei Aplicável e Foro</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">12.1</strong> Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
                <p><strong className="text-white">12.2</strong> Fica eleito o foro da comarca de [Cidade/Estado] para dirimir quaisquer controvérsias.</p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Contato</h2>
              <p className="text-gray-300 mb-4">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300"><strong className="text-white">E-mail:</strong> mariltonpm@hotmail.com</p>
                <p className="text-gray-300"><strong className="text-white">Telefone:</strong> (73) 99830-7281</p>
                <p className="text-gray-300"><strong className="text-white">Endereço:</strong> [Av. João Durval Carneiro, 819, centro - Posto da Mata , BA]</p>
              </div>
            </section>
          </div>

          {/* Acceptance Notice */}
          <div className="mt-12 bg-[#5C7048]/20 border border-[#5C7048] rounded-2xl p-8 text-center">
            <p className="text-gray-300 mb-4">
              Ao se inscrever no Desafio Karkará – 30 Dias, você declara ter lido e concordado com todos os termos acima.
            </p>
            <a 
              href="/" 
              className="inline-block bg-[#5C7048] hover:bg-[#4A5D3F] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5C7048]/50"
            >
              Voltar para o Desafio Karkará
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
