import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAppContext } from "utils/global-context";
import { toPascalCase } from "helper/toPascalCase";
import st from "styles/PerubahanPage.module.css";
import { getMonthName } from "helper/getMonthName";

import pegawaiJSON from "../../pegawai_12_10_2022.json";
// import pegawaiJSON from "../../pegawai.json";
import pegawaiJSON2 from "../../pa_31_10_2022.json";
import pegawaiOutJSON from "../../pna_31_10_2022.json";

export default function PerubahanPegawai() {
  const [eduList, setEduList] = useState([]);
  const [inList, setInList] = useState([]);
  const [jabfungList, setJabfungList] = useState([]);
  const [jabstrukList, setJabstrukList] = useState([]);
  const [outList, setOutList] = useState([]);
  const [pangkatList, setPangkatList] = useState([]);
  const [unitList, setUnitList] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const { styleTable } = useAppContext();

  const router = useRouter();
  const { monthparam } = router.query;

  let diffEdu = [];
  let diffIn = [];
  let diffJabfung = [];
  let diffJabstruk = [];
  let diffOut = [];
  let diffPangkat = [];
  let diffUnit = [];

  useEffect(() => {
    setShowTable(true);
  }, []);

  const compares = (json1, json2) => {
    for (let i = 0; i < json2.length; i++) {
      let dataIn = json1.find((j) => j["NIP"] === json2[i]["NIP"]);
      if (!dataIn) {
        diffIn.push(json2[i]);
        setInList(diffIn);
      }
    }
    for (let i = 0; i < json1.length; i++) {
      let data2 = json2.find((j) => j["NIP"] === json1[i]["NIP"]);
      if (!data2) {
        let dataOut = pegawaiOutJSON.find((j) => j["NIP"] === json1[i]["NIP"]);
        diffOut.push(dataOut);
        setOutList(diffOut);
      } else {
        if (json1[i]["Pangkat"] !== data2["Pangkat"]) {
          diffPangkat.push([json1[i], data2]);
          setPangkatList(diffPangkat);
        }
        if (json1[i]["Eselon 2"] !== data2["Eselon 2"]) {
          diffUnit.push([json1[i], data2]);
          setUnitList(diffUnit);
        }
        if (json1[i]["Pendidikan Terakhir"] !== data2["Pendidikan Terakhir"]) {
          diffEdu.push([json1[i], data2]);
          setEduList(diffEdu);
        }
        if (json1[i]["Jabatan Fungsional"] !== data2["Jabatan Fungsional"]) {
          diffJabfung.push([json1[i], data2]);
          setJabfungList(jabfungList);
        }
        if (json1[i]["Jabatan Struktural"] !== data2["Jabatan Struktural"]) {
          diffJabstruk.push([json1[i], data2]);
          setJabstrukList(jabstrukList);
        }
      }
    }
  };

  const comparison = useMemo(() => {
    compares(pegawaiJSON, pegawaiJSON2);
  }, []);

  return (
    <div className={st.container}>
      <h2>Perubahan Pegawai</h2>
      <h2>
        selama Bulan {monthparam && getMonthName(monthparam[0])}{" "}
        {monthparam && monthparam[1]}
      </h2>
      {showTable && (
        <div>
          {(inList.length || "") && (
            <div>
              <h4 className={st.titleList}>Pegawai Masuk</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {inList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i["Nama"])}</td>
                      <td>{i["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i["Jenis"])} {i["Status"]}
                      </td>
                      <td>{i["Eselon 2"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(outList.length || "") && (
            <div>
              <h4 className={st.titleList}>
                Pegawai Meninggal/Pensiun/Mengundurkan Diri
              </h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {outList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i["Nama"])}</td>
                      <td>{i["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i["Jenis"])} {i["Status"]}
                      </td>
                      <td>{i["Status Kerja"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(eduList.length || "") && (
            <div>
              <h4 className={st.titleList}>Perubahan Pendidikan</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>
                    <th>Sebelum</th>
                    <th>Sedudah</th>
                  </tr>
                </thead>
                <tbody>
                  {eduList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i[0]["Nama"])}</td>
                      <td>{i[0]["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i[0]["Jenis"])} {i[0]["Status"]}
                      </td>
                      <td>{i[0]["Pendidikan Terakhir"]}</td>
                      <td>{i[1]["Pendidikan Terakhir"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(pangkatList.length || "") && (
            <div>
              <h4 className={st.titleList}>Perubahan Pangkat</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>
                    <th>Sebelum</th>
                    <th>Sedudah</th>
                  </tr>
                </thead>
                <tbody>
                  {pangkatList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i[0]["Nama"])}</td>
                      <td>{i[0]["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i[0]["Jenis"])} {i[0]["Status"]}
                      </td>
                      <td>{i[0]["Pangkat"]}</td>
                      <td>{i[1]["Pangkat"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(jabfungList.length || "") && (
            <div>
              <h4 className={st.titleList}>Perubahan Jabatan Fungsional</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>

                    <th>Sebelum</th>
                    <th>Sedudah</th>
                  </tr>
                </thead>
                <tbody>
                  {jabfungList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i[0]["Nama"])}</td>
                      <td>{i[0]["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i[0]["Jenis"])} {i[0]["Status"]}
                      </td>
                      <td>{i[0]["Jabatan Fungsional"]}</td>
                      <td>{i[1]["Jabatan Fungsional"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(jabstrukList.length || "") && (
            <div>
              <h4 className={st.titleList}>Perubahan Jabatan Struktural</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>

                    <th>Sebelum</th>
                    <th>Sedudah</th>
                  </tr>
                </thead>
                <tbody>
                  {jabstrukList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i[0]["Nama"]}</td>
                      <td>{i[0]["NIP"]}</td>
                      <td>{i[0]["Jabatan Struktural"]}</td>
                      <td>{i[1]["Jabatan Struktural"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(unitList.length || "") && (
            <div>
              <h4 className={st.titleList}>Perubahan Unit</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>

                    <th>Sebelum</th>
                    <th>Sedudah</th>
                  </tr>
                </thead>
                <tbody>
                  {unitList.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{toPascalCase(i[0]["Nama"])}</td>
                      <td>{i[0]["NIP"].replace("`", "")}</td>
                      <td>
                        {toPascalCase(i[0]["Jenis"])} {i[0]["Status"]}
                      </td>
                      <td>{i[0]["Eselon 2"]}</td>
                      <td>{i[1]["Eselon 2"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
