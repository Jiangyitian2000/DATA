var config = {
    style: 'mapbox://styles/yitian2000/cm83xqyc0001701sabpuj0jvo',
    accessToken: 'pk.eyJ1IjoieWl0aWFuMjAwMCIsImEiOiJjbTcwZ2tmcmswMXMwMmtweHppejI0amJ1In0.LoyGarZRzTF39Uqh1smN4A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Where are the parks in Singapore with tourist appeal?',
    subtitle: "Singapore's parks have an important role in tourism",
    byline: 'By Jiang yitian',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Singapore: The Garden City',
            description:'Known as the Garden City, Singapore is home to more than 300 parks that blend nature with urban life. From the futuristic landscapes of Marina Bay Gardens to the relaxing beaches of East Coast Park, these green spaces attract visitors from around the globe.  <a href="https://www.nparks.gov.sg/"> <strong>Read more</strong></a> <br><br> Discover how these parks are at the heart of tourism.<br><br><img src="images/legend1.jpg" style="height:100%;width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Natural Parks',
                    opacity: 1
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 1               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 0                
                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 0
                },
                {
                    layer: 'Trail Network',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Natural Parks',
                    opacity: 1
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 1               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 0

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 0
                },
                {
                    layer: 'Trail Network',
                    opacity: 0.3
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'The Mystery of Overcrowding in Popular Parks',
            description: ' Despite the fact that parks in Singapore are scattered all over the island, visitors are concentrated in a few popular locations, such as Gardens by the Bay, which attracts millions of visitors every year, while other parks, such as the greenspaces on Orchard Road, are lesser-known. This uneven distribution leads to overcrowding in popular parks and detracts from the experience.<br><br><img src="images/legend2.jpg" style="height:100%; width:250px;"></img>',
            location: {
                center: [1.2834, 103.8651],
                zoom: 14,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Natural Parks',
                    opacity: 0
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 0               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 1

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 1
                },
                {
                    layer: 'Trail Network',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'Natural Parks',
                    opacity: 1
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 1               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 0

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 0
                },
                {
                    layer: 'Trail Network',
                    opacity: 0.3
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Unique Journeys in Parks',
            description: 'Each park has a unique charm.Marina Bay Gardens Supertrees light up at night, East Coast Parks trails are perfect for cycling and seaside walks, and the Botanic Gardens offer a serene natural escape.<br><br>These experiences make the parks of Singapore a must-see attraction.<br><br><img src="images/legend3.jpg" style="height:100%; width:200px;"></img>',
            location: {
                center: [1.3050, 103.9300],
                zoom: 13,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Natural Parks',
                    opacity: 0
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 0             
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 0

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 0
                },
                {
                    layer: 'Trail Network',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Natural Parks',
                    opacity: 0
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 0               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 0

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 0
                },
                {
                    layer: 'Trail Network',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'Explore and share your stories',
            description: "Singapore's parks are much more than just popular attractions. Explore hidden treasures such as Punggol Park or suggest ways to improve existing parks. Tell us about your experiences through our crowdsourcing platform and help build a better tourism future!",
            location: {
                center: [103.8198, 1.3521],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Natural Parks',
                    opacity: 1
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 1               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 1

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 1
                },
                {
                    layer: 'Trail Network',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Natural Parks',
                    opacity: 1
                },
                {
                    layer: 'City Park Attractions',
                    opacity: 1               
                },
                {
                    layer: 'Visitor Density Heat Map1',
                    opacity: 1

                },
                {
                    layer: 'Visitor Density Heat Map2',
                    opacity: 1
                },
                {
                    layer: 'Trail Network',
                    opacity: 1
                }
            ]
        }
    ]
};