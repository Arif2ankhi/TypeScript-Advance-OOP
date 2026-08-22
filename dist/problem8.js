"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type == 'general') {
        return 'General Patient';
    }
    else if (patient.type == 'emergency') {
        if (patient.emergencyLevel === 1) {
            return 'Critical emergency';
        }
        else if (patient.emergencyLevel === 2) {
            return 'Serious emergency';
        }
    }
    return 'Moderate emergency';
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }));
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));
// getPatientStatus({ name: "Rahim", age: 35, type: "general" });
// // "General patient"
// getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 });
// // "Critical emergency"
// getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 });
// // "Moderate emergency"
//# sourceMappingURL=problem8.js.map