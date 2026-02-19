"use client";

import React from "react";
import AddExpenseDialog from "@/ui_components/dashboard/AddExpenseDialog";
import ViewExpensesDialog from "@/ui_components/dashboard/ViewExpensesDialog";
import GetExpenseByIdDialog from "@/ui_components/dashboard/getExpenseById";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Expense Dashboard
        </h1>

        {/* Total Expense Card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-6 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Expenses</p>
          <h2 className="text-3xl font-bold mt-2">₹0.00</h2>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Add Expense */}
          <AddExpenseDialog
            trigger={
              <button className="p-6 rounded-xl bg-linear-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition">
                + Add Expense
              </button>
            }
          />

          {/* View All Expenses */}
          <ViewExpensesDialog
            trigger={
              <button className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition ">
                View All Expenses
              </button>
            }
          />

         <GetExpenseByIdDialog
         trigger={
          <button className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition">
            Search Expense by ID
          </button>
         }
/>


          {/* Update */}
          <button className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition">
            Update Expense
          </button>

          {/* Delete */}
          <button className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition">
            Delete Expense
          </button>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
