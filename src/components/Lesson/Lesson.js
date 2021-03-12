import React, { useState, useEffect } from 'react';
import useDate from 'react-use-date';
import styled from 'styled-components/native';
import moment from 'moment';
import Card from './LessonCard';
import Actions from './LessonActions.js';
import useProgress from 'hooks/useProgress.js';

export default ({
  startDate,
  endDate,
  status,
  onChangeStatus,
  onEdit,
  onCopy,
  onDelete,
  style,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false); // true - actions is active, false - card is active
  const [minHeight, setMinHeight] = useState(null);
  const currentDate = useDate({ interval: 'minute' });
  const { percent, remained } = useProgress(startDate, endDate, currentDate);

  const startTime = startDate && moment(startDate).format('HH:mm');
  const endTime = endDate && moment(endDate).format('HH:mm');

  useEffect(() => {
    setIsActive(!!status);
  }, [status]);

  const hideCard = () => {
    setIsActive(true);
    onChangeStatus(true);
  };

  const showCard = () => {
    setIsActive(false);
    onChangeStatus(false);
  };

  const _onEdit = () => {
    showCard();
    onEdit && onEdit();
  };

  const _onCopy = () => {
    showCard();
    onCopy && onCopy();
  };

  return (
    <Container style={[{ minHeight }, style]}>
      {!isActive ? (
        <Card
          startTime={startTime}
          endTime={endTime}
          progress={percent}
          remained={remained}
          {...props}
          onPress={hideCard}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setMinHeight(height);
          }}
        />
      ) : (
        <Actions
          onClose={showCard}
          onEdit={_onEdit}
          onCopy={_onCopy}
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
