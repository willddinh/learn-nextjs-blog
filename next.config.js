module.exports = {
    env: {
      mongodb_username: 'long',
      mongodb_password: 'thewinner',
      mongodb_clustername: 'learn-nextjs-blog',
      mongodb_database: 'my-site',
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  };