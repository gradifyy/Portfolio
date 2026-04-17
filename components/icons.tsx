/* Inline SVG brand-ish icons (non-trademark silhouettes). Sized to 24 by default. */

export function CursorGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#a9a9a9" />
        </linearGradient>
      </defs>
      <path
        d="M16 4 28 22l-10-2-4 8-8-24z"
        fill="url(#cg)"
        stroke="#111"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FigmaGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="3" width="7" height="6" rx="3" fill="#F24E1E" />
      <rect x="4" y="9" width="7" height="6" rx="3" fill="#A259FF" />
      <rect x="4" y="15" width="7" height="6" rx="3" fill="#0ACF83" />
      <rect x="11" y="3" width="7" height="6" rx="3" fill="#FF7262" />
      <circle cx="14.5" cy="12" r="3" fill="#1ABCFE" />
    </svg>
  );
}

export function ClaudeGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#CC785C" />
      <path
        d="M10 21l3.4-10H15l3.4 10h-2l-.8-2.5h-3l-.8 2.5H10zm3.1-4.1h2.1l-1-3.3-1.1 3.3zM19.5 11h1.8v10h-1.8V11z"
        fill="#FFF"
      />
    </svg>
  );
}

export function OpenAIGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0F1011" />
      <path
        d="M22.5 14.3a4.4 4.4 0 0 0-.4-3.6 4.5 4.5 0 0 0-4.9-2.1 4.5 4.5 0 0 0-3.6-1.6 4.5 4.5 0 0 0-4.3 3.1 4.5 4.5 0 0 0-3 2.2 4.5 4.5 0 0 0 .5 5.3 4.5 4.5 0 0 0 .4 3.6 4.5 4.5 0 0 0 4.9 2.1 4.5 4.5 0 0 0 3.6 1.6 4.5 4.5 0 0 0 4.3-3.1 4.5 4.5 0 0 0 3-2.2 4.5 4.5 0 0 0-.5-5.3zm-6.7 9.4c-.8 0-1.5-.3-2-.8l.1-.1 3.5-2v4.8l-1.6-1.9zm-5.6-2.4a2.9 2.9 0 0 1-.3-1.9l.1.1 3.5 2 3.1-1.8v4l-3.5 2a2.8 2.8 0 0 1-2.9-4.4zm-1-8a2.9 2.9 0 0 1 1.5-1.3v4.2c0 .3.1.5.3.6l3.1 1.8-1.3.8-3.5-2a2.8 2.8 0 0 1-.1-4.1zm12.1 2.8-3.1-1.8 1.3-.8 3.5 2a2.9 2.9 0 0 1-.4 5.3v-4.2c0-.3-.2-.5-.4-.6l-1 .1zm1.3-2-3.5-2L17.6 9a2.9 2.9 0 0 1 3.5 4.4L21 14.1zm-6.7 2.3-1.3-.8v-3.6c0-1.6 1.3-2.9 2.9-2.9.6 0 1.1.2 1.6.5l-.1.1-3.5 2v4.8l.4-.1zm.7-1.6L16 13l1.5.8v1.8L16 16.3l-1.5-.8v-1.7z"
        fill="#C1FF72"
      />
    </svg>
  );
}

export function SparkleGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v5m0 8v5m-9-9h5m8 0h5M6 6l3 3m6 6 3 3M6 18l3-3m6-6 3-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GithubGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.68-4.58 4.93.36.31.68.93.68 1.88v2.79c0 .27.18.58.68.48A10 10 0 0 0 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BoltGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill="#111" />
    </svg>
  );
}

export function CheckGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="#C1FF72" />
      <path
        d="m4.5 8.2 2.4 2.3L11.5 5.7"
        stroke="#111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 11 11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden>
      <path
        d="m3 3 10 10M13 3 3 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedInGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden>
      <path
        d="M2 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM2.5 6h2.5v8H2.5V6zM7 6h2.4v1.2c.4-.7 1.3-1.4 2.6-1.4 2 0 2.5 1.3 2.5 3V14h-2.5V9.2c0-1-.4-1.5-1.2-1.5-.9 0-1.4.6-1.4 1.5V14H7V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TelegramGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden>
      <path
        d="m2 7 12-4-2 11-4-2-2 3-1-4 7-5-8 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DiscordGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden>
      <path
        d="M13 3.5A11 11 0 0 0 10.4 3l-.2.4c1 .2 1.8.5 2.6 1a7 7 0 0 0-7.6 0c.8-.5 1.7-.8 2.6-1L7.6 3c-.9.1-1.8.3-2.6.5A13 13 0 0 0 3 10a8 8 0 0 0 2.5 1.3l.6-.8c-.5-.2-1-.4-1.3-.7l.3-.2a7 7 0 0 0 6 0l.3.2c-.4.3-.8.5-1.3.7l.6.8A8 8 0 0 0 13 10a13 13 0 0 0-2-6.5zM6 8.8c-.5 0-1-.5-1-1.1s.4-1.1 1-1.1 1 .5 1 1.1-.4 1.1-1 1.1zm4 0c-.5 0-1-.5-1-1.1s.4-1.1 1-1.1 1 .5 1 1.1-.4 1.1-1 1.1z"
        fill="currentColor"
      />
    </svg>
  );
}
