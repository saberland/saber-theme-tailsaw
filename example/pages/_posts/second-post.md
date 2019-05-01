---
title: Second Post
layout: post
date: 2019-04-30
author: John
categories:
  - meta
  - bar
slug: second-post
cover: /cover-2.png
---

This is the second post. Hope this is not getting too repetitive!

> Id ea nostrud enim proident officia anim aute.
> 
> -- Surely someone

This is better than CoolMathGames:

<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="a++">{{ a }}</button> + <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="b++">{{ b }}</button> = {{ c }}

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