import React, { useState, useEffect } from "react";
import pegawaiJSON from "../../pegawai_12_10_2022.json";
import pegawaiJSON2 from "../../pegawai_17_10_2022.json";

export default function Okt22() {
  const [eduList, setEduList] = useState([]);
  const [pangkatList, setPangkatList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [outList, setOutList] = useState([]);

  let diffPangkat = [];
  let diffUnit = [];
  let diffEdu = [];
  let diffOut = [];

  let loop = 0;

  useEffect(() => {
    console.log("GGGGGZZZZZZZZ");

    compares(pegawaiJSON, pegawaiJSON2);
  }, []);

  const compares = (json1, json2) => {
    console.log("GGGGGGGGG");
    loop = loop + 1;
    for (let i = 0; i < json1.length; i++) {
      let data2 = json2.find((j) => j["NIP"] === json1[i]["NIP"]);
      if (!data2) {
        diffOut.push([json1[i], data2]);
        console.log("Out", json1[i]);
        setOutList(diffOut);
      } else {
        if (json1[i]["Pangkat"] !== data2["Pangkat"]) {
          diffPangkat.push([json1[i], data2]);
          console.log("Pangkat", data2);
          setPangkatList(diffPangkat);
        }
        if (json1[i]["Eselon 2"] !== data2["Eselon 2"]) {
          diffUnit.push([json1[i], data2]);
          console.log("Pindah Unit", data2);
          setUnitList(diffUnit);
        }
        if (json1[i]["Pendidikan Terakhir"] !== data2["Pendidikan Terakhir"]) {
          console.log(i, "AAAAAAA");
          diffEdu.push([json1[i], data2]);
          console.log("Pendidikan", data2);
          setEduList((prev) => [...prev, [i, json1[i], data2]]);
        }
      }
    }
  };

  console.log("EEEEEEE", eduList);
  console.log("GGGGGGAAAA", loop);
  return (
    <div>
      <h4>Perubahan Pendidikan</h4>
      <table>
        <tr>
          <th>NO</th>
          <th>NIM</th>
          <th>Nama</th>
          <th>Sebelum</th>
          <th>Sedudah</th>
        </tr>
        {eduList.map((i, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{i[0]["Nama"]}</td>
            <td>{i[0]["NIM"]}</td>
            <td>{i[0]["Pendidikan Terakhir"]}</td>
            <td>{i[1]["Pendidikan Terakhir"]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
