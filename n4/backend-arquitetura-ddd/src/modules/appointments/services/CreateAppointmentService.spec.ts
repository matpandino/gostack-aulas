import AppError from "@shared/errors/AppError";

import FakeAppointmentsRepository from "../repositories/fakes/FakeAppointmentsRepository";
import CreateAppointmentService from "./CreateAppointmentService";

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe("CreateAppointment", () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );
  });

  it("should be able to create: appointment", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      user_id: "123",
      provider_id: "123123",
    });

    expect(appointment).toHaveProperty("id");
    expect(appointment.provider_id).toBe("123123");
  });

  it("should not be able to create two appointments on the same time", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 11).getTime();
    });

    const appointmentDate = new Date(2020, 4, 10, 12);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: "123",
      provider_id: "123123",
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: "123",
        provider_id: "123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create appointments on a past date", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 10, 11),
        user_id: "123",
        provider_id: "123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create an appointment with same as provider", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 10, 13),
        user_id: "123123",
        provider_id: "123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create an appointment outside the available time (11am-10pm UTC)", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 11, 7),
        user_id: "user_id",
        provider_id: "provider_id",
      })
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 11, 18),
        user_id: "user_id",
        provider_id: "provider_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
