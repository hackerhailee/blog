const withMDX = require('@next/mdx')()
const withMdxFm = require('next-mdx-frontmatter')

module.exports = withMdxFm({
  pageExtensions: ['js', 'jsx', 'mdx'],
})()