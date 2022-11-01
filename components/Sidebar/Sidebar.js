import React, { useState } from "react";
import st from "./Sidebar.module.css";
import { useRouter } from "next/router";

import Link from "next/link";
import { useAppContext } from "utils/global-context";
import Button from "unify/Button/Button";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const { setStyleTable } = useAppContext();

  const router = useRouter();

  const activePath = (path) => {
    return router.pathname === path ? st.menuItemActive : st.menuItem;
  };

  return (
    <>
      {showSidebar && (
        <div className={st.container}>
          <Button
            filled
            small
            colors="#00838f"
            handleClick={() => {
              setShowSidebar(false);
              setStyleTable(false);
              setTimeout(() => {
                window.print();
              }, 1000);
              setTimeout(() => {
                setShowSidebar(true);
                setStyleTable(true);
              }, 2000);
            }}
          >
            PRINT
          </Button>
          <Link href="/">
            <h3 className={st.menuItemHead}>Home</h3>
          </Link>
          <h3 className={st.menuItemHead}>Tendik</h3>
          <Link href="/tendik/unitkerja">
            <div className={activePath("/tendik/unitkerja")}>
              Menurut Unit Kerja
            </div>
          </Link>
          <Link href="/tendik/golonganpns">
            <div className={activePath("/tendik/golonganpns")}>
              Menurut Golongan (PNS)
            </div>
          </Link>
          <Link href="/tendik/golongannonpns">
            <div className={activePath("/tendik/golongannonpns")}>
              Menurut Golongan (BLU)
            </div>
          </Link>
          <Link href="/tendik/pendidikan">
            <div className={activePath("/tendik/pendidikan")}>
              Menurut Pendidikan
            </div>
          </Link>
          <h3 className={st.menuItemHead}>Dosen</h3>
          <Link href="/dosen/unitkerja">
            <div className={activePath("/dosen/unitkerja")}>
              Menurut Unit Kerja
            </div>
          </Link>
          <Link href="/dosen/golonganpns">
            <div className={activePath("/dosen/golonganpns")}>
              Menurut Golongan (PNS)
            </div>
          </Link>
          <Link href="/dosen/pendidikan">
            <div className={activePath("/dosen/pendidikan")}>
              Menurut Pendidikan
            </div>
          </Link>
          <Link href="/dosen/jabfung">
            <div className={activePath("/dosen/jabfung")}>
              Jabatan Fungsional
            </div>
          </Link>
          <h3 className={st.menuItemHead}>Perubahan Data</h3>
          <Link href="/perubahan/10/2022">
            <div className={activePath("/perubahan/10/2022")}>Oktober 2022</div>
          </Link>
        </div>
      )}
    </>
  );
}
