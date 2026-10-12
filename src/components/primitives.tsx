'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/** Apparition douce quand l'élément entre dans l'écran. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--d': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/**
 * Image du site (générée par IA, déposée dans /public/images).
 * Tant que le fichier n'existe pas, un visuel de remplacement sobre s'affiche.
 */
export function Visual({
  src,
  alt,
  className,
  tone = 'dark',
}: {
  src: string;
  alt: string;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // L'erreur de chargement peut survenir avant l'hydratation : on revérifie.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        tone === 'dark' ? 'bg-forest-2' : 'bg-[#e4e7dc]',
        className
      )}
    >
      {failed ? (
        <div
          className={cn(
            'absolute inset-0 flex items-end p-5',
            tone === 'dark' ? 'bg-grid text-lime/70' : 'bg-grid-dark text-stone'
          )}
          aria-label={alt}
          role="img"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgb(163_230_53/0.18),transparent_60%)]" />
          <span className="relative font-mono text-[11px] uppercase tracking-[0.2em]">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}
    </div>
  );
}

/** Petit titre de section en police mono : « 01 — Services ». */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        'mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em]',
        light ? 'text-lime' : 'text-moss'
      )}
    >
      <span className={cn('h-px w-8', light ? 'bg-lime' : 'bg-moss')} />
      {children}
    </p>
  );
}

/** Logo officiel (hexagone lime sur vert forêt) + nom. */
export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-[10px]" />
      <span className="text-xl font-extrabold tracking-tight text-white">
        Gobo<span className="text-lime">Clean</span>
      </span>
    </span>
  );
}
