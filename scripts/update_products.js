const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../app/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update Product type
content = content.replace(
  /image: string;\n\s+heroAdjectives: string\[\];/,
  "image: string;\n  heroImage: string;\n  aboutImage: string;\n  heroAdjectives: string[];"
);

// We need an array of high quality unsplash images to use if local images aren't good enough
const heroImages = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop", // landscape luxury room
  "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop", // landscape natural light
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", // landscape house interior
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop", // landscape modern
];

const aboutImages = [
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop", // portrait elegant curtains
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop", // portrait room corner
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1964&auto=format&fit=crop", // portrait modern decor
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop", // portrait interior
];

let heroIndex = 0;
let aboutIndex = 0;

content = content.replace(/image:\s*("[^"]+"),/g, (match, imageStr) => {
  const hImage = heroImages[heroIndex % heroImages.length];
  const aImage = aboutImages[aboutIndex % aboutImages.length];
  
  heroIndex++;
  aboutIndex++;

  return `image: ${imageStr},\n    heroImage: "${hImage}",\n    aboutImage: "${aImage}",`;
});

fs.writeFileSync(filePath, content);
console.log("Updated products.ts");
