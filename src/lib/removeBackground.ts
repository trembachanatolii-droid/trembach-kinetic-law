import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to download models and cache them in browser
env.allowLocalModels = false;
env.useBrowserCache = true;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });

    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Resize image if needed and draw it to canvas
    resizeImageIfNeeded(canvas, ctx, imageElement);

    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.9);

    // Process the image with the segmentation model
    const result = await segmenter(imageData);
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }

    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    if (!outputCtx) throw new Error('Could not get output canvas context');

    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);

    // Apply the mask to alpha channel (invert to keep subject)
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;

    const maskData: any = (result[0].mask as any).data;
    for (let i = 0; i < maskData.length; i++) {
      const v = Number(maskData[i]);
      const alpha = Math.round((1 - v) * 255);
      data[i * 4 + 3] = alpha;
    }

    outputCtx.putImageData(outputImageData, 0, 0);

    // Convert canvas to blob (PNG keeps transparency)
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        'image/png',
        1.0,
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
