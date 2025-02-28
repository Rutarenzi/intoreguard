import { useState } from "react";
import ReportForm from "./ReportPortal";
import { ReportSubmitted } from "./ReportFormCompleted";

export function ReportWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleStepComplete = async (data: any) => {
    setReportData({ ...reportData, ...data });

    if (currentStep === 3) {
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="rounded-xl  p-8">
      {currentStep === 1 && <ReportForm Completed={handleStepComplete} />}
      {currentStep === 2 && (
        <ReportSubmitted data={reportData} onComplete={handleStepComplete} />
      )}
    </div>
  );
}
