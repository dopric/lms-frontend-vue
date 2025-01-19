<template>
      <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
    <h1 class="text-2xl font-bold text-gray-700 mb-6 text-center">Create Your Account</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-600">User Name</label>
        <input type="text" id="name" name="name" v-model="username" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="john" required>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-600" >Email Address</label>
        <input type="email" id="email" name="email" v-model="email" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" id="password" name="password" v-model="password" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="********" required>
      </div>
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-600">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" v-model="confirmPassword" class="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="********" required>
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

<script setup lang="ts">
import axios from "axios";
import { useToast } from "vue-toastification";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const router = useRouter();

const toast = useToast();

const submitForm = () => {


  const formData = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }
  console.log(formData);

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match", 2000);
    return;
  }
debugger
  axios.post("http://localhost:8000/api/v1/users/", formData).then((response) => {
    console.log(response.data);
    toast.success("Account created successfully", 2000);
    router.push("/login");
  }).catch((error) => {
    debugger
    if (error.response) {
      debugger;
      console.error(error.response.message);
      toast.error("An error occurred. Please try again later", 2000);
    }
    
  });
  
  
}

</script>