import React from 'react';
import { LibraryItem } from '../../services/libraryItem';
import { AddButton, Container, Title, Image } from './styled';

const LibrrayItemTile = ({ id, title, item_type }: LibraryItem) => {
  return (
    <Container>
      <AddButton>+</AddButton>
      <Image src={`https://libraryitems.insighttimer-api.net/${id}%2Fpictures%2Ftiny_square_small.jpeg?alt=media`} alt=""/>
      <Title>{title}</Title>
      <span style={{ background: '#181818', color: '#fff', padding: '4px', fontSize: '10px'}}>{item_type}</span>
    </Container>
  )
}

export default LibrrayItemTile;