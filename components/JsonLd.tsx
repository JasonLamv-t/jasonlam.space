'use client';

import { siteMeta } from '#/config';
import { Post } from '@/.contentlayer/generated';
import Script from 'next/script';

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
  };

  return (
    <Script 
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostJsonLd({ post, url }: {post: Post, url: string}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url: url,
    author: {
      '@type': 'Person',
      name: post.author || siteMeta.authors?.[0].name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMeta.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMeta.url}${siteMeta.logo}`,
      },
    },
    keywords: post.tags?.join(', '),
  };

  return (
    <Script 
      id="blogpost-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}