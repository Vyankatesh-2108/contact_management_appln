import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Country } from '../types/Contact';
import 'leaflet/dist/leaflet.css';
import Sidebar from '../components/Sidebar';

/**
 * Maps component
 * Displays a map with markers for each country, showing COVID-19 cases information.
 */
const Maps = () => {
  /**
   * Fetch countries data using useQuery hook from react-query.
   * The data is fetched from the disease.sh API.
   * @type {Object} queryResult - The result of the useQuery hook.
   * @property {boolean} isLoading - Indicates if the data is being fetched.
   * @property {boolean} isError - Indicates if an error occurred during data fetching.
   * @property {Country[]} data - The fetched countries data.
   */
  const { isLoading, isError, data } = useQuery<Country[]>({
    queryKey: ['countriesData'],
    queryFn: () =>
      fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json()),
  });

  // Display loading state while data is being fetched
  if (isLoading)
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-lg font-bold">Loading...</div>
        </div>
      </div>
    );

  // Display error state if data fetching fails
  if (isError)
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-lg font-bold text-red-500">Error fetching data.</div>
        </div>
      </div>
    );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">COVID-19 Cases by Country</h1>
        {/* Render the MapContainer component */}
        <div className="bg-white shadow-md rounded-md p-4">
          <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px' }}>
            {/* Add the TileLayer component for the map tiles */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Map through the countries data and render a Marker for each country */}
            {data?.map((country: Country) => (
              <Marker
                key={country.countryInfo._id}
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                {/* Add a Popup to display country-specific COVID-19 cases information */}
                <Popup>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold">{country.country}</h2>
                    <p>Active Cases: {country.active}</p>
                    <p>Recovered Cases: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Maps;