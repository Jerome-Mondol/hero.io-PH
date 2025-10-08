import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import data from '../../data/apps.json'
const appsCard = data.appsCards;

const RatingsChart = ({ appId }) => {
  const selectedApp = appsCard.find(app => app.id === parseInt(appId));
  
  const chartData = selectedApp.ratings.map(rating => ({
    ...rating,
    rating: rating.name,
    count: Math.round(rating.count)
  }));

  const maxCount = Math.max(...chartData.map(item => item.count));
  
  const tickInterval = Math.ceil(maxCount / 4 / 100) * 100;
  const ticks = [0];
  for (let i = tickInterval; i <= maxCount; i += tickInterval) {
    ticks.push(i);
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis 
            type="number" 
            domain={[0, maxCount * 1.1]}
            ticks={ticks}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <YAxis 
            type="category" 
            dataKey="rating" 
            width={80}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value) => [`${value.toLocaleString()} reviews`, 'Count']}
          />
          <Bar 
            dataKey="count" 
            fill="#8884d8" 
            radius={[0, 4, 4, 0]}
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RatingsChart