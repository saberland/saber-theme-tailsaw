export default date =>
  new Date(date).toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
