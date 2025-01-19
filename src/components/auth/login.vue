<!-- eslint-disable -->
<template>
    <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 class="text-2xl font-bold text-gray-700 mb-6 text-center">Welcome Back</h1>
      <form action="#" method="POST" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email Address</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input type="password" id="password" name="password" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="********" required>
        </div>
        <div class="flex items-center justify-between">
          <label class="flex items-center text-sm text-gray-600">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 focus:ring-2">
            <span class="ml-2">Remember me</span>
          </label>
          <a href="/password-reset" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Log In
        </button>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600">
        Don't have an account? 
        <a href="#" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
</template>