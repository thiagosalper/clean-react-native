import styled from 'styled-components/native';

export const Safe = styled.View`
  flex: 1;
`;

export const Scene = styled.View`
  backgroundColor: #333;
  flex: 1;
  padding: 16px;
`;

export const Bar = {
  flex: styled.View`
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #ccff99;
    padding: 16px;
  `,
  price: styled.Text`
    color: #00aa00;
    fontSize: 24px;
  `,
}

export const Content = styled.View`
  flex: 2;
  padding: 16px;
`;


// export const ProductView = {
//   list: styled.View`
//     flex: 2;
//   `,
//   item: styled.TouchableOpacity`
//     backgroundColor: #f2f2f2;
//     padding: 8px;
//     borderRadius: 8px;
//   `,
//   separator: styled.View`
//     height: 16px;
//   `,
// }
