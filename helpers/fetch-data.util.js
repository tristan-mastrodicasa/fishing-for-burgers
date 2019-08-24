var { XMLHttpRequest } = require('xmlhttprequest')

function fetchData (maxPrice) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      let burgerData = JSON.parse(request.responseText).venues // parseBurgerData(request.responseText)
      console.log(burgerData)
    }
  }
  request.open(
    'GET',
    'https://visawoap.com/api/venues/page:1/limit:1000/.json?key=4e44f1ac85cd60e3caa56bfd4afb675e'
  )
  request.send()
}

function parseBurgerData (data) {
  burgerdata = JSON.parse(request.responseText).venues
  burgerData.map(venue => venue.Event).filter(event => event.name_of_burger)
}

module.exports = { fetchData }

// payload.venues.map(f => { var v = f.Venue; var nob = f.Event.filter(fe => fe.name_of_burger != undefined && fe.name_of_burger != ""); return nob; })
