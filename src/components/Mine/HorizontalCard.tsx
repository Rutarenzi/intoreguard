"use client"
import Image from 'next/image';
import { FC, MouseEvent, useState } from 'react';

type CardStatus = 'RESOLVED' | 'PENDING' | 'IN_PROGRESS' | 'DISMISSED';

interface HorizontalCardProps {
  imageUrl: string;
  imageAlt?: string;
  reportId?:string;
  title: string;
  location?:string;
  description: string;
  initialStatus?: CardStatus;
  onCtaClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onStatusChange?: (newStatus: CardStatus) => void;
}

const HorizontalCard: FC<HorizontalCardProps> = ({ 
  imageUrl, 
  reportId,
  imageAlt = "Card image", 
  title,
  description, 
  location,
  initialStatus = "PENDING",
  onStatusChange
}) => {
  const [status, setStatus] = useState<CardStatus>(initialStatus);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  
  // Get status color based on current status
  const getStatusColor = (statusValue: CardStatus): string => {
    switch(statusValue) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'DISMISSED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const handleStatusChange = (newStatus: CardStatus) => {
    setStatus(newStatus);
    setIsDropdownOpen(false);
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-md border border-gray-200 mb-5 text-white relative">
      {/* Status dropdown in top right corner */}
      <div className="absolute top-2 right-2 z-50">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)} flex items-center`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-10 w-40 bg-white rounded-md shadow-lg z-20 border border-gray-200">
              <ul className="py-1">
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleStatusChange('IN_PROGRESS')}
                  >
                    In Progress
                  </button>
                </li>
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleStatusChange('DISMISSED')}
                  >
                    Dismissed
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Image container */}
      <div className="sm:w-1/5 h-48 sm:h-auto relative">
        <Image
         // src={imageUrl || "https://media.istockphoto.com/id/92398325/photo/firefighter-spraying-water-at-a-house-fire.jpg?s=612x612&w=0&k=20&c=OJVBn_VmM62uS7txwoBS8l-BsNhsW1uDK-nycykbGXc="}
         src={imageUrl}
         alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content container */}
      <div className="sm:w-1/5 p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm font-bold text-white mb-1">ID: {reportId}</p>
          <p className="text-sm font-bold text-white mb-1">Title: {title}</p>         
        </div>
      </div>
      <div className="sm:w-3/5 p-4 sm:p-6 text-left"> 
        <div>
          <p className="text-white mt-3">
          {
            description
          }</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;