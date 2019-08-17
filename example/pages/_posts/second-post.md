---
title: Second Post
layout: post
date: 2019-04-30
author: John
categories:
  - meta
  - bar
slug: second-post
assets:
  cover: ./second-post.png
---

This is the second post. Hope this is not getting too repetitive!

> Id ea nostrud enim proident officia anim aute.
>
> -- Surely someone

This is better than CoolMathGames:

<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="a++">{{ a }}</button> + <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="b++">{{ b }}</button> = {{ c }}

<script>
export default {
  data() {
    return {
      a: 1,
      b: 3
    }
  },
  computed: {
    c() {
      return this.a + this.b
    }
  }
}
</script>
