const UserCardSkeleton = () => (
  <div className="rounded-2xl shadow-lg bg-white flex flex-col items-center overflow-hidden h-full w-full max-w-xs mx-auto">
    <div className="w-full bg-blue-300 h-32 flex justify-center items-end relative animate-pulse">
      <div className="absolute -bottom-12">
        <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200" />
      </div>
    </div>
    <div className="pt-16 pb-6 px-4 flex flex-col items-center w-full flex-1">
      <div className="h-5 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-10 w-28 bg-gray-200 rounded mt-4 animate-pulse" />
    </div>
  </div>
);

export default UserCardSkeleton;
