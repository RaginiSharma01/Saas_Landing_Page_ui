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
  data: Expense;
};

const GetExpenseByIdDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const [expenseId, setExpenseId] = useState("");
  const [expense, setExpense] = useState<Expense | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchExpense = async () => {
    if (!expenseId) {
      toast.error("Please enter Expense ID");
      return;
    }

    try {
      setLoading(true);
      setExpense(null);

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const token = localStorage.getItem("token");

      const res = await axios.get<ApiResponse>(
        `${baseUrl}/api/expenses/${expenseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setExpense(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Expense not found"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Search Expense by ID</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter Expense ID"
            value={expenseId}
            onChange={(e) => setExpenseId(e.target.value)}
            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <button
            onClick={fetchExpense}
            disabled={loading}
            className="py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
          >
            {loading ? "Searching..." : "Search"}
          </button>

          {expense && (
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-4">
              <p><strong>Description:</strong> {expense.description}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Amount:</strong> ₹{expense.amount.toFixed(2)}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetExpenseByIdDialog;
