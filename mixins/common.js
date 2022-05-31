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
  },
}
