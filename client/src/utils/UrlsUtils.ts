export default {
  getBaseUri: () => import.meta.url.slice(0, import.meta.url.indexOf("/src"))
}