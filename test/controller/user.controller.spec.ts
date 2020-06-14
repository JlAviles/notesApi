import { Test } from '@nestjs/testing';
import { UserController } from '../../src/controller/user.controller';
import { UserService } from '../../src/service/user.service';

describe('Users', () => {
  let userController: UserController;
  let response;
  let userService = {
    addUser: () => response, 
    findAllUsers: () => response,
    findUserByUsername: () => response,
    findUserById: () => response,
    updateUser: () => response,
    deleteUser: () => response,                 
};

  beforeAll(async () => {
    const user = await Test.createTestingModule({
        controllers: [UserController], 
        providers: [UserService],
    })
        .overrideProvider(UserService)
        .useValue(userService)
        .compile();

    userController = user.get<UserController>(UserController);
  });

  it(`/POST user`, async () => {
    response = 'user';
    expect(await userController.addUser(response)).toBe(response);
  });

  it(`/GET users`, async () => {
    response = ['user'];
    expect(await userController.findAllUsers()).toBe(response);
  });

  it(`/GET user/username`, async () => {
    response = 'user';
    expect(await userController.findUserById('username')).toBe(response);
  });

  it(`/GET user/id`, async () => {
    response = 'user';
    expect(await userController.findUserById('id')).toBe(response);
  });

  it(`/PUT user`, async () => {
    response = 'user';
    expect(await userController.updateUser('id', 'changes')).toBe(response);
  });

  it(`/DELETE user`, async () => {
    response = 'user';
    expect(await userController.deleteUser('id')).toBe(response);
  });

});