
const generateGiphyCdn = (total) => {
  const baseUrl = 'giphy.com'
  const baseSubdomain = 'media'

  let domainArray = []

  let subdomainCount = 0
  while (subdomainCount < total) {
    const newArray = [...domainArray]
    newArray.push(`${baseSubdomain}${subdomainCount}.${baseUrl}`)
    domainArray = newArray
    subdomainCount++
  }

  return domainArray
}

module.exports = {
  images: {
    domains: [...generateGiphyCdn(10), 'giphy.com'],
    loader: 'default',
  }
} 