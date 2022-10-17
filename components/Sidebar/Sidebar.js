import React from "react";
import st from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={st.container}>
      <Link href="/">
        <div className={st.menuItem}>Home</div>
      </Link>
      <div className={st.menuItem}>Tendik</div>
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
      <div className={st.menuItem}>Dosen</div>
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
