namespace tmp {
  interface DownloadedData {
    id: number;
    user?: {
      name?: {
        firstName: string;
        lastName: string;
      };
    };
  }

  const downloadedData: DownloadedData = {
    id: 1,
  };

  const userData = downloadedData.user ?? 'no-data';
  const userData2 = downloadedData.user || 'no-data';
}

// ??
// 1. undefined, null

// ||
// 1. undefined, null, empty, etc.
