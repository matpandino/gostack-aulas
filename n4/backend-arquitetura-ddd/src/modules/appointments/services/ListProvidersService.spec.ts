import FakeUsersRepository from "@modules/users/repositories/fakes/FakeUsersRepository";
import ListProvidersService from "./ListProvidersService";

let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe("ListProviders", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProvidersService = new ListProvidersService(fakeUsersRepository);
  });

  it("should not be able to list the providers", async () => {
    const loggedUser = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const user2 = await fakeUsersRepository.create({
      name: "John Tre",
      email: "johntre@example.com",
      password: "123456",
    });

    const user3 = await fakeUsersRepository.create({
      name: "John Qua",
      email: "johnqua@example.com",
      password: "123456",
    });

    const providers = await listProvidersService.execute({
      user_id: loggedUser.id,
    });
    await expect(providers).toEqual([user2, user3]);
  });
});
