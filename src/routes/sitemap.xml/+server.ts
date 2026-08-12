import { routes, siteUrl } from '$lib/site';

export const prerender = true;

export function GET() {
	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...routes.map((route) => `\t<url><loc>${siteUrl}${route}</loc></url>`),
		'</urlset>',
		''
	].join('\n');

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
