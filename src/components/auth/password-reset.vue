<template>
    <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 class="text-2xl font-bold text-gray-700 mb-6 text-center">Forgot Password</h1>
        <p class="text-gray-600 text-sm mb-6 text-center">
            Enter your email address below, and we'll send you a link to reset your password.
        </p>
        <form action="#" method="POST" class="space-y-4">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-600">Email Address</label>
                <input type="email" id="email" name="email"
                    class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com" required>
            </div>
            <button type="submit"
                class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Send Reset Link
            </button>
        </form>
        <p class="mt-6 text-sm text-center text-gray-600">
            <a href="#" class="text-blue-500 hover:underline">Back to Login</a>
        </p>
    </div>
</template>