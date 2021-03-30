export default interface Booking {
    customerId: number;
    postalAddress: string;
    latitude: number;
    longitude: number;
    startTime: number;
    durationInHours: number;
    employeeId: number;
    hourlyPrice: number;
}