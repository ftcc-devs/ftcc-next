import { FC} from 'react';
import { GalleryImage } from '../types/imagegallery';
import Image from 'next/image';

interface ImageDetailProps {
  photo: GalleryImage;
}

const ImageDetails: FC<ImageDetailProps> = ({ photo }) => {
  return (
    <div>
      <Image
        src={photo.src}
        alt={photo.title}
        width={800}
        height={600}
        sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}

export default ImageDetails