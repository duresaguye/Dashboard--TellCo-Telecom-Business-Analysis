import React from 'react';

const ClusterAnalysis = () => {
    return (
        <div className="p-4 rounded-lg">
            <h1 className="text-lg font-semibold mb-2 text-gray-800">
                Cluster Analysis Results
            </h1>

            <p className="text-gray-600 mb-4">
                Computed the minimum, maximum, average, and total metrics (non-normalized) for each cluster. Visualized cluster characteristics using charts.
            </p>

            <h2 className="text-lg font-semibold mb-2 text-gray-800">Interpretation of Results</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                    <strong>Session Frequency</strong>
                    <ul className="list-disc ml-4">
                        <li>Cluster 0: Low session frequency overall with a minimal total sum. Represents occasional or light users.</li>
                        <li>Cluster 1: Moderate session frequency with a higher average and total compared to Cluster 0, suggesting medium engagement.</li>
                        <li>Cluster 2: High session frequency with a significant maximum value (18). Likely heavy users or frequent visitors.</li>
                    </ul>
                </li>
                <li>
                    <strong>Total Duration</strong>
                    <ul className="list-disc ml-4">
                        <li>Cluster 0: Lowest average session duration but a consistent range, indicating short but regular usage.</li>
                        <li>Cluster 1: Moderate duration across sessions with a higher total, suggesting longer user engagement than Cluster 0.</li>
                        <li>Cluster 2: Exceptionally high maximum duration, with a significantly higher mean and sum. This group represents the heaviest users, likely with sustained engagement.</li>
                    </ul>
                </li>
                <li>
                    <strong>Total Traffic</strong>
                    <ul className="list-disc ml-4">
                        <li>Cluster 0: Lowest traffic metrics overall, corresponding to light users.</li>
                        <li>Cluster 1: Medium traffic levels with consistent engagement, indicating regular, moderately intensive usage.</li>
                        <li>Cluster 2: Significantly high total and maximum traffic, driven by heavy users generating substantial bandwidth usage.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-lg font-semibold mb-2 text-gray-800">Visual Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                    <img src="/images/seassional.png" alt="Session Frequency by Cluster" className="w-full max-w-md" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/duration.png" alt="Total Duration by Cluster" className="w-full max-w-md" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/traffic.png" alt="Total Traffic by Cluster" className="w-full max-w-md" />
                </div>
            </div>

            <p className="text-gray-600">
                Cluster 0: Light users with minimal session frequency, duration, and traffic.
            </p>
            <p className="text-gray-600">
                Cluster 1: Moderate users with balanced engagement metrics.
            </p>
            <p className="text-gray-600">
                Cluster 2: Heavy users dominating in session frequency, duration, and traffic.
            </p>

        </div>
    );
};

export default ClusterAnalysis;