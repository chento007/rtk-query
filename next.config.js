module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // assuming your Django API is prefixed with /api/
          destination: 'http://136.228.158.126:8002/api/:path*', // Proxy to Backend
        },
      ]
    },
  }
  