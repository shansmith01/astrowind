import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
  
    
    {
      text: 'Blog',
      href: getBlogPermalink(),
    }    
  ],
  actions: [{ text: 'Get started', href: 'https://app.getthejumpon.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },        
        { text: 'Pricing', href: '#' },        
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },              
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },    
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    
  // ],
  footNote: `
    
  `,
};
