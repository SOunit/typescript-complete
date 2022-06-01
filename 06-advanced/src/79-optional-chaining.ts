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

  console.log(downloadedData.user?.name?.firstName);
}

// Optional Chaining
// 1. if undefined, return undefined
// 2. if data, return data
