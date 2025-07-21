import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "hashtagsheep Blog",
    description: 'A blog about woodworking, 3D printing, and the joy of making stuff, plus the occasional sheep pun.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}