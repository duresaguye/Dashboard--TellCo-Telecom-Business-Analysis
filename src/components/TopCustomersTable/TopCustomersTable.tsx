import React from "react";

const TopCustomersTable = () => {
  // Top 10 Satisfied Customers Data
  const topCustomers = [
    {
      msisdn: "3.373456e+10",
      engagementScore: "1.202402e+13",
      experienceScore: "1.197442e+05",
      satisfactionScore: "6.012011e+12",
    },
    {
      msisdn: "3.360168e+10",
      engagementScore: "1.822609e+11",
      experienceScore: "6.427995e+05",
      satisfactionScore: "9.113075e+10",
    },
    {
      msisdn: "3.361489e+10",
      engagementScore: "8.155864e+09",
      experienceScore: "7.076210e+06",
      satisfactionScore: "4.081470e+09",
    },
    {
      msisdn: "3.362578e+10",
      engagementScore: "7.809259e+09",
      experienceScore: "9.070026e+04",
      satisfactionScore: "3.904675e+09",
    },
    {
      msisdn: "3.362632e+10",
      engagementScore: "7.280805e+09",
      experienceScore: "1.880125e+06",
      satisfactionScore: "3.641343e+09",
    },
    {
      msisdn: "3.367588e+10",
      engagementScore: "7.200748e+09",
      experienceScore: "3.949427e+06",
      satisfactionScore: "3.602349e+09",
    },
    {
      msisdn: "3.365973e+10",
      engagementScore: "7.015501e+09",
      experienceScore: "9.400617e+06",
      satisfactionScore: "3.512451e+09",
    },
    {
      msisdn: "3.366646e+10",
      engagementScore: "6.618138e+09",
      experienceScore: "3.191959e+06",
      satisfactionScore: "3.310665e+09",
    },
    {
      msisdn: "3.366471e+10",
      engagementScore: "6.181984e+09",
      experienceScore: "4.740152e+06",
      satisfactionScore: "3.093362e+09",
    },
    {
      msisdn: "3.369879e+10",
      engagementScore: "5.850537e+09",
      experienceScore: "2.041694e+06",
      satisfactionScore: "2.926289e+09",
    },
  ];

  // Linear Regression Model Results
  const modelResults = {
    mse: "3.3893840503634704e-09",
    rSquared: "1.0",
  };

  // K-Means Clustering Results
  const clusteringResults = [
    {
      cluster: "Cluster 0 (Majority Cluster)",
      engagementScore: "-0.003332",
      experienceScore: "0.000018",
      satisfactionScore: "1.76e+08",
    },
    {
      cluster: "Cluster 1 (Minority Cluster)",
      engagementScore: "7.280805e+09",
      experienceScore: "1.880125e+06",
      satisfactionScore: "3.64e+09",
    },
  ];

  return (
    <div className="p-6 mx-auto">
      <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
          Top 10 Satisfied Customers
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-4">
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                MSISDN/Number
              </h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Engagement Score
              </h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Experience Score
              </h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Satisfaction Score
              </h5>
            </div>
          </div>

          {topCustomers.map((customer, key) => (
            <div
              className={`grid grid-cols-1 sm:grid-cols-4 ${
                key === topCustomers.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3.5 px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {customer.msisdn}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {customer.engagementScore}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {customer.experienceScore}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {customer.satisfactionScore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* K-Means Clustering Results */}
      <div className="mt-10 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">K-Means Clustering Results</h2>
        <p className="text-sm mb-4">
          To segment the users based on their engagement and experience scores, K-Means clustering was applied with <b>k=2</b>. The results were as follows:
        </p>

        <div className="space-y-4">
          {clusteringResults.map((result, index) => (
            <div key={index} className="p-4">
              <h3 className="font-semibold">{result.cluster}</h3>
              <p className="text-sm"><b>Engagement Score:</b> {result.engagementScore}</p>
              <p className="text-sm"><b>Experience Score:</b> {result.experienceScore}</p>
              <p className="text-sm"><b>Satisfaction Score:</b> {result.satisfactionScore}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Linear Regression Model Results */}
      <div className="mt-10 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Linear Regression Model Results</h2>
        <p className="text-sm mb-2">
          To predict the satisfaction score of a customer, a Linear Regression model was implemented using engagement and experience scores as features. The dataset was split into training and testing sets (80% for training, 20% for testing).
        </p>
        <p className="text-sm mb-4">
          The performance of the model was evaluated using the Mean Squared Error (MSE) and R-squared values.
        </p>

        <div className="space-y-4">
          <p className="text-sm font-semibold">
            <span className="font-bold">Mean Squared Error (MSE): </span>{modelResults.mse}
          </p>
          <p className="text-sm font-semibold">
            <span className="font-bold">R-squared (R²): </span>{modelResults.rSquared}
          </p>
          <p className="text-sm">
            The R-squared value of 1.0 indicates that the model perfectly predicts the satisfaction score, highlighting that the engagement and experience metrics are highly predictive of overall satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCustomersTable;
