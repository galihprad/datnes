import React, { useState } from "react";
import st from "./Sidebar.module.css";
import Link from "next/link";
import { useAppContext } from "utils/global-context";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const { setStyleTable } = useAppContext();

  return (
    <>
      {showSidebar && (
        <div className={st.container}>
          <button
            onClick={() => {
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
          </button>
          <Link href="/">
            <h3 className={st.menuItem}>Home</h3>
          </Link>
          <h3 className={st.menuItem}>Tendik</h3>
          <Link href="/tendik/unitkerja">
            <div className={st.menuItem}>Menurut Unit Kerja</div>
          </Link>
          <Link href="/tendik/golonganpns">
            <div className={st.menuItem}>Menurut Golongan (PNS)</div>
          </Link>
          <Link href="/tendik/golongannonpns">
            <div className={st.menuItem}>Menurut Golongan (BLU)</div>
          </Link>
          <Link href="/tendik/pendidikan">
            <div className={st.menuItem}>Menurut Pendidikan</div>
          </Link>
          <h3 className={st.menuItem}>Dosen</h3>
          <Link href="/dosen/unitkerja">
            <div className={st.menuItem}>Menurut Unit Kerja</div>
          </Link>
          <Link href="/dosen/golonganpns">
            <div className={st.menuItem}>Menurut Golongan (PNS)</div>
          </Link>
          <Link href="/dosen/pendidikan">
            <div className={st.menuItem}>Menurut Pendidikan</div>
          </Link>
          <Link href="/dosen/jabfung">
            <div className={st.menuItem}>Jabatan Fungsional</div>
          </Link>
          <h3 className={st.menuItem}>Perubahan Data</h3>
          <Link href="/perubahan/okt22">
            <div className={st.menuItem}>Oktober 2022</div>
          </Link>
        </div>
      )}
    </>
  );
}
