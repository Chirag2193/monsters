import React from 'react';
import Card from '../card/Card';

export default function CardList(props) {
  return (
      <div>
          {props.monsters && props.monsters.map((monster, index) => {
              return  (
                  <Card key={index} monster={monster} />
              )
          })}
      </div>
  );
}
