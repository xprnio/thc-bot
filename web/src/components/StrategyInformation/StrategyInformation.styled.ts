import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  margin: 8px;
  background-color: rgba(65, 101, 138, .4);
  border: 1px solid #303030;
  color: #303030;
  border-radius: 8px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-grow: 1;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
export const Name = styled.h2`
  flex-grow: 1;
`;
export const RiskLevel = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
`;
export const UserRating = styled.h4`
  flex-grow: 1;
  font-weight: 300;
`;
export const Profit = styled.div`
  font-weight: 300;
`;
