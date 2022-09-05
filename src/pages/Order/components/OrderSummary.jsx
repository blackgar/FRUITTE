import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import addComma from '../../../utils/addComma';

const OrderSummary = ({ orderInfo }) => {
  let totalPrice = 0;
  let totalDeleveryFee = 0;
  if (orderInfo) {
    orderInfo.forEach(ele => {
      if (ele.productList) {
        ele.productList.forEach(ele2 => {
          totalPrice += ele2.price;
          totalDeleveryFee += ele2.delivery_fee;
        });
      }
    });
  }

  return (
    <>
      <BoxTitle title="주문 상품 정보" />
      <TextBox>
        <Text>상품가격</Text>
        <Text>{addComma(totalPrice)}</Text>
      </TextBox>
      <TextBox>
        <Text>배송비</Text>
        <Text>{'+' + addComma(totalDeleveryFee)}</Text>
      </TextBox>
      <Line />
      <TextBox>
        <Text>합계</Text>
        <Text>{addComma(totalPrice + totalDeleveryFee)}</Text>
      </TextBox>
    </>
  );
};

// styled-components 위치
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.textColor};
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid;
  color: ${props => props.theme.borderColor};
`;
const Text = styled.div`
  color: ${props => props.theme.textColor};
`;
export default OrderSummary;
