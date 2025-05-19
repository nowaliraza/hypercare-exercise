import type { FC } from "react";
import type { UserModalProps } from "../types/user";

const UserModal: FC<UserModalProps> = ({ user, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl sm:w-4/5 md:w-3/4 lg:w-2/3 relative flex flex-col pointer-events-auto max-h-[90vh] overflow-y-auto">
      <div className="bg-blue-500 h-20 rounded-t-2xl flex flex-col items-center justify-end relative">
        <button
          className="absolute top-3 right-3 text-white text-2xl cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <img
            src={user.avatar}
            alt={`${user.firstname} ${user.lastname}`}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover bg-white"
          />
        </div>
      </div>
      <div className="pt-16 px-4 sm:px-8 flex flex-col items-center">
        <h2 className="font-semibold text-xl sm:text-2xl text-center">
          {user.firstname} {user.lastname}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base text-center mb-6">
          ({user.role})
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">Username</span>
            <span className="text-base break-all">{user.username}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">Email</span>
            <span className="text-base break-all">{user.email}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">Role</span>
            <span className="text-base">{user.role}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">Join Date</span>
            <span className="text-base">{user.join_date}</span>
          </div>
        </div>
        <div className="w-full mb-4">
          <span className="font-bold text-sm text-gray-600">Description</span>
          <p className="text-gray-700 mt-1">{user.description}</p>
        </div>
      </div>
      <div className="flex justify-end items-center px-4 sm:px-8 pb-6">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default UserModal;
