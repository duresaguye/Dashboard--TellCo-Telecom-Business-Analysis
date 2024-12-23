import React from "react";
import TopCustomersTable from "../TopCustomersTable/TopCustomersTable";
import Image from 'next/image';



const CustomerSatisfaction = () => {
  const calculations = [
    {
      title: "Engagement Score Calculation",
      description: `
        Engagement scores were assigned to each user based on the Euclidean distance 
        between the user's engagement data point and the centroid of the less engaged cluster (cluster 1 from the initial K-Means clustering).
      `,
      details: `
        The Euclidean distance formula was used to calculate the difference between each user’s 
        engagement metrics and the centroid of cluster 1. This measure reflects how far or close 
        a user is from the least engaged cluster.
      `,
    },
    {
      title: "Experience Score Calculation",
      description: `
        Experience scores were calculated for each user based on the Euclidean distance between 
        the user's experience metrics and the centroid of the worst experience cluster (cluster 0).
      `,
      details: `
        This is calculated similarly, considering metrics such as TCP retransmissions, RTT, and throughput.
      `,
    },
  ];

  return (
    <div className="p-6 ">

      <div id="UserSatisfaction">
      <h1 className='text-6xl text-center p-4'>User Satisfaction Analysis</h1>
      </div>
      <h1 className="text-2xl font-bold ">
        User Score Calculations
      </h1>
      {calculations.map((calc, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {calc.title}
          </h2>
          <p className="text-gray-600 mb-4">{calc.description}</p>
          <p className="text-gray-600">{calc.details}</p>
        </div>
      ))}
      <div className="p-4 rounded-lg ">
    <h1 className="text-lg font-semibold mb-2 text-gray-800">Engagement VS Experience Score Analysis</h1>
    <div className="flex mb-6">
                <Image 
                    src="/images/EngVSEx.png"
                    alt="Engagement vs Experience Score Distribution"
                    className="w-1/2 h-auto"
                />
            </div>
    <p className="text-gray-600">
        The Engagement Score distribution is heavily skewed towards the left, indicating a majority of scores concentrated in the lower range. 
        The majority of scores fall within the range of 0 to 50, with very few scores exceeding 50. 
    </p>
    <p className="text-gray-600">
        The Experience Score distribution also exhibits a leftward skew, although less pronounced than the Engagement Score distribution. 
        The majority of scores are clustered within the range of -1 to 1, with a smaller number of scores falling below -1 and above 1.
    </p>
    <h2 className="text-lg font-semibold mb-2 text-gray-800">Key Observations</h2>
    <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Users demonstrate generally low engagement with the product or service.</li>
        <li>Users are generally satisfied with the product or service, but there is potential for improvement.</li>
    </ul>
    <h2 className="text-lg font-semibold mb-2 text-gray-800">Recommendations</h2>
    <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Identify and address the factors contributing to low engagement. This could involve enhancing the product or service's appeal, relevance, or user-friendliness.</li>
        <li>Identify and address the factors driving dissatisfaction to improve user experience. This could involve enhancing the product or service's reliability, efficiency, or customer-centricity.</li>
    </ul>
</div>
<TopCustomersTable />
    </div>
  );
};

export default CustomerSatisfaction;
