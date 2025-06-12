export const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-3 items-center justify-center">
      <p className="text-lg text-gray-700">{message}</p>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};
