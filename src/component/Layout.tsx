import { useRef, useEffect, useState } from "react";
import Header from "./Header";
import WalletDialouge from "./WalletDialouge";

const Layout = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const handleModel = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleModel);

    return () => {
      document.removeEventListener("mousedown", handleModel);
    };
  }, [modal]);

  return (
    <>
      <Header setModal={setModal} />
      {modal && (
        <div className="w-full h-screen">
          <div className="w-full h-screen absolute z-10 top-0 left-0  bg-black/30" />
          <WalletDialouge ref={ref} />
        </div>
      )}
      <div>{children}</div>
    </>
  );
};

export default Layout;
