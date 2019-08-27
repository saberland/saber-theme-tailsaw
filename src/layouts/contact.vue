<template>
  <BaseLayout :page="page">
    <slot />

    <div class="mb-12">
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-3">
          <label
            class="block mb-2 text-grey-darkest text-sm font-semibold"
            for="contact-name"
          >
            Name
          </label>

          <input
            type="text"
            placeholder="Jane Doe"
            name="name"
            class="block w-full border shadow rounded-lg outline-none mb-2 p-4"
            required
          />
        </div>

        <div class="w-full px-3 md:w-1/2">
          <label
            class="block text-grey-darkest text-sm font-semibold mb-2"
            for="contact-email"
          >
            Email Address
          </label>

          <input
            type="email"
            placeholder="email@domain.com"
            name="email"
            class="block w-full border shadow rounded-lg outline-none mb-2 p-4"
            required
          />
        </div>
      </div>

      <div class="w-full mb-12">
        <label
          class="block text-grey-darkest text-sm font-semibold mb-2"
          for="contact-message"
        >
          Message
        </label>

        <textarea
          rows="4"
          name="message"
          class="block w-full border shadow rounded-lg outline-none appearance-none mb-2 px-4 py-6"
          placeholder="A lovely message here."
          required
        ></textarea>
      </div>

      <div class="flex justify-end w-full">
        <input
          type="submit"
          value="Submit"
          class="block bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold tracking-wide uppercase shadow rounded-lg cursor-pointer px-6 py-3"
        />
      </div>
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