"use client"
import { useState, useCallback } from "react";

const REPORT_TYPES = [
    "Theft",
    "Fire Outbreak",
    "Medical Emergency",
    "Natural Disaster",
    "Violence",
    "Other",
  ] as const;
  type ReportType = "EMERGENCY" | "NON_EMERGENCY";
  interface ReportFormProps {
    onComplete: (data: any) => void;
  }

const ReportForm=()=>{
    return(
      <div>

      </div>
    )
}

export default ReportForm