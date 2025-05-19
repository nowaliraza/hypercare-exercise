import { useState, useEffect, useCallback } from "react";
import { useUsers } from "./hooks/useUsers";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import UserCard from "./components/userCard";
import UserCardSkeleton from "./components/userCardSkeleton";
import UserModal from "./components/userModal";
import type { User } from "./types/user";
import constants from "../utils/constants";

export const Users = () => {
  const { users, loading, error } = useUsers();
  const [visibleCount, setVisibleCount] = useState(constants.CHUNK_SIZE);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + constants.LOAD_MORE, users.length)
    );
  }, [users.length]);

  const loaderRef = useInfiniteScroll({
    hasMore: visibleCount < users.length,
    loading,
    onLoadMore: loadMore,
  });

  const handleViewMore = (user: User) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  const isLoadingMore = visibleCount < users.length;

  return (
    <>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-stretch">
        {loading
          ? Array.from({ length: constants.CHUNK_SIZE }).map((_, i) => (
              <UserCardSkeleton key={i} />
            ))
          : users
              .slice(0, visibleCount)
              .map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onViewMore={() => handleViewMore(user)}
                />
              ))}

        {!loading &&
          isLoadingMore &&
          Array.from({ length: constants.SKELETON_COUNT }).map((_, i) => (
            <UserCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {!loading && isLoadingMore && <div ref={loaderRef} className="h-8" />}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Users;
