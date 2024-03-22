export {};

declare global {
  interface GalleryImage {
    src: string;
    link: string;
    title: string;
    album: string;
    date: string;
  }
  interface GalleryImages {
    galleryitems: GalleryImage;
  }
}