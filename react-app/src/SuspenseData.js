import React from "react";
import { Audio } from "react-loader-spinner";

const Prospect = React.lazy(() => import("./UseEffectHook"));

const SuspenseData = () => {
  return (
    <React.Suspense
      fallback=<Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    >
      <div>
        <Prospect />
      </div>
    </React.Suspense>
  );
};

export default SuspenseData;
