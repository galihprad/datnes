import React from "react";
import st from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={st.container}>
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
    </div>
  );
}
