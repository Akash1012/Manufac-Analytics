import Table_ from "./component/Table";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <>
      <MantineProvider>
        <Table_ />
      </MantineProvider>
    </>
  );
};

export default App;
