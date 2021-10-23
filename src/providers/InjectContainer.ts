import { Container, decorate, inject } from 'inversify';
import { GetUser, ListProducts } from '../data/protocols';
import { GetUserImpl, ListProductsImpl } from '../data/usecases';
import { TYPES } from '../domain/protocols/types';
import { HomeProps } from '../domain/protocols/HomeProps';
import HomePropsImpl from '../domain/usecases/HomePropsImpl';

const InjectContainer = new Container();
InjectContainer.bind<GetUser>(TYPES.GetUser).to(GetUserImpl);
InjectContainer.bind<ListProducts>(TYPES.ListProducts).to(ListProductsImpl);
InjectContainer.bind<HomeProps>(TYPES.HomeProps).to(HomePropsImpl);
decorate(inject(TYPES.GetUser), HomePropsImpl, 0);
decorate(inject(TYPES.ListProducts), HomePropsImpl, 1);

export { InjectContainer };
