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
    width: 289,
    height: 289,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [
    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 216,
    height: 143,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [

    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 216,
    height: 143,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [

    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 216,
    height: 143,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [

    ]
    }
  },
  {
    src: 'thumb.jpg',
    width: 216,
    height: 143,
    aspectRatio: 1,
    lightboxImage:{
    src: 'thumb.jpg',
    srcset: [

    ]
    }
  }
];
