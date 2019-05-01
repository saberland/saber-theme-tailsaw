<template>
  <BaseLayout :page="page">
    <div class="flex flex-col items-center text-grey-darker mt-32">
      <h1 class="text-6xl font-light leading-none mb-2">404</h1>

      <h2 class="text-3xl">Page not found.</h2>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'
import transition from '../components/PageTransition'

export default {
  props: ['page'],
  components: { BaseLayout },
  transition
}
</script>
