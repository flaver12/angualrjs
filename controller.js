angular
      .module('routeTest')
      .controller('MainController' , MainController)
      .controller('BookController' , BookController)
      .controller('EventsController' , EventsController)
      .controller('ChapterController' , ChapterController);
      

function MainController($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.text = 'Name Eingeben';
    
}

function BookController($scope, $routeParams) {
    $scope.name = "BookController";
    $scope.params = $routeParams;
}

function ChapterController($scope, $routeParams) {
    $scope.name = "ChapterController";
    $scope.params = $routeParams;
}

function EventsController($scope, $routeParams, eventsService) {
    $scope.name = "EventsController";
    $scope.params = $routeParams;
    $scope.events = [{"id":359569,"title":"Jukebox","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"2. Akt","latitude":"47.3698567","longitude":"8.5335583","city":"Z\u00fcrich","shorturl":"jukebox-2-akt-2014-11-20","wallId":"287664","isEventTip":"false"},{"id":359795,"title":"Dark Tek District","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"4. Akt","latitude":"47.389532","longitude":"8.5217899","city":"Z\u00fcrich","shorturl":"dark-tek-district-4-akt-2014-11-20","wallId":"287665","isEventTip":"false"},{"id":359567,"title":"Schneehas-\u00d6rgeler vom Greifensee","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Aelplibar","latitude":"47.3713992","longitude":"8.5434943","city":"Z\u00fcrich","shorturl":"schneehas-orgeler-vom-greifensee-aelplibar-2014-11-20","wallId":"287666","isEventTip":"false"},{"id":359159,"title":"Heat","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Akt","latitude":"47.3754953","longitude":"8.5440824","city":"Z\u00fcrich","shorturl":"heat-akt-2014-11-20","wallId":"287667","isEventTip":"false"},{"id":361851,"title":"MyKungFu","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Albani Music Club","latitude":"47.4984843","longitude":"8.7291693","city":"Winterthur","shorturl":"mykungfu-albani-music-club-2014-11-20","wallId":"287668","isEventTip":"false"},{"id":359401,"title":"Salsa All Styles","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Allegra-Club im Hilton Hotel","latitude":"47.5488224","longitude":"7.5920258","city":"Basel","shorturl":"salsa-all-styles-allegra-club-im-hilton-hotel-2014-11-20","wallId":"287669","isEventTip":"false"},{"id":347520,"title":"Famous October","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Altes Spital","latitude":"47.204889","longitude":"7.5355314","city":"Solothurn","shorturl":"famous-october-altes-spital-2014-11-20","wallId":"287670","isEventTip":"false"},{"id":361492,"title":"After Work","subtitle":"","picture":"http:\/\/static5.amiado.com\/amstorage\/partyguide\/pictures\/2014\/384460\/smallcrop\/after-work-aubrey-2014-11-20-after-work-140-227981608.jpg","location":"Aubrey","latitude":"47.3890971","longitude":"8.5177555","city":"Z\u00fcrich","shorturl":"after-work-aubrey-2014-11-20","wallId":"287671","isEventTip":"false"},{"id":361350,"title":"Blackatelle","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Bagatelle 93","latitude":"47.3781525","longitude":"8.5266439","city":"Z\u00fcrich","shorturl":"blackatelle-bagatelle-93-2014-11-20","wallId":"287672","isEventTip":"false"},{"id":362151,"title":"Home of Good Music","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Bar 3000","latitude":"47.3781452","longitude":"8.527425","city":"Z\u00fcrich","shorturl":"home-of-good-music-bar-3000-2014-11-20","wallId":"285768","isEventTip":"false"},{"id":358580,"title":"Good Vibration","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Bar 59","latitude":"47.0418704","longitude":"8.3109567","city":"Luzern","shorturl":"good-vibration-bar-59-2014-11-20","wallId":"287673","isEventTip":"false"},{"id":363094,"title":"Old School","subtitle":"","picture":"http:\/\/static6.amiado.com\/amstorage\/partyguide\/pictures\/2014\/400978\/smallcrop\/old-school-bar-rossi-2014-11-20-old-school-8-136085304.jpg","location":"Bar Rossi","latitude":"47.3794696","longitude":"8.5272005","city":"Z\u00fcrich","shorturl":"old-school-bar-rossi-2014-11-20","wallId":"287674","isEventTip":"false"},{"id":357214,"title":"\u00dc-30 Party","subtitle":"","picture":"http:\/\/static2.amiado.com\/amstorage\/partyguide\/pictures\/2014\/382788\/smallcrop\/u-30-party-bar-rouge-2014-11-20-u-30-party-8-1247205877.jpg","location":"Bar Rouge","latitude":"47.5639257","longitude":"7.6031379","city":"Basel","shorturl":"u-30-party-bar-rouge-2014-11-20","wallId":"287675","isEventTip":"false"},{"id":359389,"title":"This Is Pan","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/pictures\/2014\/383693\/smallcrop\/this-is-pan-bejazz-club-vidmarhallen-2014-11-20-this-is-pan-779389733.jpg","location":"BeJazz Club (Vidmarhallen)","latitude":"46.9349793","longitude":"7.4174636","city":"Liebefeld","shorturl":"this-is-pan-bejazz-club-vidmarhallen-2014-11-20","wallId":"287676","isEventTip":"false"},{"id":361872,"title":"La playa loca","subtitle":"","picture":"http:\/\/static2.amiado.com\/amstorage\/partyguide\/pictures\/2014\/384600\/smallcrop\/la-playa-loca-beach-club-2014-11-20-la-playa-loca-27-473216952.jpg","location":"Beach Club","latitude":"47.3044988","longitude":"8.8260202","city":"Hinwil","shorturl":"la-playa-loca-beach-club-2014-11-20","wallId":"287677","isEventTip":"false"},{"id":359522,"title":"Die Schilcher Alpenparty","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Bierhalle Wolf","latitude":"47.3758401","longitude":"8.5437717","city":"Z\u00fcrich","shorturl":"die-schilcher-alpenparty-bierhalle-wolf-2014-11-20","wallId":"287678","isEventTip":"false"},{"id":358768,"title":"Die Astronauten","subtitle":"","picture":"http:\/\/static6.amiado.com\/amstorage\/partyguide\/pictures\/2014\/383433\/smallcrop\/die-astronauten-cafebar-mokka-2014-11-20-die-astronauten-1575619914.jpg","location":"Caf\u00e9\/Bar Mokka","latitude":"46.7598376","longitude":"7.6238785","city":"Thun","shorturl":"die-astronauten-cafebar-mokka-2014-11-20","wallId":"287679","isEventTip":"false"},{"id":335723,"title":"Friday Night en el Caliente Bar","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Caliente Bar","latitude":"47.424968","longitude":"9.3785851","city":"St. Gallen","shorturl":"friday-night-en-el-caliente-bar-caliente-bar-2014-11-20","wallId":"287680","isEventTip":"false"},{"id":361578,"title":"Place for Newcomers - Happy Thursday","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Cave Bar & Club","latitude":"47.4179284","longitude":"9.3643968","city":"St. Gallen","shorturl":"place-for-newcomers-happy-thursday-cave-bar-club-2014-11-20","wallId":"287681","isEventTip":"false"},{"id":362751,"title":"Chupito Latino","subtitle":"","picture":"http:\/\/static3.amiado.com\/amstorage\/partyguide\/pictures\/2014\/388448\/smallcrop\/chupito-latino-chupito-2014-11-20-chupito-latino-2051805660.jpg","location":"Chupito","latitude":"46.2297743","longitude":"9.0663895","city":"Bellinzona","shorturl":"chupito-latino-chupito-2014-11-20","wallId":"287682","isEventTip":"false"},{"id":363545,"title":"We are College","subtitle":"","picture":"http:\/\/static2.amiado.com\/amstorage\/partyguide\/pictures\/2014\/436347\/smallcrop\/we-are-college-club-1-2014-11-20-we-are-college-36-1410518165.jpg","location":"Club 1","latitude":"46.029364","longitude":"8.9776547","city":"Lugano","shorturl":"we-are-college-club-1-2014-11-20","wallId":"287962","isEventTip":"false"},{"id":363230,"title":"Goldfish Live In Concert","subtitle":"","picture":"http:\/\/static3.amiado.com\/amstorage\/partyguide\/pictures\/2014\/403019\/smallcrop\/goldfish-live-in-concert-club-bellevue-2014-11-20-goldfish-live-in-concert-1374306133.jpg","location":"Club Bellevue","latitude":"47.3672037","longitude":"8.5456426","city":"Z\u00fcrich","shorturl":"goldfish-live-in-concert-club-bellevue-2014-11-20","wallId":"287683","isEventTip":"false"},{"id":359396,"title":"Bon lieu","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Club Bonsoir","latitude":"46.9495043","longitude":"7.4426319","city":"Bern","shorturl":"bon-lieu-club-bonsoir-2014-11-20","wallId":"287684","isEventTip":"false"},{"id":358685,"title":"Salsamania","subtitle":"","picture":"http:\/\/static8.amiado.com\/amstorage\/partyguide\/pictures\/2014\/387806\/smallcrop\/salsamania-club-x-tra-2014-11-20-salsamania-220-1278039042.jpg","location":"Club X-TRA","latitude":"47.3840934","longitude":"8.5325362","city":"Z\u00fcrich","shorturl":"salsamania-club-x-tra-2014-11-20","wallId":"287685","isEventTip":"false"},{"id":361719,"title":"Monkey Breeders","subtitle":"","picture":"http:\/\/static.amiado.com\/amstorage\/partyguide\/upload\/smallcrop\/event-default.png","location":"Coupole (Gaskessel)","latitude":"47.1401866","longitude":"7.2437727","city":"Biel\/Bienne","shorturl":"monkey-breeders-coupole-gaskessel-2014-11-20","wallId":"287686","isEventTip":"false"}]
    $scope.test2 = 'Hallo Welt';
    
    
    
    if($routeParams.eventId != ''){
        $scope.q = $routeParams.eventId;
    }
    
    //loadRemoteData();
    
    // I apply the remote data to the local scope.
    function applyRemoteData( newEvent ) {

        $scope.events = newEvent;

    }
    
    function loadRemoteData() {
 
    // The friendService returns a promise.
    eventsService.getEvents()
        .then(
            function( events ) {

                applyRemoteData( events );

            }
        )
    }
}

