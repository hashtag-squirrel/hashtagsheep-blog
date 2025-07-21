import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Hashtagsheep's Blog",
    description: 'A blog about woodworking, 3D printing, and the joy of making stuff, plus the occasional sheep pun.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
  });
}