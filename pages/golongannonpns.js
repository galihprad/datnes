import Head from "next/head";
import Image from "next/image";
import pegawaiJSON from "../pegawai_12_10_2022.json";
import styles from "../styles/Home.module.css";

export default function Home() {
  const selectPegawai = (data, jenis, unit, status, jenisKelamin, golongan) => {
    return (
      (!jenis || data["Jenis"] === jenis) &&
      (!unit || data["Eselon 2"] === unit) &&
      (!status || data["Status"] === status) &&
      (!jenisKelamin || data["Jenis Kelamin"] === jenisKelamin) &&
      (!golongan || data["Pangkat"].split("-")[1].split(" ")[1] === golongan)
    );
  };

  const countPegawai = (
    dataAll,
    jenis,
    unit,
    status,
    jenisKelamin,
    golongan
  ) => {
    return (
      dataAll.filter((i) =>
        selectPegawai(i, jenis, unit, status, jenisKelamin, golongan)
      ).length || ""
    );
  };

  const rowPegawai = (index, units) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{units}</td>
        {["3b", "3a", "2d", "2c", "2b", "2a", "1d"].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  pegawaiJSON,
                  "TENDIK",
                  units,
                  "BLU",
                  "Laki-laki",
                  gol
                )}
              </td>
              <td className="tableNum">
                {countPegawai(
                  pegawaiJSON,
                  "TENDIK",
                  units,
                  "BLU",
                  "Perempuan",
                  gol
                )}
              </td>
            </>
          );
        })}

        <td className="tableNum">
          <span className="bolds">
            {countPegawai(pegawaiJSON, "TENDIK", units, "BLU", 0, 0)}
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
        <h2>Jumlah Tenaga Kependidikan Pegawai Tetap non PNS</h2>
        <h2>Menurut Golongan</h2>
        <table className="table1">
          <tr>
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>Unit Kerja</th>
            <th colSpan={2}>3b</th>
            <th colSpan={2}>3a</th>
            <th colSpan={2}>2d</th>
            <th colSpan={2}>2c</th>
            <th colSpan={2}>2b</th>
            <th colSpan={2}>2a</th>
            <th colSpan={2}>1d</th>
            <th rowSpan={2}>Jumlah</th>
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
          ].map((i, index) => rowPegawai(index + 1, i))}
          <tr>
            <td rowSpan={2} colSpan={2}>
              <span className="bolds">Jumlah</span>
            </td>
            {["3b", "3a", "2d", "2c", "2b", "2a", "1d"].map((gol) => {
              return (
                <>
                  <td className="tableNum">
                    <span className="bolds">
                      {countPegawai(
                        pegawaiJSON,
                        "TENDIK",
                        0,
                        "BLU",
                        "Laki-laki",
                        gol
                      )}
                    </span>
                  </td>
                  <td className="tableNum">
                    <span className="bolds">
                      {countPegawai(
                        pegawaiJSON,
                        "TENDIK",
                        0,
                        "BLU",
                        "Perempuan",
                        gol
                      )}
                    </span>
                  </td>
                </>
              );
            })}
            <td rowSpan={2} className="tableNum">
              <span className="bolds">
                {countPegawai(pegawaiJSON, "TENDIK", 0, "BLU", 0, 0)}
              </span>
            </td>
          </tr>
          <tr>
            {["3b", "3a", "2d", "2c", "2b", "2a", "1d"].map((gol) => {
              return (
                <>
                  <td colSpan={2} className="tableNum">
                    <span className="bolds">
                      {countPegawai(pegawaiJSON, "TENDIK", 0, "BLU", 0, gol)}
                    </span>
                  </td>
                </>
              );
            })}
          </tr>
        </table>
      </main>
    </div>
  );
}
