import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import viteLogo from "../../public/vite.svg";
import reactLogo from "@/assets/react.svg";
import "../logo.css";

const Page: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Typography variant="h1" fontWeight="bold" fontSize="3.2em">
        Vite + React
      </Typography>
      <Stack p={4} alignItems="center" rowGap={2}>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Stack>
      <Typography color="#888">
        Click on the Vite and React logos to learn more
      </Typography>
    </Stack>
  );
};

export default Page;
