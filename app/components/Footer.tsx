import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-4">Desafio Karkará</h3>
            <p className="text-gray-400 mb-4">
              30 dias de transformação física e mental para homens que querem superar seus limites.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fit_espaco?igsh=enJ6OWR2ZnluMXdn"
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#5C7048] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/academiaespacofitt/"
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#5C7048] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:mariltonpm@hotmail.com?subject=Interesse%20no%20desafio&body=Ol%C3%A1%2C%20vi%20o%20desafio%20e%20me%20interessei.%20Gostaria%20de%20saber%20mais%20detalhes%2C%20por%20favor."
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#5C7048] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>WhatsApp: (73) 99830-7281</li>
              <li>WhatsApp: (73) 99964-9599</li>
              <li>Horário: Seg - Sex, 5h - 22h</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2025 Desafio Karkará. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/components/termoPolitica" className="hover:text-[#7FA968] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/components/termoUso" className="hover:text-[#7FA968] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
