<template>
  <BaseLayout :page="page">
    <div v-for="(post, i) in featuredPosts" :key="post.attributes.slug">
      <div class="w-full mb-6">
        <img
          :src="post.attributes.cover"
          :alt="`${post.attributes.title} cover image`"
          class="mb-2"
          v-if="post.attributes.cover"
        />

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

        <p class="mt-0 mb-4" v-html="post.attributes.excerpt" />

        <saber-link
          :to="post.attributes.permalink"
          :title="`Read ${post.attributes.title}`"
          class="uppercase tracking-wide mb-4"
        >
          Read
        </saber-link>
      </div>

      <hr class="border-b my-6" v-if="featuredPosts.length !== i + 1" />
    </div>

    <NewsletterForm />

    <div v-for="(posts, i) in unfeaturedPosts" :key="i">
      <div class="flex flex-col md:flex-row md:-mx-6">
        <div
          class="w-full md:w-1/2 md:mx-6"
          v-for="post in posts"
          :key="post.attributes.slug"
        >
          <PostPreview :post="post" />
        </div>
      </div>

      <hr class="w-full border-b mt-2 mb-6" v-if="i % 2 === 0" />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'
import NewsletterForm from '../components/NewsletterForm'
import PostPreview from '../components/PostPreview'
import date from '../utils/date'
import transition from '../components/PageTransition'

export default {
  props: ['page'],
  components: { BaseLayout, NewsletterForm, PostPreview },
  computed: {
    featuredPosts() {
      return this.page.posts.filter(post => post.attributes.featured)
    },
    unfeaturedPosts() {
      const posts = this.page.posts
        .filter(post => !post.attributes.featured)
        .slice(0, 4)
      // chunk it into blocks of two
      return new Array(Math.ceil(posts.length / 2))
        .fill()
        .map((_, i) => posts.slice(i * 2, i * 2 + 2))
    }
  },
  methods: { date },
  transition
}
</script>
