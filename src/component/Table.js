import { Table } from "@mantine/core";
import { useState } from "react";
import { demoData } from "../data";
import "./style.css";

const Table_ = () => {
  const [data] = useState(demoData);

  const rows = data.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        {element["Area Under Cultivation (UOM:Ha(Hectares))"]
          ? element["Area Under Cultivation (UOM:Ha(Hectares))"]
          : 0}
      </Table.Td>
      <Table.Td>{element["Country"] ? element["Country"] : "__"}</Table.Td>
      <Table.Td>{element["Crop Name"] ? element["Crop Name"] : "__"}</Table.Td>
      <Table.Td>
        {element["Crop Production (UOM:t(Tonnes))"]
          ? element["Crop Production (UOM:t(Tonnes))"]
          : 0}
      </Table.Td>
      <Table.Td>{element["Year"] ? element["Year"] : 0}</Table.Td>
      <Table.Td>
        {element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
          ? element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
          : 0}
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="container">
      <h3>Indian Agriculture Dataset</h3>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Area Under Cultivation (UOM:Ha(Hectares))</Table.Th>
            <Table.Th>Country</Table.Th>
            <Table.Th>Crop Name</Table.Th>
            <Table.Th>Crop Production (UOM:t(Tonnes))</Table.Th>
            <Table.Th>Year</Table.Th>
            <Table.Th>Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default Table_;
