import { NavigationProp, RouteProp } from '@react-navigation/core';
import { Product } from '../data/models';

export type MainNavParamList = {
  HomeRoute: undefined;
  ProductRoute: { product: Product };
}

export type MainNavProps =  NavigationProp<MainNavParamList>;
export type ProductRouteProp = RouteProp<MainNavParamList, 'ProductRoute'>;