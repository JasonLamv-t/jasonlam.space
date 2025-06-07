import Config from '@/types/Config';
import SocialMedia from '../types/SocialMedia'; // Do not use "@" here, it will cause contentlayer build error.

const config: Config = {
  siteMeta: {
    title: `Brachistochrone`,
    authors: [{ name: 'Jason Lam', url: '/about/JasonLamv-t' }],
    description: "Jason Lam's personal website, a place to share my thoughts and experiences.",
    locale: 'zh-CN',
    language: 'zh-cn, en-us',
    theme: 'system',
    url: 'https://jasonlam.space',
    logo: '/data/images/logo.jpg',
    banner: "Jason Lam's personal website",
    siteRepo: 'https://github.com/JasonLamv-t/jasonlamv-t.github.io',
  },
  navigations: [
    ['Blogs', '/posts'],
    ['Projects', '/projects'],
    ['Resources', '/resources'],
    ['About', '/about'],
  ],
  footer: {
    // beian: '你的备案号',
    socialLinks: [
      [SocialMedia.email, 'jasonlamv-t@hotmail.com'],
      [SocialMedia.github, 'JasonLamv-t'],
      [SocialMedia.linkedin, 'https://www.linkedin.com/in/jason-lam-0827181b0'],
      [SocialMedia.bilibili, '10905363'],
      [SocialMedia.instagram, 'jasonlamvt'],
      [SocialMedia.weibo, 'https://weibo.com/u/5609011652'],
    ],
  },
};

const { siteMeta, navigations, feature, footer } = config;
export { siteMeta, navigations, feature, footer };
export { config, config as default };
