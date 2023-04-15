export interface DisplayData {
  brand: string;
  model: string;
  horizontal_resolution: number;
  vertical_resolution: number;
  diagonal: number;
}

export const mockDisplayData: DisplayData[] = [
  {
    brand: "Apple",
    model: "display",
    horizontal_resolution: 1920,
    vertical_resolution: 1080,
    diagonal: 24,
  },
  {
    brand: "Apple",
    model: "imac 21.5",
    horizontal_resolution: 4096,
    vertical_resolution: 2304,
    diagonal: 21.5,
  },
  {
    brand: "LG",
    model: "ultrafine 4k",
    horizontal_resolution: 3840,
    vertical_resolution: 2160,
    diagonal: 27,
  },
  {
    brand: "LG",
    model: "ultrafine 4k+",
    horizontal_resolution: 4096,
    vertical_resolution: 2304,
    diagonal: 21.5,
  },
  {
    brand: "LG",
    model: "gaming",
    horizontal_resolution: 1920,
    vertical_resolution: 1080,
    diagonal: 24,
  },
  {
    brand: "Samsung",
    model: "gaming",
    horizontal_resolution: 1920,
    vertical_resolution: 1080,
    diagonal: 24,
  },
];
