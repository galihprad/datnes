import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import pegawaiJSON from "../../pegawai_12_10_2022.json";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const [dataJSON, setDataJSON] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setDataJSON(pegawaiJSON);
    setShowTable(true);
  }, []);

  const selectPegawai = (
    data,
    jenis,
    unit,
    status,
    jenisKelamin,
    golongan,
    pendidikan
  ) => {
    return (
      (!jenis || data["Jenis"] === jenis) &&
      (!unit || data["Eselon 2"] === unit) &&
      (!status || data["Status"] === status) &&
      (!jenisKelamin || data["Jenis Kelamin"] === jenisKelamin) &&
      (!golongan || data["Pangkat"].split("-")[1].split(" ")[1] === golongan) &&
      (!pendidikan || data["Pendidikan Terakhir"] === pendidikan)
    );
  };

  const countPegawai = (
    dataAll,
    jenis,
    unit,
    status,
    jenisKelamin,
    golongan,
    pendidikan
  ) => {
    return (
      dataAll.filter((i) =>
        selectPegawai(
          i,
          jenis,
          unit,
          status,
          jenisKelamin,
          golongan,
          pendidikan
        )
      ).length || ""
    );
  };

  const rowPegawai = (index, units) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{units}</td>
        {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "PNS",
                  "Laki-laki",
                  0,
                  gol
                ) +
                  countPegawai(
                    dataJSON,
                    "TENDIK",
                    units,
                    "CPNS",
                    "Laki-laki",
                    0,
                    gol
                  )}
              </td>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "PNS",
                  "Perempuan",
                  0,
                  gol
                ) +
                  countPegawai(
                    dataJSON,
                    "TENDIK",
                    units,
                    "CPNS",
                    "Perempuan",
                    0,
                    gol
                  )}
              </td>
            </>
          );
        })}
        {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "Kontrak",
                  "Laki-laki",
                  0,
                  gol
                )}
              </td>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "Kontrak",
                  "Perempuan",
                  0,
                  gol
                )}
              </td>
            </>
          );
        })}{" "}
        {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "BLU",
                  "Laki-laki",
                  0,
                  gol
                )}
              </td>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "TENDIK",
                  units,
                  "PNS",
                  "Perempuan",
                  0,
                  gol
                )}
              </td>
            </>
          );
        })}
        <td className="tableNum">
          <span className="bolds">
            {countPegawai(dataJSON, "TENDIK", units, 0, 0, 0)}
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

      <main className={styles.main}>
        <h2>Jumlah Tenaga Kependidikan PNS</h2>
        <h2>Menurut Golongan</h2>
        {showTable && (
          <table className="table1">
            <tr>
              <th rowSpan={3}>No</th>
              <th rowSpan={3}>Unit Kerja</th>
              <th colSpan={14}>PNS</th>
              <th colSpan={14}>Kontrak</th>
              <th colSpan={14}>BLU</th>
              <th rowSpan={3}>Jumlah</th>
            </tr>
            <tr>
              <th colSpan={2}>SD</th>
              <th colSpan={2}>SMP</th>
              <th colSpan={2}>SMA</th>
              <th colSpan={2}>Diploma</th>
              <th colSpan={2}>S1</th>
              <th colSpan={2}>S2</th>
              <th colSpan={2}>S3</th>
              <th colSpan={2}>SD</th>
              <th colSpan={2}>SMP</th>
              <th colSpan={2}>SMA</th>
              <th colSpan={2}>Diploma</th>
              <th colSpan={2}>S1</th>
              <th colSpan={2}>S2</th>
              <th colSpan={2}>S3</th>
              <th colSpan={2}>SD</th>
              <th colSpan={2}>SMP</th>
              <th colSpan={2}>SMA</th>
              <th colSpan={2}>Diploma</th>
              <th colSpan={2}>S1</th>
              <th colSpan={2}>S2</th>
              <th colSpan={2}>S3</th>
            </tr>
            <tr>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th>
              <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
              <th>P</th> <th>L</th>
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
              <td rowSpan={3} colSpan={2}>
                <span className="bolds">Jumlah</span>
              </td>
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "PNS",
                          "Laki-laki",
                          0,
                          gol
                        ) +
                          countPegawai(
                            dataJSON,
                            "TENDIK",
                            0,
                            "CPNS",
                            "Laki-laki",
                            0,
                            gol
                          )}
                      </span>
                    </td>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "PNS",
                          "Perempuan",
                          0,
                          gol
                        ) +
                          countPegawai(
                            dataJSON,
                            "TENDIK",
                            0,
                            "CPNS",
                            "Perempuan",
                            0,
                            gol
                          )}
                      </span>
                    </td>
                  </>
                );
              })}
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "Kontrak",
                          "Laki-laki",
                          0,
                          gol
                        )}
                      </span>
                    </td>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "Kontrak",
                          "Perempuan",
                          0,
                          gol
                        )}
                      </span>
                    </td>
                  </>
                );
              })}{" "}
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "BLU",
                          "Laki-laki",
                          0,
                          gol
                        )}
                      </span>
                    </td>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "BLU",
                          "Perempuan",
                          0,
                          gol
                        )}
                      </span>
                    </td>
                  </>
                );
              })}
              <td rowSpan={3} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, 0, 0, 0, 0)}
                </span>
              </td>
            </tr>
            <tr>
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      <span className="bolds">
                        {countPegawai(dataJSON, "TENDIK", 0, "PNS", 0, 0, gol) +
                          countPegawai(
                            dataJSON,
                            "TENDIK",
                            0,
                            "CPNS",
                            0,
                            0,
                            gol
                          )}
                      </span>
                    </td>
                  </>
                );
              })}
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gols) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "TENDIK",
                          0,
                          "Kontrak",
                          0,
                          0,
                          gols
                        )}
                      </span>
                    </td>
                  </>
                );
              })}{" "}
              {["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"].map((gol) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      {" "}
                      <span className="bolds">
                        {countPegawai(dataJSON, "TENDIK", 0, "BLU", 0, 0, gol)}
                      </span>
                    </td>
                  </>
                );
              })}
              {/* <td rowSpan={3} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "PNS", 0, 0, 0) +
                    countPegawai(dataJSON, "TENDIK", 0, "CPNS", 0, 0, 0)}
                </span>
              </td> */}
            </tr>
            <tr>
              <td colSpan={14} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "PNS", 0, 0, 0) +
                    countPegawai(dataJSON, "TENDIK", 0, "CPNS", 0, 0, 0)}
                </span>
              </td>
              <td colSpan={14} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "Kontrak", 0, 0, 0)}
                </span>
              </td>{" "}
              <td colSpan={14} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "TENDIK", 0, "BLU", 0, 0, 0)}
                </span>
              </td>
            </tr>
          </table>
        )}
      </main>
    </div>
  );
}
