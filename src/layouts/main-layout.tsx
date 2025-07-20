import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface IProps {
  children: React.ReactNode;
  cart: Record<string, number>;
}

export default function MainLayout({ children, cart }: IProps) {
  return (
    <>
      <Header cart={cart} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
