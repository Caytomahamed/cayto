let blogsCache = null;

export const getBlogs = async () => {
  if (blogsCache) return blogsCache;

  const res = await fetch(new URL('./blogs.json', import.meta.url));
  blogsCache = await res.json();
  return blogsCache;
};

export const getBlogById = async (id) => {
  const blogs = await getBlogs();
  return blogs.find((b) => b.id === id);
};
