import styled from 'styled-components/native';

export const Safe = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  paddingHorizontal: 16px;
`;

export const Header = styled.View`
  backgroundColor: purple;
  flex: 1;
  justifyContent: center;
  paddingHorizontal: 16px;
`;

export const ProductView = {
  list: styled.View`
    flex: 2;
  `,
  item: styled.TouchableOpacity`
    backgroundColor: #e2e2e2;
    padding: 8px;
    borderRadius: 8px;
  `,
  separator: styled.View`
    height: 16px;
  `,
}
