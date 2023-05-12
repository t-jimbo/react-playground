import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { RecorderContext } from "@/features/recorder/context";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

export const Page: React.FC = () => {
  const { isRecording, onStart, onStop, srcURL } = useContext(RecorderContext);
  const navigate = useNavigate();

  return (
    <Stack rowGap={2}>
      <Stack direction="row">
        <Button onClick={onStart} disabled={isRecording}>
          Start
        </Button>
        <Button onClick={onStop} disabled={!isRecording}>
          Stop
        </Button>
      </Stack>

      <audio controls src={srcURL} />

      <Stack direction="row" alignItems="center">
        <Link href="/">TOPへ(aタグ)</Link>
        <Button onClick={() => navigate("/")}>TOPへ(react-router)</Button>
      </Stack>
    </Stack>
  );
};

export default Page;
