<template>
  <BaseLayout :page="page">
    <h1>
      {{ page.category ? `Category: ${page.category}` : page.title }}
    </h1>

    <hr class="border-b my-6" />

    <div v-for="(post, i) in page.posts" :key="post.slug">
      <PostPreview :post="post" />

      <hr class="border-b my-6" v-if="page.posts.length !== i + 1" />
    </div>

    <NewsletterForm />
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'
import PostPreview from '../components/PostPreview'
import NewsletterForm from '../components/NewsletterForm'
import transition from '../components/PageTransition'

export default {
  props: ['page'],
  components: { BaseLayout, PostPreview, NewsletterForm },
  transition
}
</script>
