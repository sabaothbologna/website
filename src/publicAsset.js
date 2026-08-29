// Resolves a path in /public against the app's base URL, so assets
// referenced by absolute path still work when the site is deployed
// under a subpath (e.g. GitHub Pages' /website/) and not just at "/".
export function asset(path) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
