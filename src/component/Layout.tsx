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
  useEffect(() => {
    if (modal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [modal]);

  return (
    <>
      <header>
        <Header setModal={setModal} />
      </header>
      {modal && (
        <div className="w-full top-0 absolute z-10 h-screen">
          <div className="w-full h-screen absolute z-20 top-0 left-0  bg-black/30" />
          <WalletDialouge ref={ref} setModal={setModal} />
        </div>
      )}
      <div className="mt-16"> {children} </div>
    </>
  );
};

export default Layout;
