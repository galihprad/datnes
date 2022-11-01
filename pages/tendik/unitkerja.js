import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import pegawaiJSON from "../../pa_1_11_2022.json";
import styles from "../../styles/Home.module.css";
import { useAppContext } from "utils/global-context";

export default function Home() {
  const [dataJSON, setDataJSON] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const { styleTable } = useAppContext();

  useEffect(() => {
    setDataJSON(pegawaiJSON);
    setShowTable(true);
  }, []);

  const selectPegawai = (data, jenis, unit, status, jenisKelamin) => {
    return (
      (!jenis || data["Jenis"] === jenis) &&
      (!unit || data["Eselon 2"] === unit) &&
      (!status || data["Status"] === status) &&
      (!jenisKelamin || data["Jenis Kelamin"] === jenisKelamin)
    );
  };

  const countPegawai = (dataAll, jenis, unit, status, jenisKelamin) => {
    return (
      dataAll.filter((i) => selectPegawai(i, jenis, unit, status, jenisKelamin))
        .length || " "
    );
  };

  const rowPegawai = (index, units) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{units}</td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "PNS", "Laki-laki") +
            countPegawai(dataJSON, "TENDIK", units, "CPNS", "Laki-laki")}
        </td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "PNS", "Perempuan") +
            countPegawai(dataJSON, "TENDIK", units, "CPNS", "Perempuan")}
        </td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "Kontrak", "Laki-laki")}
        </td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "Kontrak", "Perempuan")}
        </td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "BLU", "Laki-laki")}
        </td>
        <td className="tableNum">
          {countPegawai(dataJSON, "TENDIK", units, "BLU", "Perempuan")}
        </td>

        <td className="tableNum">
          <span className="bolds">
            {countPegawai(dataJSON, "TENDIK", units, 0, 0)}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Datanes</title>
        <meta name="description" content="data unnes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showTable && (
        <main className={styleTable ? styles.main : styles.main2}>
          <h2>Jumlah Tenaga Kependidikan</h2>
          <h2>Menurut Unit Kerja</h2>
          <table className={styleTable ? "table1" : "table2"}>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>Unit Kerja</th>
              <th colSpan={2}>PNS</th>
              <th colSpan={2}>Kontrak</th>
              <th colSpan={2}>BLU</th>
              <th rowSpan={2}>Jumlah</th>
            </tr>
            <tr>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
            </tr>

            {[
              "FIP",
              "FBS",
              "FIS",
              "FMIPA",
              "FT",
              "FIK",
              "FE",
              "FH",
              "PASCASARJANA",
              "LP2M",
              "LP3",
              "BAKK",
              "BUHK",
              "BPK",
              "UPT PERPUSTAKAAN",
              "UPT HUMAS",
              "UPT TIK",
              "UPT PENGEMBANGAN KONSERVASI",
              "UPT KEARSIPAN",
              "BPM",
              "UPP SEMARANG",
              "BADAN PENGEMBANGAN BISNIS",
            ].map((i, index) => rowPegawai(index + 1, i))}
            <tr>
              <td rowSpan={2} colSpan={2}>
                Jumlah
              </td>
              <td className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "PNS", "Laki-laki") +
                    countPegawai(dataJSON, "TENDIK", 0, "CPNS", "Laki-laki")}
                </span>
              </td>
              <td className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "PNS", "Perempuan") +
                    countPegawai(dataJSON, "TENDIK", 0, "CPNS", "Perempuan")}
                </span>
              </td>
              <td className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "Kontrak", "Laki-laki")}
                </span>
              </td>
              <td className="tableNum">
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "Kontrak", "Perempuan")}
                </span>
              </td>
              <td className="tableNum">
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "BLU", "Laki-laki")}
                </span>
              </td>
              <td className="tableNum">
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "BLU", "Perempuan")}
                </span>
              </td>
              <td className="tableNum" rowSpan={2}>
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, 0, 0)}
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableNum" colSpan={2}>
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "PNS", 0) +
                    countPegawai(dataJSON, "TENDIK", 0, "CPNS", 0)}
                </span>
              </td>
              <td className="tableNum" colSpan={2}>
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "Kontrak", 0)}
                </span>
              </td>
              <td className="tableNum" colSpan={2}>
                {" "}
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "BLU", 0)}
                </span>
              </td>
            </tr>
          </table>
        </main>
      )}
    </div>
  );
}
