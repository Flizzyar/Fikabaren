import _ from 'lodash'

const POSITIVE = ['fantastisk', 'god', 'härlig', 'perfekt', 'mysig', 'trevlig', 'bästa', 'underbar', 'färsk', 'saftig', 'prisvärd', 'snabb']
const NEGATIVE = ['torr', 'dyr', 'sur', 'kall', 'långsam', 'trång', 'bränd', 'seg', 'tråkig']

// Räknar fram "smartaste" rekommendationerna utifrån alla recensioner
export function scoreProducts(products, reviews) {
  return _.orderBy(
    products.map((product) => {
      const productReviews = reviews.filter((r) => r.productId === product.id)
      let sentiment = 0
      productReviews.forEach((review) => {
        const words = review.text.toLowerCase().replace(/[.,!]/g, '').split(' ')
        words.forEach((word) => {
          POSITIVE.forEach((p) => {
            if (word.indexOf(p) !== -1) sentiment += 1
          })
          NEGATIVE.forEach((n) => {
            if (word.indexOf(n) !== -1) sentiment -= 1
          })
        })
      })
      const avg = _.meanBy(productReviews, 'rating') || 0
      return { ...product, avg: Math.round(avg * 10) / 10, count: productReviews.length, score: avg * 10 + sentiment / 20 }
    }),
    ['score'],
    ['desc']
  )
}

export function latestReviews(reviews, n) {
  return _.take(_.orderBy(_.cloneDeep(reviews), ['date'], ['desc']), n)
}
