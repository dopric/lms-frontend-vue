<template>
  <nav class="flex bg-gray-800 p-4 text-white">
    <router-link to="/" class="mr-4 hover:text-gray-400"> StudyNet</router-link>
    <div class="ml-auto">
      <router-link to="/about" class="mr-4 hover:text-gray-400">About</router-link>
      <router-link to="/login" class="mr-4 hover:text-gray-400">Login</router-link>
      <router-link to="/signup" class="hover:text-gray-400">Sign Up</router-link>
      <router-link to="/dashboard" class="ml-4 hover:text-gray-400">Dashboard</router-link>
    </div>
  </nav>
</template>