"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  sopName: string;
  employee: string;
  startTime: string;
  endTime: string;
  breakTime: string;
  unitsCompleted: string;
  wage: string;
  date: string;
}

interface CalculationResults {
  totalTimeMinutes: number;
  timePerUnit: number;
  unitsPerHour: number;
  totalLaborCost: number;
  laborCostPerUnit: number;
  startOfWeek: string;
}

export default function SOPTimeTracker() {
  const [inputs, setInputs] = useState<FormInputs>({
    sopName: "",
    employee: "",
    startTime: "",
    endTime: "",
    breakTime: "",
    unitsCompleted: "",
    wage: "",
    date: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const timeToMinutes = (timeString: string): number => {
    if (!timeString) return 0;
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const getStartOfWeek = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    const monday = new Date(date.setDate(diff));
    return monday.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      breakTime: parseFloat(inputs.breakTime) || 0,
      unitsCompleted: parseFloat(inputs.unitsCompleted) || 0,
      wage: parseFloat(inputs.wage) || 0,
    };

    const startMinutes = timeToMinutes(inputs.startTime);
    const endMinutes = timeToMinutes(inputs.endTime);
    
    // Calculate total time in minutes
    let totalTimeMinutes = endMinutes - startMinutes - values.breakTime;
    
    // Handle overnight shifts
    if (totalTimeMinutes < 0) {
      totalTimeMinutes = (24 * 60) + totalTimeMinutes;
    }

    const timePerUnit = values.unitsCompleted > 0 ? totalTimeMinutes / values.unitsCompleted : 0;
    const unitsPerHour = timePerUnit > 0 ? 60 / timePerUnit : 0;
    const totalLaborCost = (totalTimeMinutes / 60) * values.wage;
    const laborCostPerUnit = values.unitsCompleted > 0 ? totalLaborCost / values.unitsCompleted : 0;
    const startOfWeek = getStartOfWeek(inputs.date);

    const calculationResults = {
      totalTimeMinutes,
      timePerUnit,
      unitsPerHour,
      totalLaborCost,
      laborCostPerUnit,
      startOfWeek,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("SOP Time Tracker", {
      sopName: inputs.sopName,
      employee: inputs.employee,
      startTime: inputs.startTime,
      endTime: inputs.endTime,
      breakTime: values.breakTime,
      unitsCompleted: values.unitsCompleted,
      wage: values.wage,
      date: inputs.date,
    }, {
      totalTimeMinutes,
      timePerUnit,
      unitsPerHour,
      totalLaborCost,
      laborCostPerUnit,
      startOfWeek,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-4 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-border";

  const isFormValid = () => {
    return (
      inputs.sopName.trim() &&
      inputs.employee.trim() &&
      inputs.startTime &&
      inputs.endTime &&
      parseFloat(inputs.unitsCompleted) > 0 &&
      parseFloat(inputs.wage) >= 0 &&
      inputs.date
    );
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">SOP Time Tracker</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Track task completion time, calculate efficiency metrics, and monitor labor costs for standard operating procedures.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="sopName" className="block text-lg font-medium text-foreground mb-2">
                    SOP Name
                  </label>
                  <input
                    id="sopName"
                    type="text"
                    name="sopName"
                    value={inputs.sopName}
                    onChange={handleInputChange}
                    placeholder="Enter SOP name"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="employee" className="block text-lg font-medium text-foreground mb-2">
                    Employee
                  </label>
                  <input
                    id="employee"
                    type="text"
                    name="employee"
                    value={inputs.employee}
                    onChange={handleInputChange}
                    placeholder="Enter employee name"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-lg font-medium text-foreground mb-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={inputs.date}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="startTime" className="block text-lg font-medium text-foreground mb-2">
                    Start Time
                  </label>
                  <input
                    id="startTime"
                    type="time"
                    name="startTime"
                    value={inputs.startTime}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="endTime" className="block text-lg font-medium text-foreground mb-2">
                    End Time
                  </label>
                  <input
                    id="endTime"
                    type="time"
                    name="endTime"
                    value={inputs.endTime}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="breakTime" className="block text-lg font-medium text-foreground mb-2">
                    Break Time (Minutes)
                  </label>
                  <input
                    id="breakTime"
                    type="number"
                    name="breakTime"
                    value={inputs.breakTime}
                    onChange={handleInputChange}
                    placeholder="Enter break time"
                    min="0"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="unitsCompleted" className="block text-lg font-medium text-foreground mb-2">
                    Units Completed
                  </label>
                  <input
                    id="unitsCompleted"
                    type="number"
                    name="unitsCompleted"
                    value={inputs.unitsCompleted}
                    onChange={handleInputChange}
                    placeholder="Enter units completed"
                    min="1"
                    step="1"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="wage" className="block text-lg font-medium text-foreground mb-2">
                    Wage ($/hr)
                  </label>
                  <input
                    id="wage"
                    type="number"
                    name="wage"
                    value={inputs.wage}
                    onChange={handleInputChange}
                    placeholder="Enter hourly wage"
                    min="0"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md shadow transition"
                disabled={!isFormValid()}
              >
                Calculate
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 mt-8"
                >
                  <Card className="border border-border bg-muted/50">
                    <CardContent className="p-6">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Time</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.totalTimeMinutes.toFixed(0)} minutes
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Time per Unit</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.timePerUnit.toFixed(2)} min
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Units per Hour</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.unitsPerHour.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Labor Cost</p>
                          <p className="text-2xl font-bold text-primary">
                            ${results.totalLaborCost.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Labor Cost per Unit</p>
                          <p className="text-2xl font-bold text-primary">
                            ${results.laborCostPerUnit.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Start of Week</p>
                          <p className="text-lg font-bold text-primary">
                            {results.startOfWeek}
                          </p>
                        </div>
                      </div>

                      {results.timePerUnit > 0 ? (
                        <div className="mt-6 space-y-4">
                          {results.timePerUnit > 5 ? (
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                              <p className="text-yellow-600 dark:text-yellow-400 font-medium">Efficiency Alert</p>
                              <p className="text-sm text-muted-foreground mt-1">
                                Time per unit is above 5 minutes. Consider reviewing the SOP for optimization opportunities.
                              </p>
                            </div>
                          ) : null}

                          {results.unitsPerHour >= 12 ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                              <p className="text-green-600 dark:text-green-400 font-medium">High Efficiency</p>
                              <p className="text-sm text-muted-foreground mt-1">
                                Excellent productivity rate! This employee is performing above average.
                              </p>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </form>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Make sure start and end times are recorded in real-time — not from memory</li>
                <li>Always subtract break time to avoid inflating productivity metrics</li>
                <li>Track units completed per task type to establish clear UPH benchmarks</li>
                <li>Include all setup and cleanup time in the total</li>
                <li>Log the employee name and SOP name for future performance analysis</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}