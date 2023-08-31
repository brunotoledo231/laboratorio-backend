const patientRouter = require('express').Router();
const {
  getNewAppointment,
  deleteAppointment,
} = require('../controllers/patient');

patientRouter
  .patch('/:patient_id/appointments/new', getNewAppointment)
  .delete(
    '/:patient_id/appointments/delete/:appointment_id',
    deleteAppointment
  );

module.exports = patientRouter;
