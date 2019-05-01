<template>
  <BaseLayout :page="page">
    <slot />
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
