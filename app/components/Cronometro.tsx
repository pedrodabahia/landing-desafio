'use client'
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function Countdown() {
  const targetDate = new Date('2026-01-12T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-[#5C7048] to-[#4A5D3F] p-6 sm:p-8 rounded-2xl border border-[#7FA968]/30 shadow-xl shadow-[#5C7048]/20">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-white" />
        <span className="text-white uppercase tracking-wider text-sm">Inscrições encerram em</span>
      </div>
      
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl text-white mb-1">{timeLeft.days}</div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">Dias</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">Horas</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">Min</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl text-white mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">Seg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
