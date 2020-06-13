import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user.service';

describe('Users', () => {
  let userController: UserController;
  const response = 'user';
  let userService = {
    addUser: () => response, 
    findUserByUsername: () => response,
    findUserById: () => response,
    updateUser: () => response,
    deleteUser: () => response,                 
};

  beforeAll(async () => {
    const note = await Test.createTestingModule({
        controllers: [UserController], 
        providers: [UserService],
    })
        .overrideProvider(UserService)
        .useValue(userService)
        .compile();

    userController = note.get<UserController>(UserController);
  });

  it(`/POST user`, async () => {
    expect(await userController.addUser(response)).toBe(response);
  });

  it(`/GET user/username`, async () => {
    expect(await userController.findUserById('username')).toBe(response);
  });

  it(`/GET user/id`, async () => {
    expect(await userController.findUserById('id')).toBe(response);
  });

  it(`/PUT user`, async () => {
    expect(await userController.updateUser('id', 'changes')).toBe(response);
  });

  it(`/DELETE user`, async () => {
    expect(await userController.deleteUser('id')).toBe(response);
  });

});