// ✅ Function to generate a placeholder SVG (base64-encoded)
export function GeneratePlaceholder(title) {
  const gradients = [
    ["#2563EB", "#1D4ED8"], // blue gradient
    ["#16A34A", "#15803D"], // green gradient
    ["#EA580C", "#C2410C"], // orange gradient
    ["#DB2777", "#BE185D"], // pink gradient
    ["#7C3AED", "#6D28D9"], // purple gradient
  ];
  const [color1, color2] = gradients[title.length % gradients.length];
  
   // ✅ Split title into multiple lines (max 30 chars per line, word-safe)
  const words = title.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > 30) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });
  if (currentLine.trim() !== "") lines.push(currentLine.trim());

  // ✅ Build <tspan> elements for each line
  const tspans = lines
    .map((line, i) => {
      const dy = i === 0 ? "0" : "1.2em"; // spacing between lines
      return `<tspan x="50%" dy="${dy}">${line.replace(/&/g, "&amp;")}</tspan>`;
    })
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="100%" stop-color="${color2}" />
        </linearGradient>
      </defs>
      <!-- Rounded rectangle background -->
      <rect width="800" height="500" rx="24" fill="url(#grad)" />
      <!-- Subtle overlay pattern -->
      <rect width="800" height="500" rx="24" fill="rgba(255,255,255,0.05)" />
      <!-- Title text -->
      <text
        x="50%"
        y="50%"
        dy=".3em"
        text-anchor="middle"
        font-family="Hind Siliguri, Inter, sans-serif"
        font-weight="600"
        font-size="40"
        fill="#FFFFFF"
        style="paint-order: stroke; stroke: rgba(0,0,0,0.2); stroke-width: 2px;"
      >
        ${tspans}
      </text>
      <!-- Decorative corner accent -->
      <circle cx="60" cy="440" r="40" fill="rgba(255,255,255,0.1)" />
      <circle cx="740" cy="60" r="30" fill="rgba(255,255,255,0.1)" />

       <!-- ✅ Watermark / Initials -->
      <text
        x="95%"
        y="93%"
        text-anchor="end"
        font-family="Inter, sans-serif"
        font-size="32"
        font-weight="600"
        fill="rgba(255,255,255,0.15)"
      >
        MSI
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
