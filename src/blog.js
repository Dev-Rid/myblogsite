// Blog post and category type definitions (converted to JSDoc comments for documentation)

/**
 * @typedef {Object} Author
 * @property {string} name
 * @property {string} avatar
 * @property {string} bio
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} content
 * @property {Author} author
 * @property {string} publishedAt
 * @property {number} readingTime
 * @property {string[]} tags
 * @property {string} category
 * @property {boolean} featured
 * @property {string} image
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {number} count
 * @property {string} color
 */

export {};