const button = document.getElementById('button')
button.addEventListener('click', () => {

  function Routefill(route1, url) {
    var k = 0;
    for (var i = 0; i < 100; i++) {
      //console.log(i.toString());
      fetch(url + i.toString())
        .then(response => response.json())
        .then(data => {
          const beach = route1[k];
          beach[0] = data.lugar;
          beach[1] = data.cordx;
          beach[2] = data.cordy;
          beach[3] = data._id;
          k = k + 1;
        })
    }
  }
  const route1 = [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4)];
  const route2 = [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4)];
  const route3 = [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),
  Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4)];
  const url1 = 'http://localhost:8080/api/buses/bus/';
  Routefill(route1, url1)

  const url2 = 'http://localhost:8080/api/buses2/bus/';
  Routefill(route2, url2)

  const url3 = 'http://localhost:8080/api/buses3/bus/';
  Routefill(route3, url3)
  console.log(route1);
  console.log(route2);
  console.log(route3);
})