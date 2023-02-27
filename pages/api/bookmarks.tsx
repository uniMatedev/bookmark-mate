import { NextApiRequest, NextApiResponse } from 'next';
import bookmarksData from '../../public/bookmarks.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(bookmarksData);
};
