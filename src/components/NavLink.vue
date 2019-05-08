<template>
  <saber-link
    :to="route.link"
    :title="route.text"
    :class="{
      [$attrs.class]: true,
      'active text-blue-dark':
        $router.currentRoute === $router.match(route.link)
    }"
  >
    {{ route.text }}
  </saber-link>
</template>

<script>
export default {
  props: ['route']
}
</script>
