import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import HandsetTable from "../HandsetTable/HandSettable";
import Image from 'next/image';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Dashboard = () => {
    const marketingRecommendations = [
        'Focus promotions on the top 10 handsets.',
        'Collaborate with leading manufacturers to boost customer engagement.',
        'Emphasize value-added services for popular handsets to enhance customer retention.',
    ];

    const appUsageData = {
        labels: ['Social Media', 'YouTube', 'Others'],
        datasets: [
            {
                label: 'App Usage',
                data: [55, 30, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="container mx-auto p-4">
             {/* Report Introduction */}
      <section style={{ padding: "1rem", borderRadius: "8px" }}>
        <h2>Introduction</h2>
        <p>
          This report analyzes telecom user data to provide actionable insights into user behavior,
          engagement, experience, and satisfaction. It is structured into four key areas:
        </p>
        <h3 style={{ marginBottom: "1rem" }}>Table of Contents</h3>
        <ol style={{ paddingLeft: "1.5rem", lineHeight: "1.6" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>User Overview Analysis:</strong> Examines session data to understand customer
            activity and handset preferences.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>User Engagement Analysis:</strong> Analyzes usage patterns to identify
            high-frequency users and peak consumption trends.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Experience Analytics:</strong> Evaluates network performance and handset
            characteristics, using clustering techniques to segment users by experience.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Satisfaction Analysis:</strong> Investigates the relationship between network
            performance and user satisfaction to identify improvement areas.
          </li>
        </ol>
        <p>
          These insights guide strategies to optimize service quality, enhance customer experience,
          and drive business growth.
        </p>

        {/* Task 1 */}
        <div id='userOverview'>
        <h1 className='text-6xl text-center p-4'>User Overview Analysis</h1>
            <p>
                The User Overview Analysis focuses on understanding customer activity and handset
                preferences. By analyzing session data, we can identify popular handsets, usage patterns,
                and key metrics for engagement.
            </p>
        </div>
       
        <h4>1. Handset Usage Analysis</h4>
        <HandsetTable />
            {/* Marketing Recommendations */}
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Marketing Team Recommendations</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {marketingRecommendations.map((item, index) => (
                        <li key={index} className="">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Application Usage Overview */}
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Application Usage Overview</h2>
                <h3 className="text-lg font-semibold mb-2">Metrics:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li className="">Number of xDR Sessions</li>
                    <li className="">Session Duration</li>
                    <li className="">Total Data (DL + UL)</li>
                </ul>
                <div className="w-full h-72">
                    <Pie data={appUsageData} />
                </div>
            </div>

            {/* Exploratory Data Analysis (EDA) */}
            <div className="">
                <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-6 mb-48">
                  
                    <div className="w-full lg:w-1/2 h-64 rounded-lg mb-34">
                        <Image src="/images/EdaBarChart.png" alt="EDA Bar Chart" className="" width={500} height={300}/>
                      
                        <div className="p-4 rounded-lg">
                            <h1 className="text-lg font-semibold mb-2 ">
                                The above bar graph shows the relationship between uploads, downloads, duration, and data volumes.
                            </h1>
                                {/* Bar Chart 

                            <h2 className="text-lg font-semibold mb-2 ">Key Recommendations:</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Optimize for Shorter Interactions:</strong> Focus on quick, engaging user interactions as most are short-lived. Consider time-limited promotions for frequent, smaller interactions.
                                </li>
                                <li>
                                    <strong>Improve Download/Upload Efficiency:</strong> Enhance network efficiency for small downloads/uploads, which are most common, by offering data-saving features.
                                </li>
                                <li>
                                    <strong>Target High Data Consumers:</strong> Provide specialized plans for high data users, who consume large volumes, to retain and engage them.
                                </li>
                                <li>
                                    <strong>Enhance Network for Large Files:</strong> Address network efficiency for large file transfers by reducing latency and speeding up uploads/downloads.
                                </li>
                                <li>
                                    <strong>Promote Data Management:</strong> Introduce tools for users to track and manage data consumption, with options for optimizing their usage.
                                </li>
                            </ul>
                             */}
                        </div>
                       
                    </div>

                   
                    <div className="w-full lg:w-1/2 h-64 rounded-lg">
                        <div className="w-full h-64 rounded-lg ">
                            <Image src="/images/Youtube.png" alt="YouTube Scatter Plot" className="" />
                           
                            <div className="p-4 rounded-lg">
                                <h1 className="text-lg font-semibold mb-2 ">
                                    The scatter plot analysis reveals a strong correlation between YouTube downloads and total data volume.
                                </h1>
                                  {/* Scatter Plot 
                                <h2 className="text-lg font-semibold mb-2 ">Key Recommendations:</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Leverage Application-Specific Segmentation:</strong> Tailor data plans based on usage patterns for applications like YouTube, Netflix, and Gaming. <strong>(This analysis highlights the importance of understanding data consumption by application.)</strong>
                                    </li>
                                    <li>
                                        <strong>Partner with Key Content Providers:</strong> Collaborate with platforms like YouTube, Netflix, and gaming providers for exclusive offers and bundled services. <strong>(Partnerships can enhance customer value and drive revenue.)</strong>
                                    </li>
                                    <li>
                                        <strong>Educate Users on Data Management:</strong> Provide tips and tools for users to manage data usage across all applications, including options for optimizing streaming quality and Wi-Fi usage. <strong>(Empowering users with data management tools improves customer satisfaction.)</strong>
                                    </li>
                                    <li>
                                        <strong>Optimize Network for High-Traffic Applications:</strong> Enhance network capacity and performance to ensure smooth usage for data-intensive applications like YouTube, Netflix, and gaming. <strong>(Prioritizing network performance for key applications improves user experience.)</strong>
                                    </li>
                                </ul>
                                */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional EDA Section */}
            <div className="p-6 ">
                <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-6 mb-34">
                  
                    <div className="w-full lg:w-1/2 h-64 rounded-lg mb-34 ">
                        <Image src="/images/PCA.png" alt="PCA Chart" className="" />

                         
                        <div className="p-4 rounded-lg">
                            <h1 className="text-lg font-semibold  ">
                                PCA analysis reveals distinct user segments based on data consumption patterns, with Social Media and YouTube usage being dominant factors.
                            </h1>
                             {/* PCA Chart 
                            <h2 className="text-lg font-semibold mb-2 ">Key Recommendations:</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Leverage PCA-based Segmentation:</strong> Utilize PCA to identify user clusters and tailor data plans and promotions to their specific usage patterns. <strong>(PCA reveals distinct segments with unique data consumption characteristics.)</strong>
                                </li>
                                <li>
                                    <strong>Prioritize Social Media and YouTube:</strong> Offer bundled data plans and promotions that prioritize Social Media and YouTube usage to cater to the majority of users. <strong>(Social Media and YouTube are dominant drivers of data consumption.)</strong>
                                </li>
                                <li>
                                    <strong>Target High-Value Segments:</strong> Develop targeted campaigns and promotions for users who engage heavily in Gaming and Netflix, as they represent a significant revenue opportunity. <strong>(Users with high session durations and engagement in data-intensive applications are valuable segments.)</strong>
                                </li>
                                <li>
                                    <strong>Optimize Network for High-Traffic Applications:</strong> Enhance network capacity and performance to ensure smooth usage for data-intensive applications like YouTube, Netflix, and Gaming. <strong>(Optimizing network performance for key applications improves user experience and satisfaction.)</strong>
                                </li>
                            </ul>
                                */}
                        </div>
                    
                    </div>
                         
                    
                    <div className="w-full lg:w-1/2 h-64 mb-34 rounded-lg">
                        <div className="w-full h-64 rounded-lg ">
                            <Image src="/images/Correlation.png" alt="Correlation Matrix" className="" />
                         
                            <div className="p-4 rounded-lg">
                                <h1 className="text-lg font-semibold mb-2 ">
                                    The correlation matrix analysis reveals a strong correlation between data-intensive applications like YouTube, Netflix, and Gaming.
                                </h1>
                                   {/* Correlation Matrix 
                                <h2 className="text-lg font-semibold mb-2 ">Key Recommendations:</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Bundle Data Plans:</strong> Offer bundled data plans that include generous allowances for multiple data-intensive applications (e.g., YouTube, Netflix, Gaming) to cater to the usage patterns of heavy data consumers. <strong>(This analysis highlights the high correlation between usage of data-intensive applications.)</strong>
                                    </li>
                                    <li>
                                        <strong>Leverage Application-Specific Segmentation:</strong> Tailor data plans based on usage patterns for applications like YouTube, Netflix, and Gaming. <strong>(Understanding usage patterns enables targeted and personalized offerings.)</strong>
                                    </li>
                                    <li>
                                        <strong>Partner with Key Content Providers:</strong> Collaborate with platforms like YouTube, Netflix, and gaming providers for exclusive offers and bundled services. <strong>(Partnerships can enhance customer value and drive revenue.)</strong>
                                    </li>
                                    <li>
                                        <strong>Educate Users on Data Management:</strong> Provide tips and tools for users to manage data usage across all applications, including options for optimizing streaming quality and Wi-Fi usage. <strong>(Empowering users with data management tools improves customer satisfaction.)</strong>
                                    </li>
                                    <li>
                                        <strong>Optimize Network for High-Traffic Applications:</strong> Prioritize network capacity and performance to ensure smooth usage for data-intensive applications like YouTube, Netflix, and gaming. <strong>(Prioritizing key applications improves user experience and network efficiency.)</strong>
                                    </li>
                                </ul>
                                  */}
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Dashboard;
