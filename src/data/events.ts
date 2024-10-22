interface Event {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: { yes: string; no: string };
}

export const events: Event[] = [
  {
    id: "1",
    name: "New Zealand to win the 1st Test vs India?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_1e85b0eb-0cd9-4960-ad98-a7a2c634975d.png&w=96&q=75",
    currentPrice: { yes: "7", no: "3" },
  },
  {
    id: "2",
    name: "Bitcoin to be priced at 67822.00 USDT or more at 03:30 PM?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_207fe0ff-6e8a-474a-a762-08ebbf2e36b8.png&w=96&q=75",
    currentPrice: { yes: "5", no: "5" },
  },
  {
    id: "3",
    name: "India to win the 1st Test vs New Zealand?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_4a24f956-01f5-48e0-ae58-e807f4aef5a1.png&w=96&q=75",
    currentPrice: { yes: "3", no: "7" },
  },
  {
    id: "4",
    name: "Manchester United to win against Brentford?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_7226dd5f-2793-4a0b-bc30-c5b00b2cc07d.png&w=96&q=75",
    currentPrice: { yes: "9.5", no: "0.5" },
  },
  {
    id: "5",
    name: "'Sourav Joshi - Birthday Cake' video to have views between 3.361M and 3.566M at 12:00 AM?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_0e5ab7d2-70d3-497d-bf0b-76455ab14364.png&w=96&q=75",
    currentPrice: { yes: "7", no: "3" },
  },
];
