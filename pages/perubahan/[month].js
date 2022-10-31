import React, { useMemo, useState, useEffect } from "react";
import pegawaiJSON from "../../pegawai_12_10_2022.json";
// import pegawaiJSON from "../../pegawai.json";
import pegawaiJSON2 from "../../pa_31_10_2022.json";
import pegawaiOutJSON from "../../pna_31_10_2022.json";
import { useAppContext } from "utils/global-context";
import { toPascalCase } from "helper/toPascalCase";

export default function Okt22() {
  const [eduList, setEduList] = useState([]);
  const [pangkatList, setPangkatList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [outList, setOutList] = useState([]);
  const [inList, setInList] = useState([]);

  const [jabfungList, setJabfungList] = useState([]);
  const [jabstrukList, setJabstrukList] = useState([]);
  const { styleTable } = useAppContext();

  const [showTable, setShowTable] = useState(false);

  let diffPangkat = [];
  let diffUnit = [];
  let diffEdu = [];
  let diffJabfung = [];
  let diffJabstruk = [];

  let diffOut = [];
  let diffIn = [];

  let loop = 0;

  useEffect(() => {
    setShowTable(true);
  }, []);

  const compares = (json1, json2) => {
    for (let i = 0; i < json2.length; i++) {
      let dataz = json1.find((j) => j["NIP"] === json2[i]["NIP"]);
      if (!dataz) {
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
    <div>
      {showTable && (
        <>
          {" "}
          {(inList.length || "") && (
            <div>
              <h4>Pegawai Masuk</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Unit</th>
                  {/* <th>Sedudah</th> */}
                </tr>
                {inList.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{toPascalCase(i["Nama"])}</td>
                    <td>{i["NIP"].replace("`", "")}</td>
                    <td>
                      {toPascalCase(i["Jenis"])} {i["Status"]}
                    </td>
                    <td>{i["Eselon 2"]}</td>
                    {/* <td>{i[1]["Pangkat"]}</td> */}
                  </tr>
                ))}
              </table>
            </div>
          )}
          {(eduList.length || "") && (
            <div>
              <h4>Perubahan Pendidikan</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>
                  <th>Sebelum</th>
                  <th>Sedudah</th>
                </tr>
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
              </table>
            </div>
          )}
          {(pangkatList.length || "") && (
            <div>
              <h4>Perubahan Pangkat</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Sebelum</th>
                  <th>Sedudah</th>
                </tr>
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
              </table>
            </div>
          )}
          {(jabfungList.length || "") && (
            <div>
              <h4>Perubahan Jabatan Fungsional</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Sebelum</th>
                  <th>Sedudah</th>
                </tr>
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
              </table>
            </div>
          )}
          {(jabstrukList.length || "") && (
            <div>
              <h4>Perubahan Jabatan Struktural</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Sebelum</th>
                  <th>Sedudah</th>
                </tr>
                {jabstrukList.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i[0]["Nama"]}</td>
                    <td>{i[0]["NIP"]}</td>
                    <td>{i[0]["Jabatan Struktural"]}</td>
                    <td>{i[1]["Jabatan Struktural"]}</td>
                  </tr>
                ))}
              </table>
            </div>
          )}
          {(unitList.length || "") && (
            <div>
              <h4>Perubahan Unit</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Sebelum</th>
                  <th>Sedudah</th>
                </tr>
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
              </table>
            </div>
          )}
          {(outList.length || "") && (
            <div>
              <h4>Pegawai Meninggal/Pensiun/Mengundurkan Diri</h4>
              <table className={styleTable ? "table1" : "table2"}>
                <tr>
                  <th>NO</th>
                  <th>Nama</th>
                  <th>NIP</th>
                  <th>Status</th>

                  <th>Keterangan</th>
                  {/* <th>Sedudah</th> */}
                </tr>
                {outList.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{toPascalCase(i["Nama"])}</td>
                    <td>{i["NIP"].replace("`", "")}</td>
                    <td>
                      {toPascalCase(i["Jenis"])} {i["Status"]}
                    </td>
                    <td>{i["Status Kerja"]}</td>
                    {/* <td>{i[1]["Pangkat"]}</td> */}
                  </tr>
                ))}
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
