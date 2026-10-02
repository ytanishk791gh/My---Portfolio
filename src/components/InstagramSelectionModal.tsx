import React, { useEffect } from 'react';
import { 
  Instagram, 
  X, 
  ArrowUpRight, 
  User, 
  Film, 
  Sparkles 
} from 'lucide-react';

interface InstagramSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstagramSelectionModal: React.FC<InstagramSelectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const accounts = [
    {
      id: 'personal',
      title: 'Personal / Creator',
      handle: '@Tanishk_023',
      description: 'Behind-the-scenes, creator life & updates',
      url: 'https://www.instagram.com/tanishk_023?stkn=enV5cWxpdTFlcnNx',
      tag: 'Creator',
      icon: <User className="w-5 h-5 text-pink-400" />,
      accentGradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
      hoverBorder: 'hover:border-pink-500/50 group-hover:text-pink-400',
      badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      arrowHoverColor: 'group-hover:border-pink-500/40 group-hover:text-pink-400 group-hover:bg-pink-500/10',
    },
    {
      id: 'studio',
      title: 'Video Editing & Creative Studio',
      handle: '@tavio.co',
      description: 'Cinematic reels, commercial edits & portfolio',
      url: 'https://www.instagram.com/tavio.co?stkn=ZHlobmsxcGx3bWtq',
      tag: 'Creative Studio',
      icon: <Film className="w-5 h-5 text-orange-400" />,
      accentGradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
      hoverBorder: 'hover:border-orange-500/50 group-hover:text-orange-400',
      badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      arrowHoverColor: 'group-hover:border-orange-500/40 group-hover:text-orange-400 group-hover:bg-orange-500/10',
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="instagram-modal-title"
    >
      {/* Modal Box (clicks inside do not close) */}
      <div 
        className="relative w-full max-w-md rounded-3xl bg-zinc-950/95 border border-zinc-800 p-6 sm:p-7 shadow-[0_0_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-br from-pink-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
          aria-label="Close Instagram selector"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
              <Instagram className="w-4 h-4 text-pink-400" />
            </div>
          </div>
          <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider">
            INSTAGRAM DIRECT
          </span>
        </div>

        <h3 id="instagram-modal-title" className="font-display font-black text-2xl text-white tracking-tight">
          Select Instagram Profile
        </h3>
        <p className="text-zinc-400 text-sm mt-1 mb-6 leading-relaxed">
          Choose which account you would like to visit:
        </p>

        {/* Account Options */}
        <div className="space-y-3.5">
          {accounts.map((acc) => (
            <a
              key={acc.id}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className={`group relative flex items-center justify-between p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/90 transition-all duration-200 cursor-pointer overflow-hidden ${acc.hoverBorder}`}
            >
              {/* Subtle gradient hover wash */}
              <div className={`absolute inset-0 bg-gradient-to-r ${acc.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative flex items-center gap-3.5 min-w-0 pr-3">
                <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {acc.icon}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-zinc-300 font-display">
                      {acc.title}
                    </span>
                  </div>
                  <div className="font-display font-black text-base text-white tracking-wide truncate group-hover:text-white">
                    {acc.handle}
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {acc.description}
                  </div>
                </div>
              </div>

              {/* Action arrow badge */}
              <div className={`relative shrink-0 w-8 h-8 rounded-lg bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${acc.arrowHoverColor}`}>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Both profiles active
          </span>
          <span>Opens in new tab</span>
        </div>
      </div>
    </div>
  );
};
