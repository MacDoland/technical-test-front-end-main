// https://tailwindcomponents.com/component/centered-spinner
const LoadingSpinner: React.FC = () => {
  return (
    <div
      role="progressbar"
      aria-valuetext="Loading..."
      aria-busy="true"
      className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin rounded-full border-teal-700 border-8 h-32 w-32">
        <span className="screen-reader-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
