const env = process.env.NODE_ENV || 'development'

export default env === 'production'
  ? (await import('./nuxt.config.prod')).default
  : (await import('./nuxt.config.dev')).default