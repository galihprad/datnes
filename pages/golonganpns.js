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
        {[
          "IV/d",
          "IV/c",
          "IV/b",
          "IV/a",
          "III/d",
          "III/c",
          "III/b",
          "III/a",
          "II/d",
          "II/c",
          "II/b",
          "II/a",
          "I/d",
          "I/b",
        ].map((gol) => {
          return (
            <>
              <td className="tableNum">
                {countPegawai(
                  pegawaiJSON,
                  "TENDIK",
                  units,
                  "PNS",
                  "Laki-laki",
                  gol
                ) +
                  countPegawai(
                    pegawaiJSON,
                    "TENDIK",
                    units,
                    "CPNS",
                    "Laki-laki",
                    gol
                  )}
              </td>
              <td className="tableNum">
                {countPegawai(
                  pegawaiJSON,
                  "TENDIK",
                  units,
                  "PNS",
                  "Perempuan",
                  gol
                ) +
                  countPegawai(
                    pegawaiJSON,
                    "TENDIK",
                    units,
                    "CPNS",
                    "Perempuan",
                    gol
                  )}
              </td>
            </>
          );
        })}

        <td className="tableNum">
          <span className="bolds">
            {countPegawai(pegawaiJSON, "TENDIK", units, "PNS", 0, 0) +
              countPegawai(pegawaiJSON, "TENDIK", units, "CPNS", 0, 0)}
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
        <table className="table1">
          <tr>
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>Unit Kerja</th>
            <th colSpan={2}>IV/d</th>
            <th colSpan={2}>IV/c</th>
            <th colSpan={2}>IV/b</th>
            <th colSpan={2}>IV/a</th>
            <th colSpan={2}>III/d</th>
            <th colSpan={2}>III/c</th>
            <th colSpan={2}>III/b</th>
            <th colSpan={2}>III/a</th>
            <th colSpan={2}>II/d</th>
            <th colSpan={2}>II/c</th>
            <th colSpan={2}>II/b</th>
            <th colSpan={2}>II/a</th>
            <th colSpan={2}>I/d</th>
            <th colSpan={2}>I/b</th>
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
            <th>P</th> <th>L</th>
            <th>P</th> <th>L</th>
            <th>P</th> <th>L</th>
            <th>P</th> <th>L</th>
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
            {[
              "IV/d",
              "IV/c",
              "IV/b",
              "IV/a",
              "III/d",
              "III/c",
              "III/b",
              "III/a",
              "II/d",
              "II/c",
              "II/b",
              "II/a",
              "I/d",
              "I/b",
            ].map((gol) => {
              return (
                <>
                  <td className="tableNum">
                    <span className="bolds">
                      {countPegawai(
                        pegawaiJSON,
                        "TENDIK",
                        0,
                        "PNS",
                        "Laki-laki",
                        gol
                      ) +
                        countPegawai(
                          pegawaiJSON,
                          "TENDIK",
                          0,
                          "CPNS",
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
                        "PNS",
                        "Perempuan",
                        gol
                      ) +
                        countPegawai(
                          pegawaiJSON,
                          "TENDIK",
                          0,
                          "CPNS",
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
                {countPegawai(pegawaiJSON, "TENDIK", 0, "PNS", 0, 0) +
                  countPegawai(pegawaiJSON, "TENDIK", 0, "CPNS", 0, 0)}
              </span>
            </td>
          </tr>
          <tr>
            {[
              "IV/d",
              "IV/c",
              "IV/b",
              "IV/a",
              "III/d",
              "III/c",
              "III/b",
              "III/a",
              "II/d",
              "II/c",
              "II/b",
              "II/a",
              "I/d",
              "I/b",
            ].map((gol) => {
              return (
                <>
                  <td colSpan={2} className="tableNum">
                    <span className="bolds">
                      {countPegawai(pegawaiJSON, "TENDIK", 0, "PNS", 0, gol) +
                        countPegawai(pegawaiJSON, "TENDIK", 0, "CPNS", 0, gol)}
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
