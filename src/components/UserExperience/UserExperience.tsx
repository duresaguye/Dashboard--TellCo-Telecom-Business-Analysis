import React from "react";

const CustomerMetrics = () => {
    
        const clusterAssignments = [
            { cluster: 1, count: 52877 },
            { cluster: 0, count: 23494 },
            { cluster: 2, count: 13667 },
          ];
        
          const clusterDescriptions = [
            { cluster: 0, avgTcpRetransmission: 944609, avgRtt: 89.97, avgThroughput: 21295.82 },
            { cluster: 1, avgTcpRetransmission: 21631190, avgRtt: 67.72, avgThroughput: 2608.21 },
            { cluster: 2, avgTcpRetransmission: 10978150, avgRtt: 71.06, avgThroughput: 16985.83 },
          ];
    

    return (
        <div className="p-4 md:p-8 min-h-screen">
            <div id="userexperience">
            <h1 className='text-6xl text-center p-4'>User Experience Analysis</h1>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                Aggregating Customer Experience Metrics
            </h1>
            <div className="flex justify-center mb-4 md:mb-6">
                <img
                    src="/images/throughput.png"
                    alt=""
                    className="w-full md:w-1/2 h-auto"
                />
            </div>
            <div className="p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Key Findings</h2>

                <h3 className="text-lg font-semibold mb-2">Wide Variation in Average Throughput</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>The graph reveals a significant variation in average throughput across different handset types.</li>
                    <li>
                        Certain devices consistently achieve higher data transfer speeds compared to others, indicating varying levels of performance.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">High-Performing Handsets</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Handsets like "Huawei P20 Pro" and "One Plus 6T" consistently demonstrate high average throughput.</li>
                    <li>These devices likely offer superior hardware, software optimization, or network connectivity features.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Low-Performing Handsets</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Devices such as "Archos 55S Helium" and "Doro 6050" exhibit relatively low average throughput.</li>
                    <li>This suggests potential limitations in their hardware, software, or compatibility with network infrastructure.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">Implications for Stakeholders and Marketing</h2>

                <h3 className="text-lg font-semibold mb-2">Network Optimization</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        The network operator should investigate factors contributing to the varying throughput across different devices.
                    </li>
                    <li>
                        Actions can include improving signal strength, optimizing network congestion, or addressing compatibility issues with specific devices.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Device Compatibility</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Inform users about the expected performance of different devices on the network to help them make informed purchasing decisions.
                    </li>
                    <li>
                        Manage user expectations regarding data speeds and performance.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Marketing and Sales</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Highlight the network's compatibility with high-performing devices in marketing campaigns.
                    </li>
                    <li>
                        Emphasize superior performance as a selling point for network services.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Device Support</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Provide targeted support for devices with consistently low throughput, including troubleshooting guides and software updates.
                    </li>
                    <li>
                        Offer recommendations for optimizing device settings to improve performance.
                    </li>
                </ul>
            </div>

            <div className="flex justify-center mb-4 md:mb-6">
                <img
                    src="/images/TCP.png"
                    alt="Download Traffic Visualization"
                    className="w-full md:w-1/2 h-auto"
                />
            </div>
            <div className="p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Key Findings</h2>

                <h3 className="text-lg font-semibold mb-2">High Variation in TCP Retransmissions</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>The graph shows a significant variation in the average TCP retransmission rates across different handset types.</li>
                    <li>
                        Some devices experience more retransmissions than others, leading to potential performance issues.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">High Retransmission Devices</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Devices like "Archos 55S Helium," "Doro 6050," and "Internet Techno Series A" exhibit high average TCP retransmission rates.</li>
                    <li>This suggests potential issues such as poor network connectivity, software bugs, or hardware limitations.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Low Retransmission Devices</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Devices like "Huawei P20 Pro" and "One Plus 6T" have lower average retransmission rates.</li>
                    <li>This indicates better network performance and fewer packet losses for these devices.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">Implications for Stakeholders and Marketing</h2>

                <h3 className="text-lg font-semibold mb-2">Network Optimization</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        The network operator should investigate the root causes of high retransmission rates in specific devices.
                    </li>
                    <li>
                        Analysis can help identify areas for network optimization, such as improving signal strength, addressing congestion, or optimizing network protocols.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Device Compatibility</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Inform users about potential performance differences between devices on the network to aid in making informed decisions.
                    </li>
                    <li>Help manage user expectations regarding data speeds and reliability.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Marketing and Sales</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Highlight the network's compatibility with devices that exhibit low retransmission rates in marketing campaigns.
                    </li>
                    <li>
                        Use this as a selling point to emphasize the superior performance of the network services.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Device Support</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Provide targeted support for devices with high retransmission rates, including troubleshooting guides and software updates.
                    </li>
                    <li>Offer recommendations for optimizing device settings to improve performance.</li>
                </ul>
            </div>

            <div className="p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4 md:mb-6 text-center">
                    K-Means Clustering of Customer Experience
                </h1>

                <h2 className="text-lg font-semibold mb-2 md:mb-4">Cluster Assignments</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {clusterAssignments.map((item) => (
                        <li key={item.cluster}>
                            Experience Cluster {item.cluster}: {item.count.toLocaleString()}
                        </li>
                    ))}
                </ul>

                <h2 className="text-lg font-semibold mt-4 md:mt-6 mb-2 md:mb-4">Cluster Descriptions</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 px-4 py-2">Experience Cluster</th>
                                <th className="border border-gray-200 px-4 py-2">Avg TCP Retransmission</th>
                                <th className="border border-gray-200 px-4 py-2">Avg RTT</th>
                                <th className="border border-gray-200 px-4 py-2">Avg Throughput</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clusterDescriptions.map((item) => (
                                <tr key={item.cluster}>
                                    <td className="border border-gray-200 px-4 py-2 text-center">{item.cluster}</td>
                                    <td className="border border-gray-200 px-4 py-2 text-right">{item.avgTcpRetransmission.toLocaleString()}</td>
                                    <td className="border border-gray-200 px-4 py-2 text-right">{item.avgRtt.toFixed(2)}</td>
                                    <td className="border border-gray-200 px-4 py-2 text-right">{item.avgThroughput.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerMetrics;
