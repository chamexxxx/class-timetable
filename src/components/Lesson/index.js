import React, { useState } from 'react';
import useDate from 'react-use-date';
import styled from 'styled-components/native';
import moment from 'moment';
import Card from './LessonCard';
import Actions from './LessonActions.js';
import useProgress from '../../hooks/useProgress.js';

export default ({
  startDate,
  endDate,
  onEdit,
  onCopy,
  onDelete,
  style,
  ...props
}) => {
  const [cardIsActive, setCardIsActive] = useState(true);
  const [minHeight, setMinHeight] = useState(null);
  const currentDate = useDate({ interval: 'minute' });
  const { percent, remained } = useProgress(startDate, endDate, currentDate);

  const startTime = startDate && moment(startDate).format('HH:mm');
  const endTime = endDate && moment(endDate).format('HH:mm');

  return (
    <Container style={[{ minHeight }, style]}>
      {cardIsActive ? (
        <Card
          startTime={startTime}
          endTime={endTime}
          progress={percent}
          remained={remained}
          {...props}
          onPress={() => setCardIsActive(false)}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setMinHeight(height);
          }}
        />
      ) : (
        <Actions
          onClose={() => setCardIsActive(true)}
          onEdit={onEdit}
          onCopy={onCopy}
          onDelete={onDelete}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  background: #ffffff;
  border-radius: 7px;
  elevation: 1;
`;
