import { Suspense, lazy } from "react";
import loadingImg from "./assets/images.png";
const Users = lazy(() => import("./users"));

const CenteredImageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <img
      src={loadingImg}
      alt="Loading..."
      className="w-32 h-32 object-contain"
    />
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<CenteredImageFallback />}>
      <Users />
    </Suspense>
  );
};

export default App;
