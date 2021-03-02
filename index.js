let player = MetarealPlayerSDK.create('myWebApp');
let tourURL = 'https://tour-uk.metareal.com/apps/player?asset=23b64c9b-80d0-4b85-bbd4-636088b1e212';

// Load the tour
player.load(tourURL, () => {
    console.log('Tour is loaded');
    player.startShowcase(true);
    player.setEventListener('ready', () => {
        console.log(player);
    });
    player.setEventListener('modelviewclick', (event) => {
        let index;
        if (event.name === 'Terrace') {
            index = 3;
        } else if (event.name === 'Inside') {
            index = 1;
        } else if (event.name === 'Out FrontDoor') {
            index = 0;
        } else if (event.name === 'Closed Balcony') {
            index = 0;
        }
        console.log(event);
        player.setViewMode('TOUR');
        player.moveToPanorama(event.panoramas[index], 'teleport');
    });
});
