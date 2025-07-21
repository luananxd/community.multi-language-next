"use client";

import "@/assets/catalog.css";
import mockGoods from "~/public/goods.json";
// Types
import type { CartRecord, Good } from "@/types/catalog";
// Components
import MainLayout from "@/layouts/main-layout";
import GoodCard from "@/components/good-card/good-card";
import GoodAddModal from "@/components/good-add-modal/good-add-modal";
// Hooks
import { useState } from "react";

export default function Catalog() {
  const [showGoodAddModal, setShowGoodAddModal] = useState(false);
  const [goodForAdding, setGoodForAdding] = useState<Good | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});

  const handleGoodClick = (good: Good) => {
    setGoodForAdding(good);
    setShowGoodAddModal(true);
  };

  const addGoodToCart = (record: CartRecord) => {
    const _cart = Object.assign({}, cart);

    if (_cart[record.good]) {
      _cart[record.good] += record.count;
    } else {
      _cart[record.good] = record.count;
    }

    setCart(_cart);
    setShowGoodAddModal(false);
  };

  return (
    <MainLayout cart={cart}>
      <div className="goods__list">
        {mockGoods.map((good) => (
          <GoodCard good={good} key={good.id} onGoodAdd={handleGoodClick} />
        ))}

        <GoodAddModal
          good={goodForAdding}
          visible={showGoodAddModal}
          onChoose={addGoodToCart}
          onClose={() => setShowGoodAddModal(false)}
        />
      </div>
    </MainLayout>
  );
}
