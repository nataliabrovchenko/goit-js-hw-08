import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = `videoplayer-current-time`;

getSavedTime();

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
};

function getSavedTime() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if(savedTime) {
        player.setCurrentTime(savedTime);
    }
};

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});