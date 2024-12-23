"use client";
import React from "react";
import UserOverview from "../UseOverview/UserOverview";

import UserEngagement from "../UserEngagement/User_Engagement";
import UserExperience from "../UserExperience/UserExperience";
import CustomerSatisfaction from "../Customer/Satisfaction";


const TelcomAnalysis: React.FC = () => {
  return (
    <>
<UserOverview />
      <UserEngagement />
<UserExperience />
<CustomerSatisfaction />

    </>
  );
};

export default TelcomAnalysis;
