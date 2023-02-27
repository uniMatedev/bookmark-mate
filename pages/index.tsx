import { useState, useEffect } from 'react';
import { bookmarkManager, BookmarkManager } from '../bookmarkLogic/bookmarkmanager';
interface Bookmark {
  index: number;
  title: string;
  url: string;
  id: number;
  parentId: string;
  dateAddedLocal: string;
  dateAddedUTC: string;
}

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    fetch('/api/bookmarks')
      .then((res) => res.json())
      .then((data) => setBookmarks(data));
  }, []);

  return (
    <div>
      <h1>My Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <a href={bookmark.url}>{bookmark.title}</a>
          </li>
          
        ))}
      </ul>
    </div>
  );
}
