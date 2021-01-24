import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

type CropOption = {
  width: number,
  aspect: number,
}

const cropOption: CropOption = {
  width: 320,
  aspect: 1 / 1,
}

let imageRef: any;
let fileUrl: string = ''

const ImageCrop: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string|ArrayBuffer>('')
  const [crop, setCrop] = useState<CropOption>(cropOption)
  const [croppedImageUrl, setCroppedImageUrl] = useState(undefined)

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader: FileReader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result)
        console.log('-- image src ---', imageSrc)
      });
      console.log('-- target file ---', e.target.files[0])
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = (image) => {
    imageRef = image
  }

  const onCropComplete = (crop) => {
    makeClientCrop(crop)
  }

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const cropImage = await getCroppedImg(
        imageRef,
        crop,
        'newFile.jpeg'
      );

      console.log('--- cropImage ---', cropImage)

      setCroppedImageUrl(cropImage);
    }
  }

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob: Blob|null) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }

        console.log('--- blob befor ---', blob)

        blob['name'] = fileName;

        console.log('--- blob after ---', blob)

        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);

        console.log('--- fileUrl ---', fileUrl)

        resolve(fileUrl);
      }, 'image/jpeg');
    });
  }

  return(
    <>
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
        {imageSrc && (
          <ReactCrop
            src={imageSrc}
            crop={crop}
            ruleOfThirds
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
        )}
      </div>

      {croppedImageUrl && (
        <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
      )}
    </>
  )
}

export default ImageCrop
