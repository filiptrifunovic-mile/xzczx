"use strict";

const GMap = () => {
    const init = () => {
        $(function() {
            let $maps = $('.js-map');

            $maps.each(function() {
                let $map = $(this);
                let lat = parseFloat($map.data('lat'));
                let lng = parseFloat($map.data('lng'));
                let pin = $map.data('pin');
                let zoom = $map.data('zoom');
                let locations = $map.data('locations');

                let map_obj = new google.maps.Map($map[0], {
                    center: {
                        lat,
                        lng
                    },
                    zoom: parseFloat(zoom),
                    disableDefaultUI: !$map.hasClass('js-show-controls'),
                    styles: [{
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 13
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                    "color": "#144b53"
                                },
                                {
                                    "lightness": 14
                                },
                                {
                                    "weight": 1.4
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#08304b"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#0c4152"
                                },
                                {
                                    "lightness": 5
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                    "color": "#0b434f"
                                },
                                {
                                    "lightness": 25
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                    "color": "#0b3d51"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#146474"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#021019"
                            }]
                        }
                    ]
                });

                if (locations !== undefined) {
                    let i = 1;
                    let points = [];
                    locations.forEach((item) => {
                        if (item.lat && item.lng) {
                            points[i] = new google.maps.Marker({
                                position: {
                                    "lat": parseFloat(item.lat),
                                    "lng": parseFloat(item.lng)
                                },
                                map: map_obj,
                                icon: pin,
                                zIndex: 10
                            });
                            points[i]['id'] = item.id;
                            i++;
                        }
                    });
                }
            });
        });
    };

    const lightenDarkenColor = (color, percent) => {
        var R = parseInt(color.substring(1, 3), 16);
        var G = parseInt(color.substring(3, 5), 16);
        var B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    return {
        init: init
    };
};

export default GMap;