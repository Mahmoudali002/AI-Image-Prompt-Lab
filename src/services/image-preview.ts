/**
 * Represents the dimensions of an image.
 */
export interface ImageDimensions {
  /**
   * The width of the image in pixels.
   */
  width: number;
  /**
   * The height of the image in pixels.
   */
  height: number;
}

/**
 * Represents an image, including its URL and dimensions.
 */
export interface Image {
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * The dimensions of the image.
   */
dimensions: ImageDimensions;
}

/**
 * Asynchronously retrieves a preview image based on a given prompt.
 * @param prompt The prompt to use for generating the image preview.
 * @returns A promise that resolves to an Image object containing the URL and dimensions of the preview image.
 */
export async function getImagePreview(prompt: string): Promise<Image> {
  // TODO: Implement this by calling an API.
  return {
    url: 'https://picsum.photos/200/300',
    dimensions: {
      width: 200,
      height: 300,
    },
  };
}
