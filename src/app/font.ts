import localFont from "next/font/local";

export const helveticaBlack = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowText-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const helveticaBold = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowText-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const helveticaExtraBold = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const helveticaExtraLight = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
});

export const helveticaLight = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowText-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
});

export const helveticaMedium = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowText-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
});

export const helveticaRegular = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const helveticaThin = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});
