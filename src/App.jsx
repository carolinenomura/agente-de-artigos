"use client"; // Ensure this is a Client Component

import { useState } from "react";

export default function SalaryCalculator() {
  const [hourlyWage, setHourlyWage] = useState(""); // Initialize as empty string
  const [hoursWorked, setHoursWorked] = useState(""); // Initialize as empty string
  const [deductions, setDeductions] = useState(""); // Initialize as empty string
  const [salary, setSalary] = useState(0);

  const calculateSalary = () => {
    // Convert input values to numbers before calculation
    const wage = parseFloat(hourlyWage) || 0;
    const hours = parseFloat(hoursWorked) || 0;
    const deduct = parseFloat(deductions) || 0;

    const grossSalary = wage * hours;
    const netSalary = grossSalary - deduct;
    setSalary(netSalary);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <div className="flex flex-col gap-6">
          {" "}
          {/* Increased gap to 6 (1.5rem) */}
          <h2 className="text-xl font-bold">Calculadora de Salário no Japão</h2>
          <input
            type="number"
            placeholder="Salário por hora (¥)"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(e.target.value)} // Keep as string
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Horas trabalhadas"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)} // Keep as string
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Descontos (impostos, seguro)"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)} // Keep as string
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={calculateSalary}
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calcular Salário
          </button>
          <h3 className="text-lg font-semibold">
            Salário Líquido: ¥{salary.toLocaleString()}
          </h3>
        </div>
      </div>
    </div>
  );
}
