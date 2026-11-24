import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from '../utils/icons';
import { personalData } from '../data/portfolioData';

export const SocialLinks = ({ className = '', iconSize = 'w-5 h-5' }) => {
  const links = [
    {
      name: 'GitHub',
      href: personalData.githubUrl,
      icon: GithubIcon,
      color: 'hover:text-primaryAccent hover:border-primaryAccent/50',
      title: 'Visit GitHub Profile'
    },
    {
      name: 'Email',
      href: `mailto:${personalData.email}`,
      icon: Mail,
      color: 'hover:text-secondaryAccent hover:border-secondaryAccent/50',
      title: 'Send Direct Email'
    },
    {
      name: 'Phone',
      href: `tel:${personalData.phone.replace(/[\s-]/g, '')}`,
      icon: Phone,
      color: 'hover:text-emerald-400 hover:border-emerald-400/50',
      title: 'Call Developer'
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`p-2.5 rounded-xl bg-cardBg border border-subtleBorder text-secondaryText transition-all duration-300 hover:scale-105 hover:bg-elevatedCard ${item.color} shadow-sm group`}
            aria-label={item.title}
            title={item.title}
          >
            <Icon className={`${iconSize} transition-transform duration-300 group-hover:scale-110`} />
          </a>
        );
      })}
    </div>
  );
};
