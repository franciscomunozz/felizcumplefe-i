import 'photoswipe/style.css'; // Importa el CSS
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery', // coincide con el ID del div
  children: 'a',
  pswpModule: PhotoSwipe
});

lightbox.init();
