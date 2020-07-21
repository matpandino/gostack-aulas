import AppError from "@shared/errors/AppError";

import ShowProfileService from "./ShowProfileService";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe("CreateUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it("should be able to show the profile", async () => {
    const user = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const foundUser = await showProfileService.execute({ user_id: user.id });

    await expect(foundUser.name).toBe("John Doe");
    await expect(foundUser.email).toBe("johndoe@example.com");
  });

  it("should not be able to show the profile of not found user", async () => {
    await expect(
      showProfileService.execute({ user_id: "not-a-real-id" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
