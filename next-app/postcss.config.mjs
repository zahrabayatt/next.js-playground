/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

// in this file we have two two plugins, one is tailwind, the other is autoprefixer.
// Now for the most part, we don't have to touch this configuration file, but if you're an advanced post CSS user, you know this is where you can provide your custom configuration. So when building our application, next JS uses post CSS to transform our class names and generate unique class names that don't clash.
