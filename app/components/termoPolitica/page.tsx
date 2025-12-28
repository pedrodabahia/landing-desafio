import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-[#7FA968]" />
              <h1 className="text-4xl sm:text-5xl text-white">Política de Privacidade</h1>
            </div>
            <p className="text-gray-400">
              Última atualização: 28 de dezembro de 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 leading-relaxed">
              O <span className="text-[#7FA968] font-semibold">Desafio Karkará – 30 Dias</span> respeita 
              sua privacidade e está comprometido em proteger seus dados pessoais. Esta Política de Privacidade 
              explica como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza 
              nossos serviços.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">1. Informações que Coletamos</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">1.1 Dados Pessoais:</strong> Nome completo, e-mail, telefone, data de nascimento, endereço e documentos de identificação.</p>
                <p><strong className="text-white">1.2 Dados de Saúde:</strong> Informações sobre condição física, histórico médico relevante, restrições alimentares e objetivos fitness.</p>
                <p><strong className="text-white">1.3 Dados de Uso:</strong> Informações sobre como você utiliza nossos serviços, frequência de treinos e progresso.</p>
                <p><strong className="text-white">1.4 Dados de Pagamento:</strong> Informações necessárias para processar pagamentos (processadas por parceiros seguros).</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">2. Como Usamos suas Informações</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p><strong className="text-white">2.1</strong> Fornecer e personalizar nossos serviços de treinamento e nutrição.</p>
                <p><strong className="text-white">2.2</strong> Comunicar informações importantes sobre o programa, horários e atualizações.</p>
                <p><strong className="text-white">2.3</strong> Processar pagamentos e gerenciar sua inscrição.</p>
                <p><strong className="text-white">2.4</strong> Melhorar nossos serviços e desenvolver novos programas.</p>
                <p><strong className="text-white">2.5</strong> Cumprir obrigações legais e regulatórias.</p>
                <p><strong className="text-white">2.6</strong> Enviar comunicações de marketing (com seu consentimento prévio).</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">3. Compartilhamento de Dados</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:</p>
                <p><strong className="text-white">3.1</strong> Profissionais da equipe Karkará (personal trainers, nutricionistas, massoterapeutas) necessários para prestar os serviços.</p>
                <p><strong className="text-white">3.2</strong> Prestadores de serviços terceirizados (processamento de pagamento, plataformas de comunicação).</p>
                <p><strong className="text-white">3.3</strong> Autoridades legais, quando exigido por lei.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">4. Segurança dos Dados</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados, incluindo:</p>
                <p><strong className="text-white">4.1</strong> Criptografia de dados sensíveis.</p>
                <p><strong className="text-white">4.2</strong> Controles de acesso rigorosos.</p>
                <p><strong className="text-white">4.3</strong> Monitoramento contínuo de segurança.</p>
                <p><strong className="text-white">4.4</strong> Treinamento regular da equipe em proteção de dados.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">5. Seus Direitos (LGPD)</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <p><strong className="text-white">5.1</strong> Confirmar a existência de tratamento de seus dados.</p>
                <p><strong className="text-white">5.2</strong> Acessar seus dados pessoais.</p>
                <p><strong className="text-white">5.3</strong> Corrigir dados incompletos, inexatos ou desatualizados.</p>
                <p><strong className="text-white">5.4</strong> Solicitar a anonimização, bloqueio ou eliminação de dados.</p>
                <p><strong className="text-white">5.5</strong> Revogar o consentimento para tratamento de dados.</p>
                <p><strong className="text-white">5.6</strong> Solicitar a portabilidade de seus dados.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">6. Retenção de Dados</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Mantemos seus dados pessoais pelo tempo necessário para:</p>
                <p><strong className="text-white">6.1</strong> Cumprir os propósitos descritos nesta política.</p>
                <p><strong className="text-white">6.2</strong> Cumprir obrigações legais e contratuais.</p>
                <p><strong className="text-white">6.3</strong> Resolver disputas e fazer cumprir nossos acordos.</p>
                <p className="text-gray-400 italic">Após esse período, seus dados serão excluídos ou anonimizados de forma segura.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">7. Contato</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato:</p>
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4 mt-4">
                    <p className="text-gray-300"><strong className="text-white">E-mail:</strong> mariltonpm@hotmail.com</p>
                    <p className="text-gray-300"><strong className="text-white">Telefone:</strong> (73) 99830-7281</p>
                    <p className="text-gray-300"><strong className="text-white">Endereço:</strong> [Av. João Durval Carneiro, 819, centro - Posto da Mata , BA]</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5C7048] to-[#4A5D3F] rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl text-white mb-2">8. Alterações nesta Política</h2>
                </div>
              </div>
              <div className="text-gray-300 space-y-4 ml-16">
                <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas por e-mail ou através de nosso site. Recomendamos que você revise esta política regularmente.</p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
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
