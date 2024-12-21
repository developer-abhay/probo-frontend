export interface EVENT_TYPE {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: { yes: string; no: string };
  activeTraders: number;
  info: string;
}

export const events: EVENT_TYPE[] = [
  {
    id: "1",
    name: "New Zealand to win the 1st Test vs India?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_1e85b0eb-0cd9-4960-ad98-a7a2c634975d.png&w=96&q=75",
    currentPrice: { yes: "7", no: "3" },
    activeTraders: 500,
    info: "Form (Last 5 Games): U.P. - W W L L L | Bengal - L L L W W",
  },
  {
    id: "2",
    name: "Bitcoin to be priced at 67822.00 USDT or more at 03:30 PM?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_207fe0ff-6e8a-474a-a762-08ebbf2e36b8.png&w=96&q=75",
    currentPrice: { yes: "5", no: "5" },
    activeTraders: 500,
    info: "Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.",
  },
  {
    id: "3",
    name: "India to win the 1st Test vs New Zealand?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_4a24f956-01f5-48e0-ae58-e807f4aef5a1.png&w=96&q=75",
    currentPrice: { yes: "3", no: "7" },
    activeTraders: 500,
    info: "Form (Last 5 Games): Jaipur - W W L W W | Haryana - L L W W L",
  },
  {
    id: "4",
    name: "Manchester United to win against Brentford?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_7226dd5f-2793-4a0b-bc30-c5b00b2cc07d.png&w=96&q=75",
    currentPrice: { yes: "9.5", no: "0.5" },
    activeTraders: 500,
    info: "Open price at expiry time as displayed on the source of truth will be considered.",
  },
  {
    id: "5",
    name: "'Sourav Joshi - Birthday Cake' video to have views between 3.361M and 3.566M at 12:00 AM?",
    imageUrl:
      "https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_0e5ab7d2-70d3-497d-bf0b-76455ab14364.png&w=96&q=75",
    currentPrice: { yes: "7", no: "3" },
    activeTraders: 500,
    info: "Etna Bada Bomb Le Liya 😳 Kunali Ne video premiered on October 24.",
  },
];
