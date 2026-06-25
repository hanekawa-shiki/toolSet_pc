import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {

  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    bracketSpacing: true,
    arrowParens: 'always',
    trailingComma: 'es5',
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
