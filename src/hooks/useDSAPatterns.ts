'use client';

import { useState, useEffect } from 'react';

interface Pattern {
  id: number;
  name: string;
  usage: string;
  data_structures: string[];
  sample_problems: string[];
  visual_example: any;
}

interface DSAPatternsData {
  document_info: {
    title: string;
    publisher: string;
    website: string;
    codes: string[];
    tagline: string;
  };
  disclaimer: string;
  patterns: Pattern[];
  company_info: any;
}

export function useDSAPatterns() {
  const [patternsData, setPatternsData] = useState<DSAPatternsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        const response = await fetch('/complete-coding-patterns.json');
        if (!response.ok) {
          throw new Error('Failed to fetch patterns data');
        }
        const data = await response.json();
        setPatternsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPatterns();
  }, []);

  return { patternsData, loading, error };
}