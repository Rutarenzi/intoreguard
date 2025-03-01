"use client"; // Make sure this component is only client-side
//@ts-nocheck
import { useEffect, useState } from "react";
import HorizontalCard from "@/components/Mine/HorizontalCard";
import { Report } from "@prisma/client";

const Dashboard = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false); // Track mounting to avoid hydration issues

  useEffect(() => {
    // Set mounted to true once the component is rendered on the client
    setHasMounted(true);
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/report/reports");
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasMounted) {
    return <div>Loading...</div>; // Avoid rendering SSR HTML while mounting
  }
  return (
    <div className="text-center w-full pt-20">
      <div className="mx-auto w-[80%] text-white">
        {isLoading ? (
          <div className="text-white">Loading...</div> 
        ) : reports.length === 0 ? (
          <div>No reports available</div>
        ) : (
          reports.map((report) => (
            <HorizontalCard
              imageUrl={report.image}
              reportId= {report.reportId}
              location={report.location}
              key={report.id}
              title={report.title} 
              description={report.description} 
           />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
