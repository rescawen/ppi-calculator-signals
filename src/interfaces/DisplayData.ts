export interface DisplayData {
  brand: string;
  horizontal_resolution: number;
  vertical_resolution: number;
}

export const mockDisplayData: DisplayData[] = [
  { brand: "Apple", horizontal_resolution: 1920, vertical_resolution: 1080 },
  { brand: "Apple", horizontal_resolution: 4096, vertical_resolution: 2304 },
  { brand: "LG", horizontal_resolution: 3840, vertical_resolution: 2160 },
  { brand: "LG", horizontal_resolution: 4096, vertical_resolution: 2304 },
  { brand: "LG", horizontal_resolution: 1920, vertical_resolution: 1080 },
  { brand: "Samsung", horizontal_resolution: 1920, vertical_resolution: 1080 },
];
