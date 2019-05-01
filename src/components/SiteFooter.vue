<template>
  <footer
    class="bg-white text-center text-sm mt-12 py-4 mt-auto"
    role="contentinfo"
  >
    <ul class="flex flex-col md:flex-row justify-center list-reset">
      <li class="md:mr-2">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://saber.land" title="Saber">Saber</a>.
      </li>

      <li class="md:mr-2">
        Built with <a href="https://saber.land" title="Saber">Saber</a> and
        <a
          href="https://tailwindcss.com"
          title="Tailwind CSS, a utility-first CSS framework"
          >Tailwind CSS</a
        >.
      </li>
      <li>
        Based on the
        <a
          href="https://github.com/tightenco/jigsaw-blog-template/"
          title="Jigsaw"
          >Jigsaw Template</a
        >.
      </li>
    </ul>
  </footer>
</template>
