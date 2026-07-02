import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export const Mail = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const MessageCircle = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 17 0Z" /></svg>
);
export const FileText = (p: IconProps) => (
  <svg {...base(p)}><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" /><path d="M9 13h6M9 17h6" /></svg>
);
export const PenLine = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
);
export const Code = (p: IconProps) => (
  <svg {...base(p)}><path d="m16 18 4-6-4-6M8 6l-4 6 4 6" /></svg>
);
export const ListChecks = (p: IconProps) => (
  <svg {...base(p)}><path d="m3 6 2 2 3-3M3 14l2 2 3-3M13 7h8M13 15h8" /></svg>
);
export const Lightbulb = (p: IconProps) => (
  <svg {...base(p)}><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" /></svg>
);
export const Briefcase = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>
);
export const GraduationCap = (p: IconProps) => (
  <svg {...base(p)}><path d="M22 9 12 5 2 9l10 4 10-4Z" /><path d="M6 10.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5.5" /></svg>
);
export const Share = (p: IconProps) => (
  <svg {...base(p)}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
);
export const Hash = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" /></svg>
);
export const Newspaper = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2Z" /><path d="M8 8h6M8 12h6M8 16h4" /></svg>
);
export const Megaphone = (p: IconProps) => (
  <svg {...base(p)}><path d="m3 11 15-6v14l-15-6ZM3 11v4M7 12.5V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" /></svg>
);
export const Scale = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z" /></svg>
);
export const Star = (p: IconProps) => (
  <svg {...base(p)}><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8-4.3-4.1 5.9-.9Z" /></svg>
);
export const Mic = (p: IconProps) => (
  <svg {...base(p)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4" /></svg>
);
export const Presentation = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 4h18M4 4v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4M9 20l3-4 3 4" /></svg>
);
export const Utensils = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 3v7a2 2 0 0 0 4 0V3M6 10v11M18 3c-1.7 0-3 2-3 5s1 4 3 4v9" /></svg>
);
export const Home = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 10.5 12 3l9 7.5M5 9v11h14V9" /></svg>
);
export const Heart = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 20s-7-4.5-9.3-9C1.2 8 2.8 4.5 6.2 4.5c2 0 3.3 1.2 4.1 2.4l1.7 2.4 1.7-2.4c.8-1.2 2.1-2.4 4.1-2.4 3.4 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20Z" /></svg>
);
export const Rocket = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 14c-1.5.5-2 2.5-2 5 2.5 0 4.5-.5 5-2M9 15l-3-3c1-5 5-9 11-9 0 6-4 10-9 11ZM15 9a1.5 1.5 0 1 0-2-2" /></svg>
);
export const Sparkles = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3c.6 4 2 5.4 6 6-4 .6-5.4 2-6 6-.6-4-2-5.4-6-6 4-.6 5.4-2 6-6ZM19 14c.3 1.7 1 2.4 2.5 2.7-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-1 2.5-2.7Z" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
);
export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

type IconType = (p: IconProps) => React.ReactElement;

const CATEGORY_ICONS: Record<string, IconType> = {
  email: Mail,
  "text-message": MessageCircle,
  notes: ListChecks,
  "meeting-agenda": ListChecks,
  survey: ListChecks,
  resume: FileText,
  "cover-letter": FileText,
  proposal: FileText,
  job: Briefcase,
  hr: Briefcase,
  "sales-email": Briefcase,
  "interview-prep": GraduationCap,
  academic: GraduationCap,
  text: PenLine,
  paragraph: PenLine,
  "creative-writing": PenLine,
  blog: PenLine,
  ideas: Lightbulb,
  "elevator-pitch": Rocket,
  linkedin: Share,
  twitter: Share,
  "social-caption": Hash,
  newsletter: Newspaper,
  "press-release": Newspaper,
  code: Code,
  "commit-message": Code,
  "customer-support": MessageCircle,
  faq: MessageCircle,
  "ad-copy": Megaphone,
  "product-description": Megaphone,
  tagline: Megaphone,
  legal: Scale,
  review: Star,
  "podcast-transcript": Mic,
  presentation: Presentation,
  recipe: Utensils,
  "real-estate": Home,
  apology: Heart,
};

export function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = CATEGORY_ICONS[slug] ?? Sparkles;
  return <Icon className={className} />;
}
