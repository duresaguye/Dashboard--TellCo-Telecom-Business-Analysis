import React from "react";

const HandsetDataTables = () => {
  // Data for the tables
  const top10Handsets = [
    { handset: "Huawei B528S-23A", count: 19752 },
    { handset: "Apple iPhone 6S (A1688)", count: 9419 },
    { handset: "Apple iPhone 6 (A1586)", count: 9023 },
    { handset: "undefined", count: 8987 },
    { handset: "Apple iPhone 7 (A1778)", count: 6326 },
    { handset: "Apple iPhone Se (A1723)", count: 5187 },
    { handset: "Apple iPhone 8 (A1905)", count: 4993 },
    { handset: "Apple iPhone Xr (A2105)", count: 4568 },
    { handset: "Samsung Galaxy S8 (Sm-G950F)", count: 4520 },
    { handset: "Apple iPhone X (A1901)", count: 3813 },
  ];

  const appleHandsets = [
    { handset: "Apple iPhone 6S (A1688)", count: 9419 },
    { handset: "Apple iPhone 6 (A1586)", count: 9023 },
    { handset: "Apple iPhone 7 (A1778)", count: 6326 },
    { handset: "Apple iPhone Se (A1723)", count: 5187 },
    { handset: "Apple iPhone 8 (A1905)", count: 4993 },
  ];

  const samsungHandsets = [
    { handset: "Samsung Galaxy S8 (Sm-G950F)", count: 4520 },
    { handset: "Samsung Galaxy A5 Sm-A520F", count: 3724 },
    { handset: "Samsung Galaxy J5 (Sm-J530)", count: 3696 },
    { handset: "Samsung Galaxy J3 (Sm-J330)", count: 3484 },
    { handset: "Samsung Galaxy S7 (Sm-G930X)", count: 3199 },
  ];

  const huaweiHandsets = [
    { handset: "Huawei B528S-23A", count: 19752 },
    { handset: "Huawei E5180", count: 2079 },
    { handset: "Huawei P20 Lite Huawei Nova 3E", count: 2021 },
    { handset: "Huawei P20", count: 1480 },
    { handset: "Huawei Y6 2018", count: 997 },
  ];

  // Identify Top 5 handsets per top 3 handset manufacturer logic (simulating the Python code)
  const top5HandsetsPerManufacturer = {
    Apple: appleHandsets,
    Samsung: samsungHandsets,
    Huawei: huaweiHandsets,
  };

  // Data for top 3 handset manufacturers
  const top3Manufacturers = [
    { manufacturer: "Apple", count: 59565 },
    { manufacturer: "Samsung", count: 40839 },
    { manufacturer: "Huawei", count: 34423 },
  ];

  // Render Table Function
  interface Handset {
    handset: string;
    count: number;
  }

  interface Manufacturer {
    manufacturer: string;
    count: number;
  }

  const renderTable = (title: string, data: Handset[] | Manufacturer[]) => (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        {title}
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {title.includes("Manufacturer") ? "Handset Manufacturer" : "Handset Type"}
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Count
            </h5>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${
              index === data.length - 1 ? "" : "border-b border-stroke dark:border-dark-3"
            }`}
            key={index}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {'handset' in item ? item.handset : item.manufacturer}
              </p>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: "1rem" }}>
      {/* Top 10 Handsets Used by Customers */}
      {renderTable("Top 10 Handsets Used by Customers", top10Handsets)}

      {/* Top 3 Handset Manufacturers */}
      <div className="mb-10"></div>
      {renderTable("Top 3 Handset Manufacturers", top3Manufacturers)}

      {/* Top 5 Handsets per Manufacturer */}
      <h2 className="mb-10 text-center mt-10 text-lg font-bold"> Top 5 Handsets per Manufacturer</h2>

      {/* Loop through top 5 handsets per manufacturer */}
      {Object.entries(top5HandsetsPerManufacturer).map(([manufacturer, handsets]) => (
        <div key={manufacturer} className="mb-10">
       
          {renderTable(`Top 5 Handsets from ${manufacturer}`, handsets)}
        </div>
      ))}
    </div>
  );
};

export default HandsetDataTables;
