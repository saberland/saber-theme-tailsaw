<template>
  <div
    class="flex justify-center lg:-mx-12 my-12 p-6 md:px-12 bg-gray-200 border border-gray-400 text-sm md:rounded shadow"
  >
    <div class="w-full md:w-2/3 lg:w-1/2">
        <h2 class="block mb-6 text-2xl text-center text-gray-900">
          Sign up for our newsletter
        </h2>
        <div class="flex mb-6 md:mb-3">
          <label for="email" class="hidden">Email Address</label>
          <input
            type="email"
            name="email"
            class="email leading-normal outline-none px-4 py-2 rounded-l w-2/3 md:rounded-l md:rounded-r-none md:w-3/4 min-w-0"
            placeholder="Email address"
          />
          <input
            type="submit"
            value="Subscribe"
            class="button bg-blue-500 cursor-pointer leading-normal px-6 py-2 rounded-r text-white w-1/3 hover:bg-blue-dark md:w-1/4 min-w-0"
          />
        </div>
    </div>
  </div>
</template>