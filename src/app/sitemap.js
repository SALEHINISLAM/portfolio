export default function sitemap() {
  return [
    {
      url: 'https://mdsalehinislam.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mdsalehinislam.netlify.app/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mdsalehinislam.netlify.app/blogs',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}