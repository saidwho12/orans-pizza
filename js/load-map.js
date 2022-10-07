var map = new maplibregl.Map({
container: 'map',
style:
'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
center: [-74.60956290813102, 45.60903175968645],
zoom: 13.5
});
 
var marker = new maplibregl.Marker()
.setLngLat([-74.60956290813102, 45.60903175968645])
.addTo(map);