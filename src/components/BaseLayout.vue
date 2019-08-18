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