import type { FC } from "react";
import type { UserCardProps } from "../types/user";

const UserCard: FC<UserCardProps> = ({ user, onViewMore }) => (
  <div className="rounded-2xl shadow-lg bg-white flex flex-col items-center overflow-hidden h-full w-full max-w-xs mx-auto">
    <div className="w-full bg-blue-500 h-32 flex justify-center items-end relative">
      <div className="absolute -bottom-12">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center overflow-hidden">
          <img
            src={user.avatar}
            alt={`${user.firstname} ${user.lastname}`}
            className="w-full h-full object-cover aspect-square"
            style={{ minWidth: 0, minHeight: 0 }}
          />
        </div>
      </div>
    </div>
    <div className="pt-16 pb-6 px-4 flex flex-col items-center w-full flex-1">
      <h2 className="font-semibold text-lg">
        {user.firstname} {user.lastname}
      </h2>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
        onClick={onViewMore}
      >
        View More
      </button>
    </div>
  </div>
);

export default UserCard;
