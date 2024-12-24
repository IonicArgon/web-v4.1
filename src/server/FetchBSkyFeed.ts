'use server';

export type BSkyRecentPost = {
  text: string;
  date: string;
  cursor: string;
  resourceSrc?: string;
  err?: string;
};

// todo: build in the embedded resource src

const fetchBSkyRecentPost = async (): Promise<BSkyRecentPost> => {
  const did = 'did:plc:73qv4d6z27dgvwf5s2wde32u';
  const collection = 'app.bsky.feed.post';

  try {
    const response = await fetch(
      `https://pds.ionicargon.ca/xrpc/com.atproto.repo.listRecords?repo=${did}&collection=${collection}&limit=1`,
      {
        cache: 'force-cache',
        next: {
          revalidate: 900, // 15 minutes
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data && data.records && data.records.length > 0) {
        const record = data.records[0];
        const text = record.value?.text ?? '';
        const date = record.value?.createdAt ?? '';
        const cursor = data.cursor ?? '';

        return {
          text,
          date,
          cursor,
        };
      }
    }

    return {
      text: '',
      date: '',
      cursor: '',
      err: `Error fetching data from recent ${collection} document.`,
    };
  } catch (err) {
    return {
      text: '',
      date: '',
      cursor: '',
      err: (err as Error).message,
    };
  }
};

export default fetchBSkyRecentPost;
