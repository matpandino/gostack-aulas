import Appointment from "../infra/typeorm/entities/Appointment";
import ICreateAppointmenetDTO from "../dtos/ICreateAppointmentDTO";

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmenetDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
