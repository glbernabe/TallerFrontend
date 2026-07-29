import localFont from "next/font/local";


export const mbCorpoText = localFont({
  src: [
    {
      path: "./MBCorpoSText-Regular-Web.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mb-text",
});

export const mbCorpoTitle = localFont({
  src: [
    {
      path: "./MBCorpoATitle-Regular-Web.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mb-title",
});