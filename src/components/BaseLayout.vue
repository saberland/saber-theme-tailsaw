<template>
  <div class="app">
    <SiteHeader />

    <main
      class="flex-auto w-full container max-w-4xl mx-auto py-16 px-6"
      role="main"
    >
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import transition from './PageTransition'
import 'typeface-nunito-sans/index.css'
import 'prismjs/themes/prism.css'

export default {
  components: { SiteHeader, SiteFooter },
  props: ['page'],
  head() {
    const pageTitle = this.page && this.page.title
    const siteTitle = this.$siteConfig.title

    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle,
      bodyAttrs: {
        class:
          'flex flex-col justify-between min-h-screen bg-gray-lightest text-gray-800 leading-normal font-sans'
      }
    }
  },
  transition
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;

.page-enter-active,
.page-leave-active {
  main {
    transition: opacity 0.5s, transform 0.5s ease;
  }
}
.page-leave-to {
  main {
    opacity: 0;
    transform: translateX(-30%);
  }
}
.page-enter {
  main {
    opacity: 0;
    transform: translateX(30%);
  }
}

html {
  box-sizing: border-box;
}

body {
  font-size: 17px;
}

a {
  @apply .font-semibold;
  @apply .no-underline;
  @apply .text-blue-600;

  &:hover {
    @apply .text-blue-800;
  }
}

blockquote {
  @apply .border-blue-400;
  @apply .border-l-4;
  @apply .font-normal;
  @apply .italic;
  @apply .my-8;
  @apply .pl-6;
  @apply .text-gray-800;
  @apply .text-lg;
}

code,
pre {
  @apply .bg-gray-200;
  @apply .px-2;
  @apply .py-px;
  @apply .rounded;
  @apply .text-sm;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  @apply .bg-gray-200;
  padding: 1rem;
}

code[class*='language-'],
pre[class*='language-'] {
  @apply .font-normal;
  @apply .text-sm;
  @apply .not-italic;
}

pre {
  @apply .bg-gray-200;
  @apply .leading-loose;
  @apply .my-6;
  @apply .overflow-x-auto;
  @apply .p-4;
  @apply .rounded;
  @apply .shadow;
  @apply .text-base;

  code {
    @apply .bg-transparent;
    @apply .block;
    @apply .p-0;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply .leading-tight;
  @apply .mb-4;
  @apply .mt-8;
  @apply .text-gray-900;

  &:first-child {
    @apply .mt-0;
  }
}

h1 {
  @apply .font-extrabold;
  @apply .text-5xl;
}

h2 {
  @apply .font-bold;
  @apply .text-4xl;
}

h3 {
  @apply .font-bold;
  @apply .text-3xl;
}

h4 {
  @apply .font-normal;
  @apply .text-2xl;
}

h5 {
  @apply .font-normal;
  @apply .text-xl;
}

h6 {
  @apply .font-light;
  @apply .text-lg;
}

hr {
  @apply .border-b;
  @apply .border-blue-200;
  @apply .my-12;
  @apply .rounded-full;
}

li {
  ul,
  ol {
    @apply .my-0;
  }
}

ol,
ul {
  @apply .my-4;
}

main ul {
  list-style-type: disc;
  padding-left: theme('padding.4');
}

main ol {
  list-style-type: decimal;
  padding-left: theme('padding.4');
}

p {
  @apply .my-3;

  @screen md {
    @apply .my-6;
  }
}

::selection {
  @apply .bg-blue-200;
  @apply .text-white;
}

@tailwind utilities;
</style>
