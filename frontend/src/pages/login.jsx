import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

    <form>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
      >
        Login
      </button>
    </form>

    <div class="mt-4 text-center">
      <a href="#" class="text-green-600 hover:text-green-800 text-sm">Forgot Password?</a>
    </div>
    <div class="mt-2 text-center">
      <p class="text-sm text-gray-600">
        Don't have an account? <Link href="#" class="text-green-600 hover:text-green-800">Sign Up</Link>
      </p>
    </div>
  </div>
</div>

  )
}

export default Login