import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from '../components/Sidebar';

/**
 * Charts component
 * Displays a line chart showing the fluctuations of COVID-19 cases over time.
 */
const Charts = () => {
  /**
   * Fetch COVID-19 cases data using useQuery hook from react-query.
   * The data is fetched from the disease.sh API.
   */
  const { isLoading, isError, data } = useQuery({
    queryKey: ['casesData'],
    queryFn: () =>
      fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((res) =>
        res.json()
      ),
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

  // Transform the fetched data into an array of objects suitable for the LineChart component
  const casesData = Object.entries(data.cases).map(([date, cases]) => ({
    date,
    cases,
  }));

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">COVID-19 Cases Fluctuations</h1>
        {/* Render the LineChart component */}
        <div className="bg-white shadow-md rounded-md p-4">
          <LineChart width={800} height={400} data={casesData}>
            {/* Define the x-axis */}
            <XAxis dataKey="date" />
            {/* Define the y-axis */}
            <YAxis />
            {/* Add a cartesian grid for better readability */}
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
            {/* Define the line series */}
            <Line type="monotone" dataKey="cases" stroke="#8884d8" />
            {/* Add a tooltip to show data on hover */}
            <Tooltip />
            {/* Add a legend */}
            <Legend />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;