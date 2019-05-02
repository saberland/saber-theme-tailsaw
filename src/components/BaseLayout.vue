<template>
  <div class="app">
    <SiteHeader />

    <main
      role="main"
      class="flex-auto w-full container max-w-xl mx-auto py-16 px-6"
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
    const pageTitle = this.page && this.page.attributes.title
    const siteTitle = this.$siteConfig.title

    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle,
      bodyAttrs: {
        class: [
          'flex',
          'flex-col',
          'justify-between',
          'min-h-screen',
          'bg-grey-lightest',
          'text-grey-darkest',
          'leading-normal',
          'font-sans'
        ].join(' ')
      }
    }
  },
  transition
}
</script>

<style lang="postcss">
@tailwind preflight;
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

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  @apply .font-semibold;
  @apply .no-underline;
  @apply .text-blue-dark;

  &:hover {
    @apply .text-blue-darker;
  }
}

blockquote {
  @apply .border-blue-light;
  @apply .border-l-4;
  @apply .font-normal;
  @apply .italic;
  @apply .my-8;
  @apply .pl-6;
  @apply .text-grey-darker;
  @apply .text-lg;
}

code,
pre {
  @apply .bg-grey-light;
  @apply .px-2;
  @apply .py-px;
  @apply .rounded;
  @apply .text-sm;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  @apply .bg-grey-light;
  padding: 1rem;
}

code[class*='language-'],
pre[class*='language-'] {
  @apply .font-normal;
  @apply .text-sm;
  @apply .roman;
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
  @apply .text-black;

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
  @apply .border-blue-lighter;
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

p {
  @apply .my-3;

  @screen md {
    @apply .my-6;
  }
}

pre {
  @apply .bg-grey-lighter;
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

::selection {
  @apply .bg-indigo-lightest;
  @apply .text-blue-dark;
}

@tailwind utilities;
</style>
