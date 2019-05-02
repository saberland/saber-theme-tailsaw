<template>
  <div class="flex flex-col mb-4">
    <p class="text-grey-darker font-medium my-2">
      {{ date(post.attributes.createdAt) }}
    </p>

    <h2 class="text-3xl mt-0">
      <saber-link
        :to="post.attributes.permalink"
        :title="`Read ${post.attributes.title}`"
        class="text-black font-extrabold"
      >
        {{ post.attributes.title }}
      </saber-link>
    </h2>

    <div class="mb-4 mt-0" v-html="post.attributes.excerpt"></div>

    <saber-link
      :to="post.attributes.permalink"
      :title="`Read ${post.attributes.title}`"
      class="uppercase font-semibold tracking-wide mb-2"
    >
      Read
    </saber-link>
  </div>
</template>

<script>
import date from '../utils/date'

export default {
  props: ['post'],
  methods: { date }
}
</script>
