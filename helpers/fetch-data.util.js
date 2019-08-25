var { XMLHttpRequest } = require('xmlhttprequest')

function fetchData (maxPrice) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      let burgerData = JSON.parse(request.responseText)

      burgerData = burgerData.venues.map(eventVenue => {
        var venue = eventVenue.Venue
        var burgerName = eventVenue.Event.filter(event => event.name_of_burger)
          .map(event => {
            return {
              name: event.name_of_burger,
              image: event.image,
              price: event.burger_price
            }
          })
          .filter(event => event.length)
        console.log(JSON.stringify(burgerName))
        return burgerName
      })

      console.log(JSON.stringify(burgerData))
      return burgerData
      // .flat()
      // .filter(name => name)
      // .map(name => [
      //   {
      //     name: name,
      //     image: ''
      //   }
      // ])
    }
  }
  request.open(
    'GET',
    'https://visawoap.com/api/venues/page:1/limit:1000/.json?key=4e44f1ac85cd60e3caa56bfd4afb675e'
  )
  request.send()
}

module.exports = { fetchData }
