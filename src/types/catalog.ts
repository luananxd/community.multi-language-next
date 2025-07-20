export interface Good {
  id: number;
  img: string;
  title: string;
  description: {
    en: string;
    ru: string;
    ar: string;
  };
  price: {
    usd: number;
    rub: number;
    aed: number;
  };
  unit: string;
}

export interface CartRecord {
  good: string; // JSON
  count: number;
}
