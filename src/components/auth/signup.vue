<template>
      <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
    <h1 class="text-2xl font-bold text-gray-700 mb-6 text-center">Create Your Account</h1>
    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-600">Full Name</label>
        <input type="text" id="name" name="name" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-600">Email Address</label>
        <input type="email" id="email" name="email" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" id="password" name="password" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="********" required>
      </div>
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-600">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="********" required>
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Sign Up
      </button>
    </form>
    <p class="mt-6 text-sm text-center text-gray-600">
      Already have an account? 
      <router-link to="/login" class="text-blue-500 hover:underline">Log in</router-link>
    </p>
  </div>
</template>