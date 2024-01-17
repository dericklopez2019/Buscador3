import { useLottie } from "lottie-react";
import * as loading from "./loading.json";

const Loading = () => {
  const options = {
    animationData: loading.default,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full overflow-hidden">
        <div style={{ width: "20%", height: "20%" }}>{View}</div>
      </div>
    </>
  );
};

export default Loading;