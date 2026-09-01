import { techColors, getTagStyle } from './techColors.js';

// Kept as `skills` for backward compatibility with existing imports —
// values now come from the single canonical color map instead of a
// separate (and previously washed-out, semi-transparent) copy.
export const skills = techColors;

export { getTagStyle };

let projectsCache = null;

export const getProjects = async () => {
  if (projectsCache) return projectsCache;

  const res = await fetch(new URL('./projects.json', import.meta.url));
  projectsCache = await res.json();
  return projectsCache;
};

export const getProjectById = async (id) => {
  const projects = await getProjects();
  return projects.find((p) => p.id === id);
};
