import moment from 'moment/min/moment-with-locales'
import _ from 'lodash'

moment.locale('sv')

export const formatPrice = (value) => `${value.toFixed(2).replace('.', ',')} kr`

export const formatDate = (iso) => moment(iso).format('D MMMM YYYY')

export const fromNow = (iso) => moment(iso).fromNow()

export const today = () => _.capitalize(moment().format('dddd'))

export const isOpenNow = () => {
  const now = moment()
  const day = now.isoWeekday()
  const open = moment().hour(day >= 6 ? 9 : 7).minute(0)
  const close = moment().hour(day >= 6 ? 17 : 19).minute(0)
  return now.isBetween(open, close)
}
