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
      path: "./font/trafika_sans_regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--pixel",
});
