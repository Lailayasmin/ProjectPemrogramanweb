module.exports = {
  async rewrites() {
    return [
      {
        source: '/Login',
        destination: '/account/Login',
      },
      {
        source: '/Daftar',
        destination: '/account/Daftar',
      },
      {
        source: '/LupaPassword',
        destination: '/account/LupaPassword',
      },
      {
        source: '/admin',
        destination: '/admin/dashboard',
      },
      {
        source: '/Produk',
        destination: '/produk/Produk1',
      },
    ]
  },
}