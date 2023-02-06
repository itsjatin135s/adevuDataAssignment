import React from 'react';
import { ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { month: 'Jan 2019', uv: 5, Review_Score: 2, Avg_Hotel_Response_bool: 2 },
    { month: 'Feb 2019', uv: 2, Review_Score: 9, Avg_Hotel_Response_bool: 6 },
    { month: 'Mar 2019', uv: 8, Review_Score: 8, Avg_Hotel_Response_bool: 3 },
    { month: 'Apr 2019', uv: 4, Review_Score: 3, Avg_Hotel_Response_bool: 1 },
    { month: 'May 2019', uv: 6, Review_Score: 4, Avg_Hotel_Response_bool: 3 },
    { month: 'Jun 2019', uv: 2, Review_Score: 8, Avg_Hotel_Response_bool: 7 },
    { month: 'Jul 2019', uv: 5, Review_Score: 9, Avg_Hotel_Response_bool: 5 },
    { month: 'Aug 2019', uv: 5, Review_Score: 10, Avg_Hotel_Response_bool: 8 },
    { month: 'Sep 2019', uv: 5, Review_Score: 6, Avg_Hotel_Response_bool: 5 },
    { month: 'Oct 2019', uv: 5, Review_Score: 3, Avg_Hotel_Response_bool: 2 },
    { month: 'Nov 2019', uv: 5, Review_Score: 10, Avg_Hotel_Response_bool: 8 },

];

const LineAreaComposedChart = () => (
    <ComposedChart width={1800} height={800} data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Review_Score" stroke="#82ca9d" />
        <Area type="monotone" dataKey="Avg_Hotel_Response_bool" fill="#8884d8" stroke="#8884d8" />
    </ComposedChart>
);

export default LineAreaComposedChart;
