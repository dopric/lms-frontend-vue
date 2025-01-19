<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full flex justify-center  bg-blue-600 " >
    <div class="relative rounded-2xl mx-4 p-8 space-y-8  text-center">
        <div class="space-y-4">
            <h2 class="text-white font-heading font-bold text-2xl">
                Study smarter, not harder
            </h2>

            <p class="text-xl text-white">
                Are you looking to improve your study habits? StudyNet is here to help you learn more effectively.
              
            </p>
            <p class="text-xl text-white">
              Vue, React, Blazor, Django, .Net Core?
              </p>
              <p class="text-xl text-white">
                We have you covered. StudyNet is a platform that provides you with the resources you need to learn
                effectively.
                </p>
        </div>

        <a class="inline-flex items-center justify-center font-medium tracking-tight rounded-lg border transition hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset h-11 px-4 text-lg text-white shadow focus:ring-white border-transparent bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-offset-yellow-600"
            href="#">
            <span>Start learning now →</span>
        </a>
    </div>
   
</div>
<!-- xl:flex-row justify-center sm:justify-around space-x-0 md:space-x-8 mt-24 -->
<div class="flex flex-col items-center overflow-auto md:flex-row xl:flex-row justify-center sm:justify-around space-x-0 md:space-x-8 mt-24">
  <img src="@/assets/images/vue.png" alt="Vue" class="w-56 h-56 object-fit opacity-50 hover:opacity-100">
  <img src="@/assets/images/react.png" alt="React" class="w-56 h-56 object-fit opacity-50 hover:opacity-100">
  <img src="@/assets/images/blazor.png" alt="Blazor" class="w-56 h-56 object-fit opacity-50 hover:opacity-100">
  <img src="@/assets/images/django.png" alt="Django" class="w-56 h-56 object-fit opacity-50 hover:opacity-100">
  <img src="@/assets/images/dotnetcore.png" alt=".Net Core" class="w-56 h-56 object-fit opacity-50 hover:opacity-100">
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
