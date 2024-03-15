import { useGeolocation } from "./useGeolocation";

export default function App() {
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();

  function handleClick() {
    getPosition();
  }

  return (
    <div className="container">
      <h2>My Position App</h2>
      <p>
        get your current position Coordinates and a link to your position on map
      </p>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <>
          <p>
            Your GPS position Coordinates are:
            <br /> latitude:{" " + lat}
            <br /> longitude:{" " + lng}
          </p>
          <p>
            See your Position on map by <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            >
              clicking here
            </a>
          </p>
        </>
      )}
    </div>
  );
}
