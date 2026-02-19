"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/Modal";

type Expense = {
  _id: string;
  userId: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: Expense[];
};

const ViewExpensesDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchExpenses = async () => {
    if (fetched) return; // prevent unnecessary refetch

    try {
      setLoading(true);

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const token = localStorage.getItem("token");

      if (!baseUrl || !token) {
        toast.error("Authentication error");
        return;
      }

      const res = await axios.get<ApiResponse>(
        `${baseUrl}/api/expenses?page=1&limit=10&sortBy=date&sortOrder=desc`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setExpenses(res.data.data);
        setFetched(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch expenses");
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div onClick={fetchExpenses}>{trigger}</div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>All Expenses</DialogTitle>
        </DialogHeader>

        {loading ? (
          <p className="text-gray-400 mt-4">Loading expenses...</p>
        ) : expenses.length === 0 ? (
          <p className="text-gray-400 mt-4">No expenses found.</p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-2">Description</th>
                  <th className="text-left py-2">Category</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Date</th>
                </tr>
              </thead>

              <tbody>
                {expenses.map((exp) => (
                  <tr key={exp._id} className="border-b border-gray-800">
                    <td className="py-2">{exp.description}</td>
                    <td className="py-2">{exp.category}</td>
                    <td className="py-2 font-semibold">
                      ₹{exp.amount.toFixed(2)}
                    </td>
                    <td className="py-2">
                      {new Date(exp.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewExpensesDialog;
