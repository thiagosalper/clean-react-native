import { GetUserImpl } from "../../usecases";

describe('GetUser usecase', () => {
  const user_mock = {
    email: 'thiago_salper@hotmail.com',
    password: '123',
  };

  it('getUser_get_should_return_an_user_object', () => {
    const user = { email: 'thiago_salper@hotmail.com', name: 'Thiago' };
    const response = new GetUserImpl().get(user_mock.email, user_mock.password);
    expect(response).toEqual(user);
  });
  it('getUser_get_not_should_return_undefined', () => {
    try {
      const response = new GetUserImpl().get(undefined, undefined);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e).toHaveProperty('message', 'erro generico');
    }
  });
});