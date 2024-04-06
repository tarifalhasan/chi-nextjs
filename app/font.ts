import localFont from "next/font/local";

export const neuemachina = localFont({
  src: [
    {
      path: "./font/neuemachina-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--neuemachina",
});
export const pixel = localFont({
  src: [
    {
      path: "./font/PexelGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--pixel",
});
