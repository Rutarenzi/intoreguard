import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { IncidentLevel }from "@prisma/client"



export async function POST(request: Request){
    try{
       const {
        reportId,
        type,
        incidentCategory,
        title,
        description,
        location,
        latitude,
        longitude,
        image,
        status
       } = await request.json();

       const submit = await prisma.report.create({
        data: {
          reportId,
          type: type as IncidentLevel,
          title,
          description,
          incidentCategory,
          location,
          latitude: latitude || null,
          longitude: longitude || null,
          image: image || null,
          status: status || "PENDING",
        },
      });
      return NextResponse.json({
        success: true,
        reportId: submit.reportId,
        message: "submitted successfully",
      });
    }catch(error: any){
        //console.error("Error creating report:", error);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to submit report",
          },
          { status: 500 }
        ); 
    }

}
