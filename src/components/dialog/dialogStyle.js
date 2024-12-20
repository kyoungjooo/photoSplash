import styled from "@emotion/styled";

export const DialogWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 700px;
  background-color: #fff;
  border-radius: 12px;
`;
export const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid;
`;
export const DialogBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% -220px);
`;
export const DialogImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const DialogFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  padding: 0 24px;
  gap: 24px;
`;
export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
export const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
export const CloseAuth = styled.img``;
export const CloseAuthName = styled.span``;
export const BookMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const BookMarkBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid;
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
export const InfoBoxItem = styled.div``;
export const InfoBoxItemLabel = styled.span``;
export const InfoBoxItemValue = styled.span``;
export const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`;
export const TagBoxTag = styled.div`
  padding: 4px 8px 6px 8px;
  border-radius: 4px;
`;
