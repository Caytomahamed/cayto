let testimonialsCache = null;

export const getTestimonials = async () => {
  if (testimonialsCache) return testimonialsCache;

  const res = await fetch(new URL('./testimonials.json', import.meta.url));
  testimonialsCache = await res.json();
  return testimonialsCache;
};
