import React from 'react';
import { useParams } from 'react-router-dom';
import RecordItem from '../AlbumEndPoint/RecordItem';

const RecordItemPage = () => {
  const { id } = useParams();
  return <RecordItem itemId={id} />;
};

export default RecordItemPage;
