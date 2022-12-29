import itemGallery from './item';

const rootGallery = document.getElementById('gallery');
export const items = [{
    title: 'Image 1',
    src: '1.jpg'
},{
    title: 'Image 2',
    src: '2.jpg'
},{
    title: 'Image 3',
    src: '3.jpg'
},{
    title: 'Image 4',
    src: '4.gif'
},{
    title: 'Audio 1',
    src: '1.mp3'
},{
    title: 'Audio 2',
    src: '2.mp3'
},{
    title: 'Audio 3',
    src: '3.mp3'
},{
    title: 'Video 1',
    src: '1.mp4'
},{
    title: 'Video 2',
    src: '2.mp4'
}];
function getFile(file) {
    switch (file.split('.').pop()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'png':
        case 'svg':
            return import(`../media/images/${file}`);
        case 'mp3':
            return import(`../media/audio/${file}`);
        default:
            return import(`../media/video/${file}`);
    }
}
items.map(item => {
    getFile(item.src);
    rootGallery.appendChild(itemGallery(item));
})
