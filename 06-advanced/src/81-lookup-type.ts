namespace tmp {
  interface DownloadedData {
    id: number;
    user: {
      name?: {
        firstName: string;
        lastName: string;
      };
    };
  }

  type id = DownloadedData['id'];
  type name = DownloadedData['user']['name'];
  type userId = DownloadedData['user' | 'id'];
}

// get type from object using type lookup
