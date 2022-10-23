import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: number;
  statusText: string;
  data: unknown;
  error: unknown;
  loading: boolean;
};

export const useHttp = (
  url: string,
  method = 'GET',
  body = null,
  headers = { 'Content-Type': 'application/json' }
): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url, { method, body, headers });
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};
