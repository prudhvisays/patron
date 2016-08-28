import React from 'react';
import Gallery from 'react-photo-gallery';

export default class ArtistGallery extends React.Component {
    render() {
    return (
        <Gallery className="ui image" photos={PHOTO_SET} />
    );
    }
}

const PHOTO_SET = [
  {
    src: 'thumb.jpg',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
      'thumb.jpg 1024w',
      'thumb.jpg 800w',
      'thumb.jpg 500w',
      'thumb.jpg 320w'
    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
      'thumb.jpg 1024w',
      'thumb.jpg 800w',
      'thumb.jpg 500w',
      'thumb.jpg 320w'
    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
      'thumb.jpg 1024w',
      'thumb.jpg 800w',
      'thumb.jpg 500w',
      'thumb.jpg 320w'
    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
      'thumb.jpg 1024w',
      'thumb.jpg 800w',
      'thumb.jpg 500w',
      'thumb.jpg 320w'
    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
      'thumb.jpg 1024w',
      'thumb.jpg 800w',
      'thumb.jpg 500w',
      'thumb.jpg 320w'
    ]
    }
  }
];
