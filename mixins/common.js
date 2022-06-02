/* eslint-disable unicorn/escape-case */
export default {
  methods: {
    formatMyDate(val) {
      return 'Date: ' + val
    },
    truncateString(str, num) {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, num) + '...'
    },
    parseCoords(stringCoords) {
      const [latString, lngString] = stringCoords.split(',')
      return { lat: Number(latString), lng: Number(lngString) }
    },
    getGoogleFontsIconCode(iconName) {
      const correspondences = {
        Pharmacies: '\ue550',
        ATMs: '\ue53e',
        Restaurants: '\ue56c',
      }
      return correspondences[iconName]
    },
  },
}
