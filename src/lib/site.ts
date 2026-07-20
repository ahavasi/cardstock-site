export const EMAIL = "andre.havasi@icloud.com";

export const NOTIFY_HREF =
  `mailto:${EMAIL}` +
  "?subject=" +
  encodeURIComponent("Notify me when CardOps launches") +
  "&body=" +
  encodeURIComponent(
    "I run a table at shows and want to know when CardOps hits the App Store.",
  );

export const SUPPORT_HREF = `mailto:${EMAIL}`;
