<template>
  <BaseLayout :page="page">
    <h1 class="leading-none mb-2">{{ page.attributes.title }}</h1>
    <p class="text-grey-darker text-xl md:mt-0">
      {{ page.attributes.author }} • {{ date(page.attributes.createdAt) }}
    </p>

    <img :src="page.attributes.assets.cover" :alt="`${page.attributes.title} cover image`" class="mb-2" v-if="page.attributes.assets.cover">

    <saber-link
      :to="category.permalink"
      :title="`View posts in ${category.name}`"
      class="inline-block bg-grey-light hover:bg-blue-lighter leading-loose tracking-wide text-grey-darkest uppercase text-xs font-semibold rounded mr-4 px-3 pt-px"
      v-for="category in page.categories"
      :key="category.permalink"
    >
      {{ category.name }}
    </saber-link>

    <div class="border-b border-blue-lighter mb-10 pb-4">
      <slot name="default" />
    </div>

    <nav class="flex justify-between text-sm md:text-base">
      <div>
        <saber-link
          :to="page.prevPost.permalink"
          :title="`Older Post: ${page.prevPost.title}`"
          v-if="page.prevPost"
        >
          &LeftArrow; {{ page.prevPost.title }}
        </saber-link>
      </div>

      <div>
        <saber-link
          :to="page.nextPost.permalink"
          :title="`Newer Post: ${page.nextPost.title}`"
          v-if="page.nextPost"
        >
          {{ page.nextPost.title }} &RightArrow;
        </saber-link>
      </div>
    </nav>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'
import date from '../utils/date'
import transition from '../components/PageTransition'

export default {
  components: { BaseLayout },
  props: ['page'],
  methods: { date },
  transition
}
</script>