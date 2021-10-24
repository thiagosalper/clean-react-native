import { GetUserImpl } from "../../usecases";

describe('GetUser usecase', () => {
  it('getUser_get_should_return_an_user_object', () => {
    const user = { email: 'thiago_salper@hotmail.com', name: 'Thiago' };
    const getUser = new GetUserImpl();
    expect(getUser.get()).toEqual(user);
  });
});