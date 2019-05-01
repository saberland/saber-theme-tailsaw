<template>
  <div>
    <header
      class="flex items-center shadow bg-white border-b h-24 py-4"
      role="banner"
    >
      <div class="container flex items-center max-w-4xl mx-auto px-4 lg:px-8">
        <div class="flex items-center">
          <saber-link
            to="/"
            :title="$siteConfig.title"
            class="inline-flex items-center"
          >
            <img
              class="h-8 md:h-10 mr-3"
              src="../assets/img/logo.svg"
              :alt="$siteConfig.title"
            />

            <h1
              class="text-lg md:text-2xl text-blue-darkest font-semibold hover:text-blue-dark my-0"
            >
              {{ $siteConfig.title }}
            </h1>
          </saber-link>
        </div>

        <div class="flex flex-1 justify-end items-center">
          <nav class="hidden lg:flex items-center justify-end text-lg">
            <saber-link
              :to="`/${route}`"
              :title="$siteConfig.title"
              :class="{
                'ml-6 text-grey-darker hover:text-blue-dark': true,
                'active text-blue-dark':
                  $router.currentRoute === $router.match(`/${route}`)
              }"
              v-for="route in ['blog', 'about', 'contact']"
              :key="route"
            >
              {{ route.charAt(0).toUpperCase() + route.slice(1) }}
            </saber-link>
          </nav>

          <button
            class="flex justify-center items-center bg-blue border border-blue h-10 px-5 rounded-full lg:hidden focus:outline-none"
            @click="nav = !nav"
          >
            <svg
              v-if="!nav"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-white h-9 w-4"
              viewBox="0 0 32 32"
            >
              <path
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-white h-9 w-4"
              viewBox="0 0 36 30"
            >
              <polygon
                points="32.8,4.4 28.6,0.2 18,10.8 7.4,0.2 3.2,4.4 13.8,15 3.2,25.6 7.4,29.8 18,19.2 28.6,29.8 32.8,25.6 22.2,15 "
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <nav
      :class="{
        'nav-menu': true,
        'hidden lg:hidden': !nav,
        'lg:block': nav
      }"
    >
      <ul class="list-reset my-0">
        <li class="pl-4">
          <saber-link
            :to="`/${route}`"
            :title="$siteConfig.title"
            :class="{
              'nav-menu__item hover:text-blue': true,
              'active text-blue-dark':
                $router.currentRoute === $router.match(`/${route}`),
              hidden: !nav
            }"
            v-for="route in ['blog', 'about', 'contact']"
            :key="route"
          >
            {{ route.charAt(0).toUpperCase() + route.slice(1) }}
          </saber-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false
    }
  }
}
</script>

<style lang="postcss">
.nav-menu {
  @apply .bg-grey-lighter;
  @apply .pb-2;
  @apply .pt-6;
  @apply .px-2;
  @apply .shadow;
  @apply .w-auto;
}

.nav-menu__item {
  @apply .block;
  @apply .list-reset;
  @apply .no-underline;
  @apply .mb-4;
  @apply .mt-0;
  @apply .text-grey-darker;
  @apply .text-sm;
}
</style>
