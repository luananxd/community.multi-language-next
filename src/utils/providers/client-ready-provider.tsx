"use client";

import { createContext, useContext, useState, useEffect, use } from "react";

const ClientReadyContext = createContext<boolean>(false);

export function ClientReadyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Симулируем задержку для имитации загрузки данных или инициализации клиента
    setTimeout(() => setReady(true), 1000);
  });

  return (
    <ClientReadyContext.Provider value={ready}>
      {children}
    </ClientReadyContext.Provider>
  );
}

export function useClientReady() {
  return useContext(ClientReadyContext);
}
