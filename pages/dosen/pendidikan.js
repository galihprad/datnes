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
        {["S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "DOSEN",
                  units,
                  "PNS",
                  "Laki-laki",
                  0,
                  gol
                ) +
                  countPegawai(
                    dataJSON,
                    "DOSEN",
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
                  "DOSEN",
                  units,
                  "PNS",
                  "Perempuan",
                  0,
                  gol
                ) +
                  countPegawai(
                    dataJSON,
                    "DOSEN",
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
        {["S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "DOSEN",
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
                  "DOSEN",
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
        {["S2", "S3"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  dataJSON,
                  "DOSEN",
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
                  "DOSEN",
                  units,
                  "BLU",
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
            {countPegawai(dataJSON, "DOSEN", units, 0, 0, 0)}
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
        <main className={styles.main}>
          <h2>Jumlah Dosen</h2>
          <h2>Menurut Pendidikan</h2>
          <table className="table1">
            <tr>
              <th rowSpan={3}>No</th>
              <th rowSpan={3}>Unit Kerja</th>
              <th colSpan={4}>PNS</th>
              <th colSpan={4}>Kontrak</th>
              <th colSpan={4}>BLU</th>
              <th rowSpan={3}>Jumlah</th>
            </tr>
            <tr>
              <th colSpan={2}>S2</th>
              <th colSpan={2}>S3</th>

              <th colSpan={2}>S2</th>
              <th colSpan={2}>S3</th>

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
              "UPP SEMARANG",
            ].map((i, index) => rowPegawai(index + 1, i))}
            <tr>
              <td rowSpan={3} colSpan={2}>
                <span className="bolds">Jumlah</span>
              </td>
              {["S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "DOSEN",
                          0,
                          "PNS",
                          "Laki-laki",
                          0,
                          gol
                        ) +
                          countPegawai(
                            dataJSON,
                            "DOSEN",
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
                          "DOSEN",
                          0,
                          "PNS",
                          "Perempuan",
                          0,
                          gol
                        ) +
                          countPegawai(
                            dataJSON,
                            "DOSEN",
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
              {["S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "DOSEN",
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
                          "DOSEN",
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
              {["S2", "S3"].map((gol) => {
                return (
                  <>
                    <td className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "DOSEN",
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
                          "DOSEN",
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
                  {countPegawai(dataJSON, "DOSEN", 0, 0, 0, 0, 0)}
                </span>
              </td>
            </tr>
            <tr>
              {["S2", "S3"].map((gol) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      <span className="bolds">
                        {countPegawai(dataJSON, "DOSEN", 0, "PNS", 0, 0, gol) +
                          countPegawai(dataJSON, "DOSEN", 0, "CPNS", 0, 0, gol)}
                      </span>
                    </td>
                  </>
                );
              })}
              {["S2", "S3"].map((gols) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      <span className="bolds">
                        {countPegawai(
                          dataJSON,
                          "DOSEN",
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
              {["S2", "S3"].map((gol) => {
                return (
                  <>
                    <td colSpan={2} className="tableNum">
                      {" "}
                      <span className="bolds">
                        {countPegawai(dataJSON, "DOSEN", 0, "BLU", 0, 0, gol)}
                      </span>
                    </td>
                  </>
                );
              })}
              {/* <td rowSpan={3} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "DOSEN", 0, "PNS", 0, 0, 0) +
                    countPegawai(dataJSON, "DOSEN", 0, "CPNS", 0, 0, 0)}
                </span>
              </td> */}
            </tr>
            <tr>
              <td colSpan={4} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "DOSEN", 0, "PNS", 0, 0, 0) +
                    countPegawai(dataJSON, "DOSEN", 0, "CPNS", 0, 0, 0)}
                </span>
              </td>
              <td colSpan={4} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "DOSEN", 0, "Kontrak", 0, 0, 0)}
                </span>
              </td>{" "}
              <td colSpan={4} className="tableNum">
                <span className="bolds">
                  {countPegawai(dataJSON, "DOSEN", 0, "BLU", 0, 0, 0)}
                </span>
              </td>
            </tr>
          </table>
        </main>
      )}
    </div>
  );
}
