import React from 'react';
import ClusterAnalysis from '../ClusterAnalysis/ClusterAnalysis';
import UsersData from '../UsersData/UsersData';
import Image from 'next/image';

const BySessionFrequency = [
    { MSISDN: '3.362632e+10', session_frequency: 18, total_duration: 8791927.0, total_download: 7.301517e+09, total_upload: 669650721.0, total_traffic: 7.971167e+09 },
    { MSISDN: '3.361489e+10', session_frequency: 17, total_duration: 9966898.0, total_download: 8.156743e+09, total_upload: 689483001.0, total_traffic: 8.846226e+09 },
    { MSISDN: '3.362578e+10', session_frequency: 17, total_duration: 18553754.0, total_download: 7.770043e+09, total_upload: 729577380.0, total_traffic: 8.499621e+09 },
    { MSISDN: '3.365973e+10', session_frequency: 16, total_duration: 4035428.0, total_download: 7.081602e+09, total_upload: 624260321.0, total_traffic: 7.705863e+09 },
    { MSISDN: '3.367588e+10', session_frequency: 15, total_duration: 4865947.0, total_download: 7.309542e+09, total_upload: 581568792.0, total_traffic: 7.891111e+09 },
    { MSISDN: '3.376054e+10', session_frequency: 15, total_duration: 9279434.0, total_download: 7.811295e+09, total_upload: 703478581.0, total_traffic: 8.514774e+09 },
    { MSISDN: '3.366716e+10', session_frequency: 13, total_duration: 8744914.0, total_download: 5.052068e+09, total_upload: 566326364.0, total_traffic: 5.618394e+09 },
    { MSISDN: '3.360313e+10', session_frequency: 12, total_duration: 6287761.0, total_download: 4.540607e+09, total_upload: 435587631.0, total_traffic: 4.976195e+09 },
    { MSISDN: '3.360452e+10', session_frequency: 12, total_duration: 5207990.0, total_download: 5.096079e+09, total_upload: 391775856.0, total_traffic: 5.487855e+09 },
    { MSISDN: '3.362708e+10', session_frequency: 12, total_duration: 4703516.0, total_download: 5.309479e+09, total_upload: 445251947.0, total_traffic: 5.754731e+09 }
];

const ByTotalDuration = [
    { MSISDN: '3.362578e+10', session_frequency: 17, total_duration: 18553754.0, total_download: 7.770043e+09, total_upload: 729577380.0, total_traffic: 8.499621e+09 },
    { MSISDN: '3.361489e+10', session_frequency: 17, total_duration: 9966898.0, total_download: 8.156743e+09, total_upload: 689483001.0, total_traffic: 8.846226e+09 },
    { MSISDN: '3.376054e+10', session_frequency: 15, total_duration: 9279434.0, total_download: 7.811295e+09, total_upload: 703478581.0, total_traffic: 8.514774e+09 },
    { MSISDN: '3.362632e+10', session_frequency: 18, total_duration: 8791927.0, total_download: 7.301517e+09, total_upload: 669650721.0, total_traffic: 7.971167e+09 },
    { MSISDN: '3.366716e+10', session_frequency: 13, total_duration: 8744914.0, total_download: 5.052068e+09, total_upload: 566326364.0, total_traffic: 5.618394e+09 },
    { MSISDN: '3.366284e+10', session_frequency: 9, total_duration: 6614270.0, total_download: 3.593674e+09, total_upload: 406424372.0, total_traffic: 4.000098e+09 },
    { MSISDN: '3.366469e+10', session_frequency: 9, total_duration: 6288730.0, total_download: 5.279827e+09, total_upload: 402180804.0, total_traffic: 5.682007e+09 },
    { MSISDN: '3.360313e+10', session_frequency: 12, total_duration: 6287761.0, total_download: 4.540607e+09, total_upload: 435587631.0, total_traffic: 4.976195e+09 },
    { MSISDN: '3.366746e+10', session_frequency: 6, total_duration: 5649882.0, total_download: 2.334299e+09, total_upload: 266222647.0, total_traffic: 2.600522e+09 },
    { MSISDN: '3.376041e+10', session_frequency: 12, total_duration: 5321667.0, total_download: 6.610852e+09, total_upload: 521518890.0, total_traffic: 7.132371e+09 }
];

const ByTotalTraffic = [
    { MSISDN: '3.361489e+10', session_frequency: 17, total_duration: 9966898.0, total_download: 8.156743e+09, total_upload: 689483001.0, total_traffic: 8.846226e+09 },
    { MSISDN: '3.376054e+10', session_frequency: 15, total_duration: 9279434.0, total_download: 7.811295e+09, total_upload: 703478581.0, total_traffic: 8.514774e+09 },
    { MSISDN: '3.362578e+10', session_frequency: 17, total_duration: 18553754.0, total_download: 7.770043e+09, total_upload: 729577380.0, total_traffic: 8.499621e+09 },
    { MSISDN: '3.362632e+10', session_frequency: 18, total_duration: 8791927.0, total_download: 7.301517e+09, total_upload: 669650721.0, total_traffic: 7.971167e+09 },
    { MSISDN: '3.367588e+10', session_frequency: 15, total_duration: 4865947.0, total_download: 7.309542e+09, total_upload: 581568792.0, total_traffic: 7.891111e+09 },
    { MSISDN: '3.365973e+10', session_frequency: 16, total_duration: 4035428.0, total_download: 7.081602e+09, total_upload: 624260321.0, total_traffic: 7.705863e+09 },
    { MSISDN: '3.366646e+10', session_frequency: 11, total_duration: 4536757.0, total_download: 6.903440e+09, total_upload: 405060976.0, total_traffic: 7.308501e+09 },
    { MSISDN: '3.376041e+10', session_frequency: 12, total_duration: 5321667.0, total_download: 6.610852e+09, total_upload: 521518890.0, total_traffic: 7.132371e+09 },
    { MSISDN: '3.366471e+10', session_frequency: 11, total_duration: 2927785.0, total_download: 6.400774e+09, total_upload: 471244453.0, total_traffic: 6.872018e+09 },
    { MSISDN: '3.369879e+10', session_frequency: 11, total_duration: 5169128.0, total_download: 6.010556e+09, total_upload: 530343105.0, total_traffic: 6.540899e+09 }
];

const renderTable = (title: string, data: any[]) => (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card mb-6">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">{title}</h4>
        <div className="flex flex-col">
            <div className="grid grid-cols-6 sm:grid-cols-6">
                <div className="px-2 pb-3.5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">MSISDN</h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">Session Frequency</h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">Total Duration</h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">Total Download</h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">Total Upload</h5>
                </div>
                <div className="px-2 pb-3.5 text-center">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">Total Traffic</h5>
                </div>
            </div>
            {data.map((entry, index) => (
                <div className={`grid grid-cols-6 sm:grid-cols-6 ${index === data.length - 1 ? "" : "border-b border-stroke dark:border-dark-3"}`} key={index}>
                    <div className="flex items-center gap-3.5 px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.MSISDN}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.session_frequency}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.total_duration}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.total_download}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.total_upload}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-4">
                        <p className="font-medium text-dark dark:text-white">{entry.total_traffic}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function User_Engagement() {
    return (
        <div className="p-4">
            <div id='userengagement'> 
                <h1 className='text-6xl text-center p-4'>User Engagement Analysis</h1>
            </div>
            <div className="text-2xl font-bold mb-6">Customer Engagement Data</div>
            {renderTable("By Session Frequency", BySessionFrequency)}
            {renderTable("By Total Duration", ByTotalDuration)}
            {renderTable("By Total Traffic", ByTotalTraffic)}
            <ClusterAnalysis />
            <UsersData />
        </div>
    );
}
