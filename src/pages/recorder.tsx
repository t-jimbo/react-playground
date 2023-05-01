import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export const Page: React.FC = () => {
  const [recorder, setRecorder] = useState<MediaRecorder | null>();
  const [recording, setReconding] = useState(false);
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    (async () => setRecorder(await init()))();
  }, []);
  if (!recorder) return <div>audio/webm is not supported</div>;

  const handlerStart = () => {
    recorder.start();
    setReconding(true);
  };

  const handleStop = () => {
    recorder.stop();
    setReconding(false);
  };

  recorder.addEventListener("dataavailable", (e) => {
    setSrc(URL.createObjectURL(e.data));
  });

  return (
    <Stack>
      <Stack direction="row">
        <Button onClick={handlerStart} disabled={recording}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!recording}>
          Stop
        </Button>
      </Stack>

      <audio controls src={src} />
    </Stack>
  );
};

export default Page;

const init = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  if (!MediaRecorder.isTypeSupported("audio/webm")) {
    console.warn("audio/webm is not supported");
    return null;
  }
  return new MediaRecorder(stream, {
    mimeType: "audio/webm",
  });
};
