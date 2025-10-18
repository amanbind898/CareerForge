import { useEffect, useRef, useState } from 'react';
import { ResumeData } from '@/types/resume';

const AUTO_SAVE_KEY = 'careerforge_resume_data';
const AUTO_SAVE_DELAY = 1000; // 1 second delay after user stops typing

export function useAutoSave(data: ResumeData, setData: React.Dispatch<React.SetStateAction<ResumeData>>) {
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialLoadRef = useRef(false);

  // Load saved data on component mount
  useEffect(() => {
    if (!initialLoadRef.current) {
      try {
        const savedData = localStorage.getItem(AUTO_SAVE_KEY);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          // Only load if it's not the default empty data
          if (parsedData.personalInfo.name || parsedData.education.length > 0) {
            setData(parsedData);
            setSaveStatus('saved');
          }
        }
      } catch (error) {
        console.error('Failed to load saved resume data:', error);
      }
      initialLoadRef.current = true;
    }
  }, [setData]);

  // Auto-save data when it changes
  useEffect(() => {
    if (!initialLoadRef.current) return; // Don't save during initial load

    setSaveStatus('unsaved');

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout for auto-save
    timeoutRef.current = setTimeout(() => {
      try {
        setSaveStatus('saving');
        localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(data));
        setSaveStatus('saved');
      } catch (error) {
        console.error('Failed to auto-save resume data:', error);
        setSaveStatus('unsaved');
      }
    }, AUTO_SAVE_DELAY);

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data]);

  // Manual save function
  const saveNow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    try {
      setSaveStatus('saving');
      localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(data));
      setSaveStatus('saved');
    } catch (error) {
      console.error('Failed to save resume data:', error);
      setSaveStatus('unsaved');
    }
  };

  // Clear saved data
  const clearSavedData = () => {
    try {
      localStorage.removeItem(AUTO_SAVE_KEY);
      setSaveStatus('saved');
    } catch (error) {
      console.error('Failed to clear saved data:', error);
    }
  };

  // Check if there's saved data
  const hasSavedData = () => {
    try {
      const savedData = localStorage.getItem(AUTO_SAVE_KEY);
      return savedData !== null;
    } catch {
      return false;
    }
  };

  return {
    saveStatus,
    saveNow,
    clearSavedData,
    hasSavedData
  };
}
