export interface DisplayData {
  brand: string;
  name: string;
  horizontal_resolution: number;
  vertical_resolution: number;
  diagonal: number;
}

const giantList = [
  "272x340 @ 1.337 Apple watch 38mm",
  "312x390 @ 1.534 Apple watch 42mm",
  "368x448 @ 1.757 Apple watch 44mm",
  "480x320 @ 3.5 Apple iPhone",
  "800x240 @ 3.53 Nintendo 3DS (3D)",
  "800x480 @ 3 Toshiba Portégé G900",
  "800x600 @ 6 Sony Librié",
  "854x480 @ 3.7 Motorola Droid",
  "960x544 @ 5 Sony PS Vita",
  "960x640 @ 3.5 Apple iPhone 4/4S",
  "1024x600 @ 5.6 Panasonic Toughbook CF-U1",
  "1024x768 @ 6.4 Sony PCG-U1",
  "1136x640 @ 4 Apple iPhone SE(2016)",
  "1280x720 @ 4.3 Sony Xperia S",
  "1280x720 @ 6.2 Nintendo Switch",
  "1280x800 @ 13.3 Sharp Mebius MW70J",
  "1200x825 @ 9.7 Kindle DX",
  "1200x900 @ 7.5 OLPC XO-1 (b/w mode)",
  "1280x1024 @ 0.61 MicroOLED microdisplay",
  "1334x750 @ 4.7 Apple iPhone 8",
  "1360x768 @ 11.1 Asus S6F",
  "1366x768 @ 11.6 Apple MacBook Air 11",
  "1366x768 @ 15.6",
  "1400x1050 @ 12 Toshiba Portege M200",
  "1440x900 @ 13.3 Lenovo Thinkpad X300",
  "1440x900 @ 19",
  "1440x960 @ 15.2 Apple PowerBook G4",
  "1440x1440 @ 4.5 BlackBerry Passport",
  "1600x768 @ 8 Sony Vaio P-Series",
  "1600x900 @ 13.1 Sony Vaio VGN-Z11WN/B",
  "1600x900 @ 17.3",
  "1620x1080 @ 4.5 BlackBerry KEYone",
  "1680x945 @ 18.4 Sony Vaio VGN-AW11M/H",
  "1680x1050 @ 15.4 Sony Vaio FS92",
  "1792x768 @ 14.4 Toshiba Satellite U840W",
  "1792x828 @ 6.1 Apple iPhone 11",
  "1872x1404 @ 10.3 reMarkable",
  "1920x1080 @ 4.7 HTC One",
  "1920x1080 @ 5.5 Apple iPhone 6 Plus",
  "1920x1080 @ 5.7 Playstation VR",
  "1920x1080 @ 11.6 Asus Zenbook UX21A",
  "1920x1152 @ 10.1 Lenovo IdeaTab K2",
  "1920x1200 @ 7 Google Nexus 7 (2013)",
  "1920x1200 @ 10.1 Acer Iconia Tab A700",
  "1920x1200 @ 15.4 IBM Thinkpad T61p",
  "1920x1200 @ 24",
  "1920x1920 @ 26.5 Eizo EV2730Q",
  "2040x1080 @ 6.4 Xiaomi Mi MIX",
  "2048x1152 @ 23 Samsung 2343BW",
  "2048x1536 @ 0.83 Forth Dimension QXGA-R9",
  "2048x1536 @ 7.9 iPad mini w/ Retina display",
  "2048x1536 @ 9.7 iPad (3rd gen.)",
  "2048x1536 @ 15 NEC Versa Pro NX VA20S/AE",
  "2048x1536 @ 20.8 Iiyama ProLite H530-B",
  "2048x2048 @ 0.99 Kopin Lightning 2K",
  "2160x1080 @ 5.5 LG Q6",
  "2200x1650 @ 13.3 Sony DPT-RP1",
  "2266x1488 @ 8.3 Apple iPad Mini 2021",
  "2224x1080 @ 5.84 Huawei P20",
  "2224x1668 @ 10.5 Apple iPad Pro 10.5",
  "2304x1440 @ 12 Apple MacBook (Retina)",
  "2340x1080 @ 5.4 Apple iPhone 13 Mini",
  "2360x1640 @ 10.9 Apple iPad Air 4",
  "2388x1668 @ 11 Apple iPad Pro 11",
  "2400x1600 @ 12.3 Google Pixelbook",
  "2448x2448 @ 2.88 JDI VR LPTS",
  "2436x1125 @ 5.8 Apple iPhone 11 Pro",
  "2532x1170 @ 6.1 Apple iPhone 13",
  "2560x1080 @ 25 LG 25UM65-P",
  "2560x1312 @ 5.71 Essential PH-1",
  "2560x1440 @ 5.1 Samsung Galaxy S6/S7",
  "2560x1440 @ 11.6 Dell XPS 11",
  "2560x1440 @ 27 Apple iMac 27",
  "2560x1536 @ 5.5 Meizu MX4G",
  "2560x1600 @ 5.6 Samsung Galaxy Note Edge",
  "2560x1600 @ 8.9 Kindle Fire HDX 8.9",
  "2560x1600 @ 10.055 Google Nexus 10",
  "2560x1600 @ 13.3 Apple MacBook Air M1",
  "2560x1664 @ 13.6 Apple MacBook Air M2",
  "2560x1700 @ 12.85 Chromebook Pixel",
  "2560x1800 @ 10.2 Google Pixel C",
  "2560x2048 @ 20.1 NEC MD205MG-1",
  "2560x2880 @ 27.6 LG 28MQ780-B",
  "2688x1242 @ 6.5 Apple iPhone 11 Pro Max",
  "2732x2048 @ 12.9 Apple iPad Pro 12.9",
  "2736x1824 @ 12.3 Microsoft Surface Pro 4",
  "2778x1284 @ 6.7 Apple iPhone 13 Pro Max",
  "2880x1440 @ 5.7 LG G6",
  "2880x1620 @ 15.6 ASUS UX51VZ",
  "2880x1800 @ 15.4 Apple Retina MacBook Pro 15",
  "2960x1440 @ 5.8 Samsung Galaxy S8",
  "2960x1440 @ 6.2 Samsung Galaxy S8+",
  "3000x2000 @ 13.5 Microsoft Surface Book",
  "3024x1964 @ 14.2 Apple MacBook Pro 14",
  "3040x1440 @ 6.1 Samsung Galaxy S10",
  "3040x1440 @ 6.4 Samsung Galaxy S10+",
  "3072x1920 @ 16 Apple MacBook Pro 16 (2019)",
  "3120x1440 @ 6.1 LG G7",
  "3200x1440 @ 6.8 Xiaomi Mi 11",
  "3200x1800 @ 13.3 Samsung Ativ Q",
  "3240x2160 @ 15 Microsoft Surface Book 2 15",
  "3280x2048 @ 30 NEC MD MD302C6",
  "3440x1440 @ 29 LG UM95",
  "3456x2160 @ 13.4 Dell XPS 13 9310 OLED",
  "3456x2234 @ 16.2 Apple MacBook Pro 16",
  "3840x1600 @ 37.5 Acer XR382CQK",
  "3840x2160 @ 5.5 Sony Z5 Premium",
  "3840x2160 @ 13.3 Lenovo Thinkpad X13 Yoga",
  "3840x2160 @ 23.6 Acer K242HQKbmjdp",
  "3840x2160 @ 28 Lenovo ThinkVision 28",
  "3840x2160 @ 31.5 Asus PQ321",
  "3840x2400 @ 13.4 Dell XPS 13 7390 2-in-1",
  "3840x2560 @ 20 Panasonic Toughpad 4K UT-MB4",
  "3840x2560 @ 28.2 HUAWEI MateView",
  "4096x2160 @ 31 LG 31MU95",
  "4096x2160 @ 36.4 Eizo FDH3601",
  "4096x2304 @ 21.5 Retina iMac 21.5",
  "4200x2800 @ 30.9 Eizo Radiforce RX1270",
  "4480x2520 @ 23.5 Apple 24 iMac",
  "4500x3000 @ 28 Microsoft Surface Studio 2",
  "5120x1440 @ 49 LG 49WL95C-W",
  "5120x2160 @ 34 LG 34WK95U",
  "5120x2880 @ 27 Dell UP2715K, Retina iMac 27",
  "6016x3384 @ 32 Apple Pro Display XDR",
  "6144x3456 @ 31.5 Dell U3224KB",
  "7680x2160 @ 57 Samsung Odyssey Neo G9 (G95NC)",
  "7680x4320 @ 31.5 Dell UP3218K",
  "7680x4320 @ 70 Sharp Aquos 8K LC-70X500",
  "10240x4320 @ 82 Boe LCD prototype",
];

function parseDisplayDataList(list: string[]): DisplayData[] {
  const displayDataList: DisplayData[] = [];
  list.forEach((item) => {
    const parts = item.split("@");
    const resolution = parts[0].trim();
    const matchResult = parts[1].match(/\d+(?:\.\d+)?/);
    const diagonal = matchResult ? parseFloat(matchResult[0]) : 0;
    const brandModel = parts[1]
      .replace(diagonal.toString(), "")
      .trim()
      .split(/\s+/);
    const brand = brandModel[0];
    const model = brandModel.slice(1).join(" ");
    const name = brand + " " + model;
    const resolutionParts = resolution.split("x");
    const horizontalResolution = parseInt(resolutionParts[0].trim());
    const verticalResolution = parseInt(resolutionParts[1].trim());
    displayDataList.push({
      brand,
      name,
      horizontal_resolution: horizontalResolution,
      vertical_resolution: verticalResolution,
      diagonal,
    });
  });
  return displayDataList;
}

export const mockDisplayData: DisplayData[] = parseDisplayDataList(giantList);
